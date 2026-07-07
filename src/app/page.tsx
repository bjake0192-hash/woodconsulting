"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, BookOpen } from "lucide-react";

export const runtime = "edge";

const features = [
  {
    title: "ISO Certifications",
    description: "Achieve ISO 9001, 14001, and 27001 with our streamlined compliance framework.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Industry Specific",
    description: "Tailored guidance for Construction (CHAS), Healthcare, and Tech accreditations.",
    icon: <BookOpen className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Continuous Compliance",
    description: "Stay compliant year-round with automated tracking and expert audits.",
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />
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
    <div className="flex flex-col items-center w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Premium UK Compliance</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900"
          >
            Master <span className="text-blue-600">Accreditations</span> with Confidence
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We simplify complex compliance requirements into clear, actionable steps. 
            Gain and maintain the accreditations that unlock new contracts.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="/accreditations"
              className="px-10 py-5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-xl flex items-center gap-2 group"
            >
              Check Accreditations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/calculator"
              className="px-10 py-5 rounded-full bg-white border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-all shadow-sm"
            >
              Accreditation Calculator
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-slate-900">Comprehensive Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Everything you need to navigate the UK accreditation landscape successfully.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/30 hover:bg-white hover:border-blue-500/20 transition-all group premium-card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full max-w-7xl mx-auto px-6 py-32 border-t border-slate-100 bg-slate-50/30">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">The Methodology</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-slate-900">A Proven Path to <span className="text-blue-600">Certification</span></h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-xl font-medium">
              We don't just hand you a manual. We work alongside your team through a structured, predictable process that guarantees results and minimizes disruption.
            </p>
            <ul className="space-y-6">
              {['98% First-time pass rate', 'Dedicated compliance manager', 'Custom documentation portal'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-[2rem] flex gap-8 items-center hover:border-blue-500/30 transition-colors bg-white premium-card-hover"
                >
                  <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{step.number}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-1 tracking-tight text-slate-900">{step.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
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
