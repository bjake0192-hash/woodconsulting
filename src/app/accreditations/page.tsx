"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, ShieldCheck, Lock, HardHat, Server, FileCheck, Award, Flame, Zap, Truck } from "lucide-react";

export const dynamic = "force-static";

type Accreditation = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon?: React.ElementType;
  image?: string;
  color: string;
  industry: "Construction" | "Electrical" | "General" | "Security" | "Logistics";
};

const accreditations: Accreditation[] = [
  {
    id: "chas",
    title: "CHAS",
    shortDesc: "Health & Safety Compliance",
    fullDesc: "The UK's leading provider of risk management and compliance services. CHAS helps contractors and clients manage health and safety risks effectively through standardized pre-qualification assessments.",
    icon: HardHat,
    color: "text-yellow-500",
    industry: "Construction",
  },
  {
    id: "avetta",
    title: "Avetta",
    shortDesc: "Supply Chain Risk Management",
    fullDesc: "Avetta connects the world's leading organizations with qualified suppliers, contractors, and vendors through a rigorous, data-driven compliance and vetting process.",
    image: "/Avetta-Logo.webp",
    color: "text-green-400",
    industry: "General",
  },
  {
    id: "niceic",
    title: "NICEIC",
    shortDesc: "Electrical Excellence",
    fullDesc: "The UK's primary voluntary regulatory body for the electrical contracting industry. It assesses the electrical competence of businesses for over sixty years to ensure safety and quality.",
    image: "/NICEIC-logo.png",
    color: "text-red-500",
    industry: "Electrical",
  },
  {
    id: "iso-9001",
    title: "ISO 9001",
    shortDesc: "Quality Management",
    fullDesc: "The global benchmark for Quality Management Systems (QMS). It provides the tools and principles needed to ensure consistent quality and operational efficiency across your entire organization.",
    image: "/iso9001.png",
    color: "text-blue-500",
    industry: "General",
  },
  {
    id: "iso-27001",
    title: "ISO 27001",
    shortDesc: "Information Security",
    fullDesc: "The international standard for Information Security Management (ISMS). It provides a robust, technology-agnostic framework for protecting sensitive assets and managing digital risks.",
    image: "/iso27001.webp",
    color: "text-purple-500",
    industry: "Security",
  },
  {
    id: "constructionline",
    title: "Constructionline",
    shortDesc: "Procurement & Supply Chain",
    fullDesc: "The UK's most connected procurement and supply chain management service. It streamlines the PQQ process, helping buyers find pre-vetted, high-quality suppliers efficiently.",
    image: "/Constructionline-Gold-Logo.png",
    color: "text-indigo-500",
    industry: "Construction",
  },
  {
    id: "safecontractor",
    title: "SafeContractor",
    shortDesc: "H&S Accreditation",
    fullDesc: "A market-leading health & safety accreditation that allows contractors to showcase their commitment to safety, sustainability, and ethical practices to potential buyers.",
    image: "/safecontractor.png",
    color: "text-orange-500",
    industry: "General",
  },
  {
    id: "gas-safe",
    title: "Gas Safe",
    shortDesc: "Gas Safety Register",
    fullDesc: "The official registration body for gas businesses and engineers in the UK. It ensures that only competent, qualified professionals work on gas appliances legally.",
    image: "/gassafe.png",
    color: "text-orange-600",
    industry: "General",
  },
  {
    id: "cyber-essentials",
    title: "Cyber Essentials",
    shortDesc: "Cyber Defense",
    fullDesc: "A UK government-backed scheme that helps organizations protect themselves against a whole range of the most common cyber attacks, providing a clear picture of security levels.",
    image: "/cyber essentials.png",
    color: "text-cyan-500",
    industry: "Security",
  },
  {
    id: "fors",
    title: "FORS",
    shortDesc: "Fleet Operator Recognition",
    fullDesc: "A voluntary accreditation scheme for fleet operators which aims to raise the level of quality within fleet operations and demonstrate best practice in safety and efficiency.",
    image: "/fors logo.jpeg",
    color: "text-blue-400",
    industry: "Logistics",
  }
];

function AccreditationCard({ item }: { item: Accreditation }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const Icon = item.icon;

  return (
    <div 
      className="relative w-full aspect-square cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 backface-hidden kairo-card flex flex-col items-center justify-center border border-white/5 group-hover:border-accent/30 transition-all duration-500 bg-white/5"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,179,150,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className={`w-28 h-28 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 relative overflow-hidden grayscale group-hover:grayscale-0`}>
            {item.image ? (
              <div className="relative w-full h-full">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-contain"
                />
              </div>
            ) : Icon ? (
              <Icon strokeWidth={1.5} className={`w-14 h-14 ${item.color}`} />
            ) : null}
          </div>
          
          <h3 className="text-lg font-black text-bone transition-colors text-center tracking-kairo uppercase">
            {item.title}
          </h3>
          <p className="text-[10px] text-muted-kairo mt-1 font-bold tracking-[0.2em] uppercase">
            {item.industry}
          </p>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden kairo-card flex flex-col border border-accent/20 bg-background/95"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 flex items-center justify-center relative overflow-hidden`}>
              {item.image ? (
                <div className="relative w-full h-full">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-contain"
                  />
                </div>
              ) : Icon ? (
                <Icon strokeWidth={2} className={`w-8 h-8 ${item.color}`} />
              ) : null}
            </div>
            <h3 className="font-black text-bone tracking-kairo text-lg uppercase">{item.title}</h3>
          </div>
          
          <p className="text-sm text-muted-kairo leading-relaxed font-medium mb-auto overflow-hidden">
            {item.fullDesc}
          </p>

          <a 
            href="/calculator"
            onClick={(e) => e.stopPropagation()}
            className="kairo-button w-full text-[11px] uppercase tracking-widest justify-center mt-6"
          >
            Run Assessment
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function AccreditationsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(197,179,150,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-9xl font-black tracking-kairo mb-8 text-bone leading-none uppercase"
          >
            Core <span className="text-accent italic">Competencies</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-kairo max-w-2xl mx-auto text-xl leading-relaxed font-medium"
          >
            We move beyond simple manuals. We integrate with your team through 
            a structured, high-standard process that guarantees certification.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {accreditations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.3 }}
            >
              <AccreditationCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
