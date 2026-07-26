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
    <div className="flex flex-col items-center w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-12rem)] flex items-center px-6 py-12 md:py-0 bg-slate-50 border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-6">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary tracking-tight mb-8 leading-[1.2]">
              Comprehensive <br className="hidden md:block" /><span className="text-accent">Accreditation</span> Services.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Expert guidance and tailored frameworks to ensure your business achieves and maintains industry-leading compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="/contact" className="kairo-button w-full sm:w-auto">
                Schedule a Consultation
              </a>
              <a href="#directory" className="kairo-button-outline w-full sm:w-auto">
                View Directory
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full md:w-[120%] h-[350px] md:h-[450px] lg:h-[550px] rounded-l-[2rem] rounded-r-none md:-right-6 lg:-right-12 overflow-hidden shadow-2xl shadow-black/10"
          >
            {/* TODO: Add professional placeholder image /services-hero.jpg */}
            <img 
              src="https://images.unsplash.com/photo-1552581236-e31573ddac28?auto=format&fit=crop&w=1200&q=80" 
              alt="Consulting meeting regarding accreditation" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </section>

      {/* Interactive Directory Section */}
      <section id="directory" className="w-full py-24 px-6 bg-slate-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-4">Explore Frameworks</h2>
              <p className="text-muted-foreground max-w-xl">
                Interact with our directory below to learn more about the specific accreditations we help businesses secure across the UK.
              </p>
            </div>
            <a href="/calculator" className="kairo-button shrink-0">
              Launch Strategic Calculator
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full bg-white rounded-[2rem] shadow-xl shadow-black/5 p-4 md:p-8 border border-black/5"
          >
            <InteractiveBubbles items={accreditations} />
          </motion.div>
        </div>
      </section>

      {/* Corporate Value Props */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-4">The Riskwood Advantage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our consultancy approach is built on transparency, industry expertise, and long-term partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-black/5 hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded bg-white flex items-center justify-center mb-6 text-accent shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Guaranteed Compliance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our meticulous gap analysis and internal audit processes ensure you are completely ready before the external auditor arrives.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-black/5 hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded bg-white flex items-center justify-center mb-6 text-accent shadow-sm">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Bespoke Documentation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don't do templates. Every policy and procedure is crafted specifically around your unique operational requirements.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-black/5 hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded bg-white flex items-center justify-center mb-6 text-accent shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Lead Auditor Expertise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our consultants are qualified lead auditors who know exactly what certification bodies look for during assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
