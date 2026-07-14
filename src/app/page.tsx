"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, BookOpen, HardHat } from "lucide-react";

export const dynamic = "force-static";

const heroBubblesLeft = [
  { id: "chas", title: "CHAS", icon: HardHat, color: "text-yellow-500" },
  { id: "avetta", title: "Avetta", image: "/Avetta-Logo.webp" },
  { id: "niceic", title: "NICEIC", image: "/NICEIC-logo.png" },
  { id: "iso-9001", title: "ISO 9001", image: "/iso9001.png" },
];

const heroBubblesRight = [
  { id: "iso-27001", title: "ISO 27001", image: "/iso27001.webp" },
  { id: "constructionline", title: "Constructionline", image: "/Constructionline-Gold-Logo.png" },
  { id: "safecontractor", title: "SafeContractor", image: "/safecontractor.png" },
  { id: "cyber-essentials", title: "Cyber Essentials", image: "/cyber essentials.png" },
];

function HeroBubble({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }}
      className="w-[120px] h-[120px] rounded-full glass-panel flex flex-col items-center justify-center border-2 border-transparent hover:border-accent bg-white/50 hover:bg-white/90 shadow-xl overflow-hidden relative group cursor-pointer hover:scale-125 transition-all duration-500 z-20"
    >
      <div className="w-[65%] h-[65%] relative flex items-center justify-center -mt-4 group-hover:scale-110 transition-transform">
        {item.image ? (
          <Image src={item.image} alt={item.title} fill className="object-contain p-1" unoptimized />
        ) : Icon ? (
          <Icon strokeWidth={2} className={`w-full h-full ${item.color} p-1`} />
        ) : null}
      </div>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
        <path id={`curve-hero-${item.id}`} d="M 12 50 A 38 38 0 0 0 88 50" fill="transparent" />
        <text className="font-black tracking-widest uppercase" fill="currentColor" style={{ fontSize: '9px' }}>
          <textPath href={`#curve-hero-${item.id}`} startOffset="50%" textAnchor="middle">{item.title}</textPath>
        </text>
      </svg>
    </motion.div>
  );
}

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
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Premium Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Cinematic Atmospheric Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(0,82,255,0.08),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Left Column Bubbles */}
        <div className="hidden xl:flex flex-col gap-8 absolute left-12 top-1/2 -translate-y-1/2 z-20">
          {heroBubblesLeft.map((item, i) => (
            <HeroBubble key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Right Column Bubbles */}
        <div className="hidden xl:flex flex-col gap-8 absolute right-12 top-1/2 -translate-y-1/2 z-20">
          {heroBubblesRight.map((item, i) => (
            <HeroBubble key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 justify-center mb-8"
          >
            <div className="h-[1px] w-8 bg-accent/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">UK's Premier Consultancy</span>
            <div className="h-[1px] w-8 bg-accent/40" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-7xl font-black tracking-kairo mb-10 leading-[0.8] text-bone uppercase"
          >
            MASTER THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600 italic pr-2">STANDARD</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-muted-kairo mb-12 leading-relaxed font-medium tracking-tight">
              We eliminate the friction of UK compliance. High-standard <br className="hidden md:block" />
              accreditations delivered through strategic operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/accreditations" className="kairo-button px-10 py-5 group shadow-2xl shadow-accent/30 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
              </a>
              <a href="/calculator" className="text-sm font-bold uppercase tracking-[0.2em] text-muted-kairo hover:text-bone transition-all flex items-center gap-3 group">
                Strategic Analysis
                <div className="w-8 h-px bg-black/10 group-hover:w-12 group-hover:bg-accent transition-all" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none"
        />
      </section>

      {/* Bento Grid Services Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Expertise</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-kairo text-bone uppercase leading-[0.85]">
              STRATEGIC <br /> <span className="text-accent italic">SOLUTIONS</span>
            </h2>
          </div>
          <div className="pb-4">
            <a href="/accreditations" className="kairo-button !bg-transparent !border-black/10 hover:!border-accent !text-bone hover:!text-accent">
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
            className="col-span-12 md:col-span-8 kairo-card bg-gradient-to-br from-black/[0.03] to-transparent relative group overflow-hidden p-0"
          >
            <div className="absolute inset-0 w-full h-full hidden md:block">
              <Image 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20corporate%20office%20building%20interior%2C%20clean%20lines%2C%20bright%20natural%20light%2C%20minimalist%20glass%20architecture%2C%20high%20quality%2C%20photorealistic&image_size=landscape_16_9" 
                alt="Corporate Architecture" 
                fill 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" 
                unoptimized 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
            </div>
            
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity z-10">
              <ShieldCheck className="w-40 h-40 text-accent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[350px] p-8 md:p-10 w-full md:w-2/3">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-8 text-accent-foreground shadow-xl shadow-accent/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-kairo text-bone uppercase">ISO ACCREDITATIONS</h3>
                <p className="text-muted-kairo text-lg leading-relaxed font-medium max-w-xl">
                  Precision-engineered frameworks for ISO 9001, 14001, and 27001. 
                  We handle the complexity, you claim the authority.
                </p>
              </div>
              <div className="flex gap-4 mt-10">
                {['Audit Ready', 'Documentation', 'GAP Analysis'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.03] text-[10px] font-bold uppercase tracking-widest text-muted-kairo">
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
            className="col-span-12 md:col-span-4 kairo-card border-accent/30 bg-accent/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center mb-8 text-accent">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black mb-3 tracking-kairo text-bone uppercase">INDUSTRY SPECIFIC</h3>
            <p className="text-muted-kairo text-sm leading-relaxed font-medium mb-6">
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
            <div className="w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center mb-8 text-accent">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black mb-3 tracking-kairo text-bone uppercase">CONTINUOUS CARE</h3>
            <p className="text-muted-kairo text-sm leading-relaxed font-medium mb-6">
              Operational excellence maintained through automated tracking and strategic audits.
            </p>
            <div className="h-1 w-full bg-black/[0.03] rounded-full overflow-hidden">
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
            className="col-span-12 md:col-span-8 kairo-card bg-black/[0.03] border-black/[0.03] group hover:border-accent/30 overflow-hidden relative"
          >
            <div className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none">
              <Image 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Abstract%20geometric%20shapes%2C%20light%20theme%2C%20modern%20technology%20concept%2C%20clean%2C%20white%20and%20blue%20accents%2C%20photorealistic&image_size=landscape_16_9"
                alt="Abstract Background"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                unoptimized
              />
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center h-full relative z-10">
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-4 tracking-kairo text-bone uppercase">STRATEGIC ANALYSIS</h3>
                <p className="text-muted-kairo text-base leading-relaxed font-medium mb-8">
                  Not sure where to start? Our interactive calculator identifies 
                  the most impactful certifications for your growth trajectory.
                </p>
                <a href="/calculator" className="kairo-button">
                  Run Analysis
                </a>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-black/[0.03] border border-black/[0.03] flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-black/10 group-hover:text-accent transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section with Refined Steps */}
      <section className="w-full px-6 py-24 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Methodology</p>
            <h2 className="text-4xl md:text-7xl font-black tracking-kairo text-bone uppercase leading-[0.8]">
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
                className="relative p-8 rounded-[2rem] bg-black/[0.03] border border-black/[0.03] group hover:border-accent/30 transition-all"
              >
                <span className="text-5xl font-black text-black/[0.03] group-hover:text-accent/10 transition-colors tracking-kairo absolute top-6 right-6 leading-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h4 className="text-lg font-black mb-3 tracking-kairo text-bone uppercase pt-10">{step.title}</h4>
                  <p className="text-muted-kairo text-xs font-medium leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-8 h-px w-full bg-black/10 group-hover:bg-accent/30 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
