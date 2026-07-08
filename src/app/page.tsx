"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, BookOpen } from "lucide-react";

export const dynamic = "force-static";

const features = [
  {
    title: "ISO CERTIFICATIONS",
    description: "Achieve ISO 9001, 14001, and 27001 with our precision-engineered compliance framework.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "INDUSTRY SPECIFIC",
    description: "Authoritative guidance for Construction (CHAS), Healthcare, and Tech sectors in the UK.",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "CONTINUOUS COMPLIANCE",
    description: "Operational excellence maintained through automated tracking and strategic audits.",
    icon: <TrendingUp className="w-5 h-5" />
  }
];

const steps = [
  { number: "01", title: "GAP ANALYSIS", desc: "Precise identification of your compliance trajectory." },
  { number: "02", title: "IMPLEMENTATION", desc: "Seamless deployment of high-standard documentation." },
  { number: "03", title: "INTERNAL AUDIT", desc: "Strategic pre-assessment to guarantee first-time success." },
  { number: "04", title: "CERTIFICATION", desc: "Achievement of your official UK accreditation badge." }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(197,179,150,0.08),transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-kairo">Compliance Redefined</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-kairo mb-10 leading-[0.85] text-bone uppercase"
          >
            Master <span className="text-accent italic">Accreditations</span> <br /> 
            With <span className="text-muted-kairo">Authority</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-kairo mb-14 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Simplifying complex UK compliance into strategic, operational steps. 
            Unlock growth through authoritative certification.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="/accreditations" className="kairo-button px-10 py-5 text-sm uppercase tracking-widest group">
              Explore Accreditations 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/calculator" className="text-sm font-bold uppercase tracking-widest text-muted-kairo hover:text-bone transition-colors pb-1 border-b border-white/10 hover:border-accent">
              Accreditation Calculator
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-40">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-kairo text-bone uppercase leading-[0.9]">
              Strategic <br /> <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-muted-kairo text-lg font-medium leading-relaxed">
              Every tool and framework needed to successfully navigate 
              the authoritative landscape of UK accreditations.
            </p>
          </div>
          <div className="pb-2">
            <a href="/accreditations" className="text-sm font-bold uppercase tracking-widest text-accent hover:text-bone transition-colors flex items-center gap-3 group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="kairo-card flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-10 border border-white/5 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-4 tracking-kairo text-bone uppercase">{feature.title}</h3>
              <p className="text-muted-kairo text-sm leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full px-6 py-40 bg-white/5 rounded-[3rem] mb-20 mx-4 md:mx-10 max-w-[calc(100%-2rem)] md:max-w-[calc(100%-5rem)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
          <div className="flex-1">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-kairo text-bone uppercase leading-[0.9]">
              Operational <br /> <span className="text-accent">Success</span>
            </h2>
            <p className="text-muted-kairo mb-12 leading-relaxed text-xl font-medium max-w-xl">
              We move beyond simple manuals. We integrate with your team through 
              a structured, high-standard process that guarantees certification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: 'SUCCESS RATE', value: '98%' },
                { label: 'UK PARTNERS', value: '500+' },
                { label: 'ISO EXPERTISE', value: '15 Yrs' },
                { label: 'CLIENT SUPPORT', value: '24/7' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-muted-kairo">{stat.label}</span>
                  <span className="text-4xl font-black text-accent tracking-kairo uppercase">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-10 items-start p-10 rounded-[2rem] bg-background border border-white/5 hover:border-accent/30 transition-colors group"
              >
                <span className="text-5xl font-black text-white/5 group-hover:text-accent/20 transition-colors tracking-kairo">{step.number}</span>
                <div className="pt-2">
                  <h4 className="text-xl font-black mb-2 tracking-kairo text-bone uppercase">{step.title}</h4>
                  <p className="text-muted-kairo text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
