"use client";

import { motion } from "framer-motion";
import { Shield, ShieldCheck, Lock, HardHat, Server, FileCheck, Award, Flame, Zap, Truck } from "lucide-react";
import InteractiveBubbles from "./InteractiveBubbles";

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

export default function AccreditationsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 relative overflow-hidden bg-background">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(0,82,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-black/10 bg-black/[0.03] mb-8 backdrop-blur-md"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Strategic Directory</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-kairo mb-10 text-bone leading-[0.8] uppercase"
          >
            CORE <br /> <span className="text-accent italic">COMPETENCIES</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-kairo max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium tracking-tight"
          >
            We move beyond simple manuals. We integrate with your team through 
            a structured, high-standard process that guarantees certification.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full mb-20"
        >
          <InteractiveBubbles items={accreditations} />
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 kairo-card bg-accent/5 border-accent/20 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-black mb-4 tracking-kairo text-bone uppercase">Ready for Analysis?</h2>
            <p className="text-muted-kairo text-base font-medium leading-relaxed">
              Don't guess which standard you need. Use our strategic calculator to 
              determine the highest impact accreditations for your specific operational goals.
            </p>
          </div>
          <a href="/calculator" className="kairo-button px-10 py-5 text-sm">
            Launch Strategic Calculator
          </a>
        </motion.div>
      </div>
    </div>
  );
}
