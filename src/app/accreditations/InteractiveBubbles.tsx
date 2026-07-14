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
  const [selectedBubble, setSelectedBubble] = useState<BubbleData | null>(null);

  // Physics state
  const physicsRef = useRef({
    bubbles: items.map((item, i) => {
      // Random starting positions spread around the center
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 200 + 50;
      return {
        ...item,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: 80, // Base radius
        targetRadius: 80,
        mass: 1,
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
        
        // Smooth radius transition (for hover effects)
        b.radius += (b.targetRadius - b.radius) * 0.1;

        // Attract to center
        const dxCenter = centerX - b.x;
        const dyCenter = centerY - b.y;
        b.vx += dxCenter * 0.0005;
        b.vy += dyCenter * 0.0005;

        // Slight random movement
        b.vx += (Math.random() - 0.5) * 0.1;
        b.vy += (Math.random() - 0.5) * 0.1;

        // Mouse repulsion
        if (state.mouse.active) {
          const dxMouse = b.x - state.mouse.x;
          const dyMouse = b.y - state.mouse.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 200) {
            const force = (200 - distMouse) / 200;
            b.vx += (dxMouse / distMouse) * force * 0.5;
            b.vy += (dyMouse / distMouse) * force * 0.5;
          }
        }

        // Apply velocity and damping
        b.vx *= 0.92;
        b.vy *= 0.92;
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

            b1.vx -= fx;
            b1.vy -= fy;
            b2.vx += fx;
            b2.vy += fy;
            
            // Immediately separate to prevent sticking
            const sepX = Math.cos(angle) * (overlap / 2);
            const sepY = Math.sin(angle) * (overlap / 2);
            b1.x -= sepX;
            b1.y -= sepY;
            b2.x += sepX;
            b2.y += sepY;
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
    physicsRef.current.bubbles[index].targetRadius = 100;
  };

  const handleBubbleLeave = (index: number) => {
    physicsRef.current.bubbles[index].targetRadius = 80;
  };

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className="w-full h-[600px] relative overflow-hidden rounded-[2.5rem] bg-black/[0.02] border border-black/5"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              ref={el => {
                if (el) bubblesRef.current[i] = el;
              }}
              onMouseEnter={() => handleBubbleEnter(i)}
              onMouseLeave={() => handleBubbleLeave(i)}
              onClick={() => setSelectedBubble(item)}
              className="absolute top-0 left-0 rounded-full glass-panel flex flex-col items-center justify-center cursor-pointer transition-colors hover:bg-white/90 shadow-xl group z-10 hover:z-20 border-2 hover:border-accent"
              style={{ willChange: 'transform, width, height' }}
            >
              <div className="w-16 h-16 relative flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
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
              <span className="text-xs font-black tracking-widest uppercase text-foreground">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Info Modal */}
      {selectedBubble && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm" onClick={() => setSelectedBubble(null)}>
          <div 
            className="kairo-card max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedBubble(null)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
            >
              ✕
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 relative flex items-center justify-center rounded-xl bg-black/[0.03]">
                {selectedBubble.image ? (
                  <Image 
                    src={selectedBubble.image} 
                    alt={selectedBubble.title} 
                    fill 
                    className="object-contain p-2"
                    unoptimized
                  />
                ) : selectedBubble.icon ? (
                  <selectedBubble.icon strokeWidth={2} className={`w-8 h-8 ${selectedBubble.color}`} />
                ) : null}
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-kairo">{selectedBubble.title}</h3>
                <p className="text-[10px] font-black tracking-[0.2em] text-accent uppercase">{selectedBubble.industry}</p>
              </div>
            </div>
            <p className="text-muted-foreground font-medium leading-relaxed mb-8">
              {selectedBubble.fullDesc}
            </p>
            <div className="flex gap-4">
              <a href="/calculator" className="kairo-button flex-1 justify-center">
                Strategic Assessment
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
