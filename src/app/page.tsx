"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, BookOpen, HardHat, ChevronLeft, ChevronRight, Star } from "lucide-react";

export const dynamic = "force-static";

const services = [
  {
    title: "ISO 9001",
    description: "Quality Management Systems",
    icon: ShieldCheck,
  },
  {
    title: "ISO 14001",
    description: "Environmental Management",
    icon: BookOpen,
  },
  {
    title: "ISO 45001",
    description: "Health & Safety Management",
    icon: HardHat,
  },
  {
    title: "Internal Audits",
    description: "Independent audits to ensure preparedness and compliance",
    icon: CheckCircle2,
  },
  {
    title: "Gap Analysis",
    description: "Identify gaps and create a clear path to certification",
    icon: TrendingUp,
  },
  {
    title: "Documentation",
    description: "Policy, procedure and system documentation that works for you",
    icon: BookOpen,
  },
  {
    title: "Ongoing Compliance Support",
    description: "Continuous support to maintain compliance and drive improvement",
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
  { title: "Construction", image: "/ind-construction.jpg" },
  { title: "Engineering", image: "/ind-engineering.jpg" },
  { title: "Manufacturing", image: "/ind-manufacturing.jpg" },
  { title: "Logistics", image: "/ind-logistics.jpg" },
  { title: "Healthcare", image: "/ind-healthcare.jpg" },
  { title: "Facilities Management", image: "/ind-facilities.jpg" },
  { title: "Technology", image: "/ind-tech.jpg" },
  { title: "Public Sector", image: "/ind-public.jpg" },
  { title: "Education", image: "/ind-education.jpg" },
  { title: "Retail", image: "/ind-retail.jpg" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center px-6 py-12 md:py-0 bg-slate-50 border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary leading-[1.1] mb-6 tracking-tight">
              Helping Businesses Achieve & Maintain Industry <span className="text-accent">Accreditation.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Practical, expert support to help your organisation meet standards, pass audits and build a culture of compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                  100+
                </div>
                <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">Businesses Supported</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xl md:text-2xl font-black text-primary mb-1">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  98%
                </div>
                <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">Audit Success Rate</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xl md:text-2xl font-black text-primary mb-1">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  15+
                </div>
                <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10">
            <Image 
              src="/hero-consultants.jpg" 
              alt="Consultants working with clients" 
              fill 
              className="object-cover" 
              unoptimized 
            />
            {/* TODO: Upload /public/hero-consultants.jpg */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">End-to-End Accreditation Support</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <a key={idx} href="/accreditations" className="kairo-card group flex flex-col items-start hover:border-accent">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 text-primary group-hover:text-accent transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{service.description}</p>
                <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="w-full px-6 py-24 bg-slate-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">The Accreditation Journey</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-[2px] bg-slate-200 border-dashed border-t-2 border-slate-300 z-0" />
            
            {journeySteps.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-accent/20">
                  {step.number}
                </div>
                <h4 className="font-bold text-primary text-sm mb-2 max-w-[120px]">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[140px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Industries We Support</p>
          </div>
        </div>
        
        <div className="relative w-full flex overflow-hidden group">
          <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
            {/* Double the array for seamless looping */}
            {[...industries, ...industries].map((ind, idx) => (
              <a key={idx} href="/industries" className="relative h-64 w-64 mx-3 rounded-xl overflow-hidden shrink-0 group/card">
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

      {/* Case Studies Section */}
      <section className="w-full px-6 py-24 bg-slate-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Case Studies</p>
              <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">Proven Results. Real Impact.</h2>
            </div>
            <a href="/case-studies" className="kairo-button-outline">View All Case Studies</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { cat: "Engineering", title: "ISO 9001 Certification Achieved in 12 Weeks", desc: "Delivered a fully tailored QMS and successfully achieved certification at first audit." },
              { cat: "Manufacturing", title: "Integrated ISO 9001 & ISO 14001 Success", desc: "Streamlined processes and achieved dual certification, reducing non-conformities by 80%." },
              { cat: "Construction", title: "ISO 45001 Implementation & Audit Readiness", desc: "Implemented an effective H&S management system and achieved audit readiness ahead of tender submissions." }
            ].map((study, idx) => (
              <div key={idx} className="kairo-card p-0 overflow-hidden flex flex-col group">
                <div className="relative h-48 w-full bg-slate-200">
                  <Image src={`/placeholder-case-${idx+1}.jpg`} alt={study.title} fill className="object-cover" unoptimized />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-xs font-black text-accent uppercase tracking-wider mb-3">{study.cat}</p>
                  <h3 className="text-xl font-black text-primary mb-4">{study.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">{study.desc}</p>
                  <a href="#" className="text-xs font-black text-accent uppercase tracking-wider flex items-center gap-2 group-hover:text-primary transition-colors">
                    Read Case Study <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
