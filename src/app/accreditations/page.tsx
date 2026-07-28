"use client";

import { motion } from "framer-motion";
import { Shield, ShieldCheck, Lock, HardHat, Server, FileCheck, Award, Flame, Zap, Truck, ArrowRight } from "lucide-react";
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
      <section className="relative w-full pb-16 md:pb-24 pt-8 md:pt-12 px-6 bg-slate-50 border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight mb-6 leading-[1.2]">
              Comprehensive <br className="hidden md:block" /><span className="text-accent">Accreditation</span> Services.
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Expert guidance to ensure your business wins tenders, removes the paperwork burden, and passes first time.
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
            className="relative w-full md:w-[110%] h-[300px] md:h-[400px] lg:h-[480px] rounded-l-[2rem] rounded-r-none md:-right-6 lg:-right-12 overflow-hidden shadow-2xl shadow-black/10"
          >
            <img 
              src="/serviceshero.png" 
              alt="Consulting meeting regarding accreditation" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </section>

      {/* Interactive Directory Section */}
      <section id="directory" className="w-full py-24 px-6 bg-slate-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
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
      <section className="w-full py-16 md:py-20 px-6 bg-primary text-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-3"
              >
                Why Choose Us
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4"
              >
                The Riskwood <br className="hidden lg:block" />
                <span className="text-accent">Advantage.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-sm max-w-sm leading-relaxed mb-6"
              >
                Our consultancy approach is built on transparency, industry expertise, and long-term partnerships. We don't just secure your certification; we remove the paperwork burden and ensure you pass first time, so you can win more tenders.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                 <a href="/about" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white hover:text-accent transition-colors group">
                   Meet our expert team
                   <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                 </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Value Props */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {[
              {
                icon: ShieldCheck,
                title: "Guaranteed Compliance",
                desc: "Our meticulous gap analysis and internal audit processes ensure you are completely ready before the external auditor arrives. We leave nothing to chance.",
              },
              {
                icon: FileCheck,
                title: "Bespoke Documentation",
                desc: "We don't do templates. Every policy, manual, and procedure is crafted specifically around your unique operational requirements and business realities.",
              },
              {
                icon: Award,
                title: "Lead Auditor Expertise",
                desc: "Our consultants are qualified lead auditors who know exactly what certification bodies look for during assessment, giving you an insider's advantage.",
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                className="group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed text-xs md:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
