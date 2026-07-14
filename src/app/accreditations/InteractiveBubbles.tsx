"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type BubbleData = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: string;
  icon?: any;
  color: string;
  industry: string;
};

export default function InteractiveBubbles({ items }: { items: BubbleData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement[]>([]);
  const requestRef = useRef<number>();
  
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIdRef = useRef<string | null>(null);

  const handleBubbleClick = (id: string) => {
    if (selectedIdRef.current === id) {
      selectedIdRef.current = null;
      setSelectedId(null);
    } else {
      selectedIdRef.current = id;
      setSelectedId(id);
    }
  };

  // Physics state
  const physicsRef = useRef({
    bubbles: items.map((item, i) => {
      // Random starting positions spread around the center
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 150 + 30;
      return {
        ...item,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: 60, // Base radius
        targetRadius: 60,
        isHovered: false,
      };
    }),
    mouse: { x: 0, y: 0, active: false }
  });

  useEffect(() => {
    const updatePhysics = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      
      const state = physicsRef.current;
      const bubbles = state.bubbles;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        const isSelected = b.id === selectedIdRef.current;
        
        b.targetRadius = isSelected ? 170 : (b.isHovered ? 75 : 60);
        b.radius += (b.targetRadius - b.radius) * 0.1;

        if (isSelected) {
          // Strong attraction to center for selected bubble
          const dxCenter = centerX - b.x;
          const dyCenter = centerY - b.y;
          b.vx += dxCenter * 0.05;
          b.vy += dyCenter * 0.05;
          b.vx *= 0.8; // High damping to settle quickly
          b.vy *= 0.8;
        } else {
          // Attract to center slightly
          const dxCenter = centerX - b.x;
          const dyCenter = centerY - b.y;
          b.vx += dxCenter * 0.0005;
          b.vy += dyCenter * 0.0005;

          // Slight random movement
          b.vx += (Math.random() - 0.5) * 0.1;
          b.vy += (Math.random() - 0.5) * 0.1;

          // Mouse repulsion (only if nothing is selected)
          if (state.mouse.active && !selectedIdRef.current) {
            const dxMouse = b.x - state.mouse.x;
            const dyMouse = b.y - state.mouse.y;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            if (distMouse < 200) {
              const force = (200 - distMouse) / 200;
              b.vx += (dxMouse / distMouse) * force * 0.5;
              b.vy += (dyMouse / distMouse) * force * 0.5;
            }
          }

          b.vx *= 0.92;
          b.vy *= 0.92;
        }

        b.x += b.vx;
        b.y += b.vy;

        // Boundary collision
        if (b.x - b.radius < 0) { b.x = b.radius; b.vx *= -0.5; }
        if (b.x + b.radius > width) { b.x = width - b.radius; b.vx *= -0.5; }
        if (b.y - b.radius < 0) { b.y = b.radius; b.vy *= -0.5; }
        if (b.y + b.radius > height) { b.y = height - b.radius; b.vy *= -0.5; }
      }

      // Circle collisions
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];
          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b1.radius + b2.radius + 8; // 8px padding

          if (dist < minDist) {
            const angle = Math.atan2(dy, dx);
            const overlap = minDist - dist;
            
            // Separation force
            const force = overlap * 0.1;
            const fx = Math.cos(angle) * force;
            const fy = Math.sin(angle) * force;

            // Selected bubble has massive weight so it pushes others away without moving itself
            const mass1 = b1.id === selectedIdRef.current ? 100 : 1;
            const mass2 = b2.id === selectedIdRef.current ? 100 : 1;
            const totalMass = mass1 + mass2;

            b1.vx -= fx * (mass2 / totalMass);
            b1.vy -= fy * (mass2 / totalMass);
            b2.vx += fx * (mass1 / totalMass);
            b2.vy += fy * (mass1 / totalMass);
            
            const sepX = Math.cos(angle) * overlap;
            const sepY = Math.sin(angle) * overlap;
            b1.x -= sepX * (mass2 / totalMass);
            b1.y -= sepY * (mass2 / totalMass);
            b2.x += sepX * (mass1 / totalMass);
            b2.y += sepY * (mass1 / totalMass);
          }
        }
      }

      // Update DOM
      bubbles.forEach((b, i) => {
        const el = bubblesRef.current[i];
        if (el) {
          el.style.transform = `translate(${b.x - b.radius}px, ${b.y - b.radius}px)`;
          el.style.width = `${b.radius * 2}px`;
          el.style.height = `${b.radius * 2}px`;
        }
      });

      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    requestRef.current = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    physicsRef.current.mouse = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  };

  const handleMouseLeave = () => {
    physicsRef.current.mouse.active = false;
  };

  const handleBubbleEnter = (index: number) => {
    physicsRef.current.bubbles[index].isHovered = true;
  };

  const handleBubbleLeave = (index: number) => {
    physicsRef.current.bubbles[index].isHovered = false;
  };

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className="w-full h-[550px] relative overflow-hidden rounded-[2rem] bg-black/[0.02] border border-black/5"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Overlay when a bubble is selected */}
        <div 
          className={`absolute inset-0 bg-white/60 backdrop-blur-sm transition-opacity duration-700 z-40 ${
            selectedId ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`} 
          onClick={() => handleBubbleClick(selectedId!)}
        />

        {items.map((item, i) => {
          const Icon = item.icon;
          const isSelected = selectedId === item.id;

          return (
            <div
              key={item.id}
              ref={el => {
                if (el) bubblesRef.current[i] = el;
              }}
              onMouseEnter={() => handleBubbleEnter(i)}
              onMouseLeave={() => handleBubbleLeave(i)}
              onClick={() => handleBubbleClick(item.id)}
              className="absolute top-0 left-0 rounded-full cursor-pointer group"
              style={{ 
                willChange: 'transform, width, height',
                perspective: "1500px",
                zIndex: isSelected ? 50 : 10,
              }}
            >
              <div 
                className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: isSelected ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front Side */}
                <div 
                  className={`absolute inset-0 rounded-full glass-panel flex flex-col items-center justify-center border-2 transition-colors duration-500 shadow-xl overflow-hidden ${
                    isSelected ? 'border-transparent' : 'border-transparent hover:border-accent bg-white/50 hover:bg-white/90'
                  }`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-1/2 h-1/2 relative flex items-center justify-center -mt-4 group-hover:scale-110 transition-transform">
                    {item.image ? (
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-contain p-2"
                        unoptimized
                      />
                    ) : Icon ? (
                      <Icon strokeWidth={2} className={`w-full h-full ${item.color} p-2`} />
                    ) : null}
                  </div>
                  
                  {/* Curved Text along the bottom */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
                    <path id={`curve-${item.id}`} d="M 12 50 A 38 38 0 0 0 88 50" fill="transparent" />
                    <text className="font-black tracking-widest uppercase" fill="currentColor" style={{ fontSize: '9px' }}>
                      <textPath href={`#curve-${item.id}`} startOffset="50%" textAnchor="middle">
                        {item.title}
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Back Side (Detail View) */}
                <div 
                  className="absolute inset-0 rounded-full bg-white border border-accent/20 flex flex-col items-center justify-center p-8 text-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="w-14 h-14 relative flex items-center justify-center mb-4 rounded-xl bg-black/[0.03]">
                    {item.image ? (
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-contain p-2"
                        unoptimized
                      />
                    ) : Icon ? (
                      <Icon strokeWidth={2} className={`w-8 h-8 ${item.color}`} />
                    ) : null}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-kairo mb-1 leading-tight px-4">{item.title}</h3>
                  <p className="text-[9px] font-black tracking-[0.2em] text-accent uppercase mb-4">{item.industry}</p>
                  
                  <p className="text-muted-foreground text-xs font-medium leading-relaxed mb-6 line-clamp-4 px-6">
                    {item.fullDesc}
                  </p>
                  
                  <a 
                    href="/calculator" 
                    className="kairo-button !py-3 !px-6 !text-[10px]" 
                    onClick={e => e.stopPropagation()}
                  >
                    Assessment
                  </a>

                  <button 
                    onClick={(e) => { e.stopPropagation(); handleBubbleClick(item.id); }}
                    className="absolute top-10 right-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors opacity-60 hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
