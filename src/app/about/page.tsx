"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, Users, Shield, Award, CheckCircle2, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

const teamMembers = [
  {
    name: "James Wood",
    role: "Managing Director & Lead Auditor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "With over 15 years in compliance, James has guided hundreds of businesses to successful ISO certification. His pragmatic, no-nonsense approach to auditing sets the tone for the entire agency."
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Environmental Compliance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Sarah specializes in ISO 14001 and sustainable business practices. She works closely with our manufacturing and logistics clients to drastically reduce their environmental impact."
  },
  {
    name: "David Chen",
    role: "Information Security Consultant",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "A former CISO, David leads our ISO 27001 and Cyber Essentials implementations. He translates complex technical requirements into actionable, plain-English policies."
  }
];

const storyBlocks = [
  {
    step: "01",
    title: "The Problem with Templates",
    desc: "We saw an industry flooded with consultants handing out generic templates. Businesses were getting certified, but their operations weren't improving. Compliance became a frustrating box-ticking exercise rather than a tool for growth."
  },
  {
    step: "02",
    title: "Our Vision for Excellence",
    desc: "Riskwood was founded to disrupt this model. We believe that a Management System should actually manage your business. It should make your team faster, safer, and more profitable without unnecessary red tape."
  },
  {
    step: "03",
    title: "The Reality Today",
    desc: "Today, we partner with industry leaders across the UK. We don't just prepare them for audits; we elevate their entire operational standard so that compliance becomes second nature. Audit ready, every time."
  }
];

const values = [
  {
    icon: Target,
    title: "Winning Tenders",
    desc: "We build lean, efficient management systems that tick every compliance box so you can qualify for larger contracts.",
    colSpan: "md:col-span-2"
  },
  {
    icon: Users,
    title: "Removing the Paperwork Burden",
    desc: "We act as your dedicated compliance department, handling the complex documentation so you don't have to.",
    colSpan: "md:col-span-1"
  },
  {
    icon: Shield,
    title: "First-Time Pass",
    desc: "Our pre-audit checks and deep industry knowledge mean we guarantee a first-time pass on your external audits.",
    colSpan: "md:col-span-1"
  },
  {
    icon: Award,
    title: "Handled End to End",
    desc: "From initial gap analysis to final certification and ongoing renewals, we manage the entire lifecycle for you.",
    colSpan: "md:col-span-2"
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="flex flex-col items-center w-full bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full pt-8 md:pt-12 pb-32 md:pb-48 px-6 bg-slate-50 border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              About Riskwood
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight mb-6 leading-[1.1]">
              Compliance, <br />
              <span className="text-accent relative inline-block">
                Without the Complexity.
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 h-1.5 bg-accent/20 rounded-full"
                />
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              We are a team of ex-auditors and industry veterans who grew tired of the generic, template-driven consulting model. We exist to remove the paperwork burden and ensure you pass your audits first time, so you can focus on winning tenders.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 group"
            ref={containerRef}
          >
            <motion.img 
              style={{ y: imageY }}
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
              alt="Riskwood consulting team in discussion" 
              className="absolute inset-0 w-full h-[120%] object-cover" 
            />
            {/* Glassmorphic Overlay Badge */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-black text-xl leading-none">100%</p>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Audit Success</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Stats Section */}
      <div className="w-full max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 relative z-30 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-primary/5"
        >
          {[
            { stat: "25+", label: "Years Trade Experience" },
            { stat: "10+", label: "Accreditations" },
            { stat: "5", label: "Specialist Sectors" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-6 md:p-10 bg-white hover:bg-slate-50 transition-colors">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-2">{item.stat}</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Story Section (Sticky Scroll) */}
      <section className="w-full py-12 md:py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-6">
              The Evolution of <br />
              <span className="text-accent">Riskwood.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We built this consultancy to solve the exact frustrations we experienced as lead auditors. This is how we evolved from industry insiders to industry leaders.
            </p>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute top-0 bottom-0 left-6 md:left-8 w-px bg-slate-200" />

            {storyBlocks.map((block, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-2 top-0 w-12 h-12 rounded-full bg-slate-50 border-4 border-white shadow-sm flex items-center justify-center text-xs font-black text-primary">
                  {block.step}
                </div>
                
                <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-black/5 hover:border-accent/20 hover:shadow-lg transition-all duration-300 group">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {block.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Philosophy Bento Grid */}
      <section className="w-full py-24 px-6 bg-slate-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-3">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">How We Operate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`${val.colSpan} bg-white p-8 md:p-10 rounded-[2rem] border border-black/5 hover:border-accent/30 hover:shadow-xl shadow-black/5 transition-all duration-300 group overflow-hidden relative`}
              >
                {/* Decorative background glow on hover */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                  <val.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 relative z-10">{val.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Team Section (Hidden per request) */}
      <section className="hidden w-full py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-3">The Experts</p>
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight max-w-xl">
                Meet the consultants driving your success.
              </h2>
            </div>
            <a href="/contact" className="kairo-button-outline shrink-0 group">
              Join Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                className="relative w-full h-[400px] md:h-[480px] rounded-[2rem] overflow-hidden group cursor-default"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Text Content (Slides up on hover) */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-[80px] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-accent font-black uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
                  
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Award className="w-14 h-14 text-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            Ready to secure your <br className="hidden md:block" />
            <span className="text-accent">accreditation?</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed md:text-lg">
            Stop worrying about compliance and start focusing on growth. Partner with Riskwood today to streamline your operations and win more business.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(7,30,70,0.4)] transition-all px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider group">
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </div>
  );
}