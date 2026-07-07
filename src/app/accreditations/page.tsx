"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ShieldCheck, Lock, HardHat, Server, FileCheck, Award, Flame, Zap, Truck } from "lucide-react";

export const runtime = "edge";

type Accreditation = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
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
    icon: Shield,
    color: "text-green-400",
    industry: "General",
  },
  {
    id: "niceic",
    title: "NICEIC",
    shortDesc: "Electrical Excellence",
    fullDesc: "The UK's primary voluntary regulatory body for the electrical contracting industry. It assesses the electrical competence of businesses for over sixty years to ensure safety and quality.",
    icon: Zap,
    color: "text-red-500",
    industry: "Electrical",
  },
  {
    id: "iso-9001",
    title: "ISO 9001",
    shortDesc: "Quality Management",
    fullDesc: "The global benchmark for Quality Management Systems (QMS). It provides the tools and principles needed to ensure consistent quality and operational efficiency across your entire organization.",
    icon: Award,
    color: "text-blue-500",
    industry: "General",
  },
  {
    id: "iso-27001",
    title: "ISO 27001",
    shortDesc: "Information Security",
    fullDesc: "The international standard for Information Security Management (ISMS). It provides a robust, technology-agnostic framework for protecting sensitive assets and managing digital risks.",
    icon: Lock,
    color: "text-purple-500",
    industry: "Security",
  },
  {
    id: "constructionline",
    title: "Constructionline",
    shortDesc: "Procurement & Supply Chain",
    fullDesc: "The UK's most connected procurement and supply chain management service. It streamlines the PQQ process, helping buyers find pre-vetted, high-quality suppliers efficiently.",
    icon: FileCheck,
    color: "text-indigo-500",
    industry: "Construction",
  },
  {
    id: "safecontractor",
    title: "SafeContractor",
    shortDesc: "H&S Accreditation",
    fullDesc: "A market-leading health & safety accreditation that allows contractors to showcase their commitment to safety, sustainability, and ethical practices to potential buyers.",
    icon: ShieldCheck,
    color: "text-orange-500",
    industry: "General",
  },
  {
    id: "gas-safe",
    title: "Gas Safe",
    shortDesc: "Gas Safety Register",
    fullDesc: "The official registration body for gas businesses and engineers in the UK. It ensures that only competent, qualified professionals work on gas appliances legally.",
    icon: Flame,
    color: "text-orange-600",
    industry: "General",
  },
  {
    id: "cyber-essentials",
    title: "Cyber Essentials",
    shortDesc: "Cyber Defense",
    fullDesc: "A UK government-backed scheme that helps organizations protect themselves against a whole range of the most common cyber attacks, providing a clear picture of security levels.",
    icon: Server,
    color: "text-cyan-500",
    industry: "Security",
  },
  {
    id: "fors",
    title: "FORS",
    shortDesc: "Fleet Operator Recognition",
    fullDesc: "A voluntary accreditation scheme for fleet operators which aims to raise the level of quality within fleet operations and demonstrate best practice in safety and efficiency.",
    icon: Truck,
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
          className="absolute inset-0 backface-hidden glass-panel p-6 rounded-[2rem] flex flex-col items-center justify-center border border-slate-200 group-hover:border-blue-500/50 transition-colors duration-500 bg-white"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:bg-blue-50`}>
            <Icon strokeWidth={1.5} className={`w-8 h-8 ${item.color}`} />
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 transition-colors text-center tracking-tighter uppercase">
            {item.title}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1 font-black tracking-widest uppercase">
            {item.industry}
          </p>
          
          <div className="mt-4 flex items-center gap-1 text-[10px] font-black text-blue-600/50 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Tap to flip</span>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden glass-panel p-6 rounded-[2rem] flex flex-col border border-blue-500/30 bg-blue-50/50"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-sm`}>
              <Icon strokeWidth={2} className={`w-5 h-5 ${item.color}`} />
            </div>
            <h3 className="font-bold text-slate-900 tracking-tighter text-sm uppercase">{item.title}</h3>
          </div>
          
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium mb-auto overflow-hidden">
            {item.fullDesc}
          </p>

          <a 
            href="/calculator"
            onClick={(e) => e.stopPropagation()}
            className="mt-4 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest text-center transition-colors shadow-lg shadow-blue-500/20"
          >
            Run Calculator
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function AccreditationsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 mb-6 border border-blue-100"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Industry Standards</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900 leading-none"
          >
            Our <span className="text-blue-600">Accreditations</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            We specialize in streamlining the certification process for the UK's most demanding industries. Tap any card to learn more about our core competencies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
