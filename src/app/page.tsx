"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, BookOpen, HardHat, ChevronLeft, ChevronRight, Star, Plus, Minus } from "lucide-react";

export const dynamic = "force-static";

const services = [
  {
    title: "Managed Accreditations",
    description: "We manage and renew your existing accreditations for a fixed monthly fee. From as little as £20/month.",
    icon: ShieldCheck,
  },
  {
    title: "ISO 9001",
    description: "Win more tenders and improve internal quality with a certified Quality Management System.",
    icon: ShieldCheck,
  },
  {
    title: "ISO 14001",
    description: "Meet environmental requirements and secure green contracts.",
    icon: BookOpen,
  },
  {
    title: "ISO 45001",
    description: "Demonstrate health and safety excellence to major brands and principal contractors.",
    icon: HardHat,
  },
  {
    title: "Internal Audits",
    description: "Remove the paperwork burden. We conduct independent audits to guarantee a first-time pass.",
    icon: CheckCircle2,
  },
  {
    title: "Gap Analysis",
    description: "Identify exactly what you need to fix to achieve your desired accreditation quickly.",
    icon: TrendingUp,
  },
  {
    title: "Documentation",
    description: "Bespoke policy, procedure, and system documentation written completely for you.",
    icon: BookOpen,
  },
  {
    title: "Ongoing Compliance Support",
    description: "Continuous retainer support to maintain compliance and pass annual surveillance audits.",
    icon: ShieldCheck,
  }
];

const journeySteps = [
  { number: "1", title: "Initial Assessment", desc: "Understand your business and objectives" },
  { number: "2", title: "Gap Analysis", desc: "Identify gaps against the required standard" },
  { number: "3", title: "Documentation & Implementation", desc: "Develop and implement bespoke management systems" },
  { number: "4", title: "Internal Audit", desc: "Evaluate readiness and ensure compliance" },
  { number: "5", title: "Certification Audit", desc: "Support through the external certification audit" },
  { number: "6", title: "Certification Achieved", desc: "Celebrate success and embed best practices" },
  { number: "7", title: "Surveillance & Improvement", desc: "Ongoing support for continuous improvement" }
];

const industries = [
  { title: "Construction", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
  { title: "Electrical Contractors", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { title: "Manufacturing", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
  { title: "Facilities Management", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  { title: "Logistics", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80" },
  { title: "Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
  { title: "Healthcare", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80" },
  { title: "Public Sector", image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80" },
  { title: "Education", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" },
  { title: "Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
];

const faqs = [
  {
    question: "How long does it typically take to achieve ISO certification?",
    answer: "The timeline varies depending on your organization's size and complexity, but most of our clients achieve certification within 3 to 6 months. We map out a clear, structured timeline during the initial gap analysis."
  },
  {
    question: "Do you guarantee certification?",
    answer: "Yes. Our proven methodology and meticulous internal audit processes ensure that when we say you are ready, you will pass your external audit."
  },
  {
    question: "Are you the certification body?",
    answer: "No, Riskwood is an independent consultancy. We act as your compliance partner to build and implement the required systems. Once ready, an independent UKAS-accredited body performs the final audit and issues your certificate."
  },
  {
    question: "Do you provide templates or bespoke documentation?",
    answer: "We do not use generic templates. Every policy, procedure, and management system is bespoke and crafted specifically around your unique operational requirements and business objectives."
  },
  {
    question: "What happens after we get certified?",
    answer: "Certification is just the beginning. Our 'Continuous Care' packages include ongoing internal audits, management reviews, and compliance support to ensure you breeze through your annual surveillance audits."
  }
];

// (FAQItem removed as logic is now inline)

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col items-center w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pb-16 md:pb-24 pt-8 md:pt-12 px-6 bg-slate-50 border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.2] mb-6 tracking-tight">
              We get UK contractors accredited: <br className="hidden md:block" />
              <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-4">
                <img src="/chas.png" alt="CHAS" className="h-8 md:h-10 w-auto object-contain" />
                <img src="/safecontractor.png" alt="SafeContractor" className="h-8 md:h-10 w-auto object-contain" />
                <img src="/Constructionline-Gold-Logo.png" alt="Constructionline Gold" className="h-8 md:h-10 w-auto object-contain" />
                <img src="/iso9001.png" alt="ISO" className="h-8 md:h-10 w-auto object-contain" />
              </div>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed font-bold">
              Handled end to end. Simplifying UK Compliance and accreditations for businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="/contact" className="kairo-button justify-center">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/accreditations" className="kairo-button-outline justify-center">
                Our Services
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 md:gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 text-xl md:text-2xl font-black text-primary mb-1">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  10+
                </div>
                <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">Accreditations</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xl md:text-2xl font-black text-primary mb-1">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  25+
                </div>
                <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">Years Trade Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative w-full md:w-[110%] h-[300px] md:h-[400px] lg:h-[480px] rounded-l-[2rem] rounded-r-none md:-right-6 lg:-right-12 overflow-hidden shadow-2xl shadow-black/10">
            <Image 
              src="/homehero.png" 
              alt="Compliance audit and document review" 
              fill 
              className="object-cover" 
              unoptimized 
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-6 py-10 bg-white relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-2">Our Services</p>
            <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">End-to-End Accreditation Support</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <motion.a 
                key={idx} 
                href={service.title === "Managed Accreditations" ? "/managed-accreditations" : "/accreditations"} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-300 flex flex-col items-start overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-3 relative z-10 w-full">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow relative z-10">
                  {service.description}
                </p>
                
                <div className="mt-auto relative z-10 flex items-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
                  Learn More 
                  <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="w-full px-6 py-16 bg-slate-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">The Accreditation Journey</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-[2px] bg-slate-200 border-dashed border-t-2 border-slate-300 z-0 overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="h-full bg-accent"
              />
            </div>
            
            {journeySteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.5, duration: 0.5 }}
                className="flex-1 flex flex-col items-center text-center relative z-10 group cursor-default"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-accent/20 group-hover:bg-primary transition-colors duration-300"
                >
                  {step.number}
                </motion.div>
                <h4 className="font-bold text-primary text-sm mb-2 max-w-[120px] group-hover:text-accent transition-colors duration-300">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[140px] group-hover:text-primary transition-colors duration-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Industries We Support</p>
          </div>
        </div>
        
        <div className="relative w-full flex overflow-hidden group">
          <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
            {/* Double the array for seamless looping */}
            {[...industries, ...industries].map((ind, idx) => (
              <a key={idx} href="/industries" className="relative h-64 w-64 mx-1 rounded-xl overflow-hidden shrink-0 group/card">
                <Image src={ind.image} alt={ind.title} fill className="object-cover transition-transform duration-700 group-hover/card:scale-110" unoptimized />
                <div className="absolute inset-0 bg-primary/70 group-hover/card:bg-primary/50 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-end text-center">
                  <ShieldCheck className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-white font-bold text-sm tracking-wide">{ind.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-6 py-20 bg-slate-50 border-t border-black/5 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our consultancy process, timelines, and how we guarantee your success.
            </p>
          </div>
          
          <div className="grid gap-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  openFaqIndex === idx 
                    ? "border-accent/30 shadow-md shadow-accent/5" 
                    : "border-black/5 hover:border-black/10 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left group"
                >
                  <span className={`text-base font-bold transition-colors ${
                    openFaqIndex === idx ? "text-accent" : "text-primary group-hover:text-accent"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openFaqIndex === idx 
                      ? "bg-accent text-white" 
                      : "bg-slate-50 text-slate-400 group-hover:bg-accent/10 group-hover:text-accent"
                  }`}>
                    {openFaqIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="w-full h-px bg-slate-100 mb-4" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
