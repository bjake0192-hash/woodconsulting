"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, BookOpen } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "ISO Certifications",
    description: "Achieve ISO 9001, 14001, and 27001 with our streamlined compliance framework.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Industry Specific",
    description: "Tailored guidance for Construction (CHAS), Healthcare, and Tech accreditations.",
    icon: <BookOpen className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Continuous Compliance",
    description: "Stay compliant year-round with automated tracking and expert audits.",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />
  }
];

const steps = [
  { number: "01", title: "Gap Analysis", desc: "We identify exactly what you need to meet the standard." },
  { number: "02", title: "Implementation", desc: "Deploy processes and documentation seamlessly." },
  { number: "03", title: "Internal Audit", desc: "Pre-assessment to guarantee you pass first time." },
  { number: "04", title: "Certification", desc: "Gain your official UK accreditation badge." }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background glow element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 border border-blue-500/30"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">New: 2026 ISO Standards Available</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Master UK Accreditations with <span className="gradient-text-blue glow-text">Confidence</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We simplify complex compliance requirements into clear, actionable steps. 
            Gain and maintain the accreditations that unlock new contracts and build trust.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/accreditations"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
            >
              Check our Accreditations <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner Section */}
      <section className="w-full border-y border-[var(--card-border)] bg-white/5 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-500 mb-8 uppercase tracking-[0.2em]">
            Trusted by leading UK organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {/* Dummy Logos built with SVG */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="font-bold text-xl tracking-tighter text-white">BuildCo</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="font-bold text-xl tracking-tighter text-white">TechFlow</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="font-bold text-xl tracking-tighter text-white">GlobalMed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-black bg-white"></div>
                <div className="w-6 h-6 rounded-full border-2 border-black bg-gray-600"></div>
              </div>
              <span className="font-bold text-xl tracking-tighter text-white">Nexus</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
              <span className="font-bold text-xl tracking-tighter text-white">Apex</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">Comprehensive Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Everything you need to navigate the UK accreditation landscape successfully.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl shadow-sm hover:shadow-blue-500/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-[var(--card-border)] bg-white/2">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">A Proven Path to <span className="gradient-text-blue glow-text">Certification</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              We don't just hand you a manual. We work alongside your team through a structured, predictable process that guarantees results and minimizes disruption to your daily operations.
            </p>
            <ul className="space-y-4">
              {['98% First-time pass rate', 'Dedicated compliance manager', 'Custom documentation portal'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl flex gap-6 items-start hover:border-blue-500/30 transition-colors"
                >
                  <span className="text-3xl font-black text-blue-900/50">{step.number}</span>
                  <div>
                    <h4 className="text-lg font-bold mb-1 tracking-tight">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
