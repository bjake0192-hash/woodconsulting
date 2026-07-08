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
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
        {/* Cinematic Atmospheric Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(197,179,150,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-12 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">UK Operational Authority</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-7xl md:text-[12rem] font-black tracking-kairo mb-12 leading-[0.8] text-bone uppercase"
          >
            MASTER THE <br />
            <span className="text-accent italic">STANDARD</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-muted-kairo mb-16 leading-relaxed font-medium tracking-tight">
              We eliminate the friction of UK compliance. High-standard <br className="hidden md:block" />
              accreditations delivered through strategic operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="/accreditations" className="kairo-button px-12 py-6 group shadow-2xl shadow-accent/20">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/calculator" className="text-sm font-bold uppercase tracking-[0.2em] text-muted-kairo hover:text-bone transition-all flex items-center gap-3 group">
                Strategic Analysis
                <div className="w-8 h-px bg-white/10 group-hover:w-12 group-hover:bg-accent transition-all" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"
        />
      </section>

      {/* Bento Grid Services Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-40">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Expertise</p>
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-kairo text-bone uppercase leading-[0.85]">
              STRATEGIC <br /> <span className="text-accent italic">SOLUTIONS</span>
            </h2>
          </div>
          <div className="pb-4">
            <a href="/accreditations" className="kairo-button !bg-transparent !border-white/10 hover:!border-accent !text-bone hover:!text-accent">
              View All Directory
            </a>
          </div>
        </div>
        
        <div className="bento-grid">
          {/* Large Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 kairo-card bg-gradient-to-br from-white/5 to-transparent relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-40 h-40 text-accent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-10 text-accent-foreground">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-4xl font-black mb-6 tracking-kairo text-bone uppercase">ISO ACCREDITATIONS</h3>
                <p className="text-muted-kairo text-xl leading-relaxed font-medium max-w-xl">
                  Precision-engineered frameworks for ISO 9001, 14001, and 27001. 
                  We handle the complexity, you claim the authority.
                </p>
              </div>
              <div className="flex gap-4 mt-12">
                {['Audit Ready', 'Documentation', 'GAP Analysis'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-muted-kairo">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Smaller Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-4 kairo-card border-accent/20 bg-accent/5"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 text-accent">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-kairo text-bone uppercase">INDUSTRY SPECIFIC</h3>
            <p className="text-muted-kairo text-base leading-relaxed font-medium mb-8">
              Authoritative guidance for Construction (CHAS), Healthcare, and Tech sectors.
            </p>
            <a href="/accreditations" className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2 group">
              Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-4 kairo-card"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 text-accent">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-kairo text-bone uppercase">CONTINUOUS CARE</h3>
            <p className="text-muted-kairo text-base leading-relaxed font-medium mb-8">
              Operational excellence maintained through automated tracking and strategic audits.
            </p>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2 }}
                className="h-full bg-accent/30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-8 kairo-card bg-white/5 border-white/5 group hover:border-accent/30"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center h-full">
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-6 tracking-kairo text-bone uppercase">STRATEGIC ANALYSIS</h3>
                <p className="text-muted-kairo text-lg leading-relaxed font-medium mb-10">
                  Not sure where to start? Our interactive calculator identifies 
                  the most impactful certifications for your growth trajectory.
                </p>
                <a href="/calculator" className="kairo-button">
                  Run Analysis
                </a>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent/5 transition-colors">
                    <CheckCircle2 className="w-8 h-8 text-white/10 group-hover:text-accent transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section with Refined Steps */}
      <section className="w-full px-6 py-40 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Methodology</p>
            <h2 className="text-5xl md:text-9xl font-black tracking-kairo text-bone uppercase leading-[0.8]">
              OPERATIONAL <br /> <span className="text-accent italic">PRECISION</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-10 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-accent/30 transition-all"
              >
                <span className="text-6xl font-black text-white/5 group-hover:text-accent/10 transition-colors tracking-kairo absolute top-6 right-8 leading-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-4 tracking-kairo text-bone uppercase pt-12">{step.title}</h4>
                  <p className="text-muted-kairo text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-10 h-px w-full bg-white/10 group-hover:bg-accent/30 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
