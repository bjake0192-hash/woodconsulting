"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 relative bg-background overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(197,179,150,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-10 backdrop-blur-md"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Direct Channel</span>
          </motion.div>

          <h1 className="text-6xl md:text-[10rem] font-black mb-12 tracking-kairo text-bone leading-[0.8] uppercase">
            LET'S START <br /><span className="text-accent italic">THE JOURNEY</span>
          </h1>
          <p className="text-muted-kairo max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
            Ready to achieve compliance without the friction? Reach out to our team of authoritative experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          {/* Contact Info */}
          <div className="space-y-20">
            <div>
              <h2 className="text-5xl font-black mb-10 tracking-kairo text-bone uppercase">Get in touch</h2>
              <p className="text-muted-kairo mb-12 leading-relaxed text-xl font-medium tracking-tight">
                Whether you need a full gap analysis, or just have a few questions 
                about which standard is right for your business, we're here to help.
              </p>
            </div>

            <div className="space-y-12">
              {[
                { icon: Mail, label: "Operational Email", value: "hello@woodconsulting.co.uk", href: "mailto:hello@woodconsulting.co.uk" },
                { icon: Phone, label: "Direct Line", value: "+44 (0) 20 7123 4567", href: "tel:+442071234567" },
                { icon: MapPin, label: "Headquarters", value: "71-75 Shelton St, London, WC2H 9JQ", href: "#" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-10 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-500 border border-white/5 shadow-xl">
                    <item.icon className="w-6 h-6 text-muted-kairo group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-[10px] font-black text-accent mb-3 uppercase tracking-[0.3em] opacity-60">{item.label}</h3>
                    <a href={item.href} className="text-2xl font-black text-bone hover:text-accent transition-colors tracking-kairo uppercase">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="kairo-card bg-white/5 border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
          >
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-accent/30">
                  <CheckCircle2 className="w-12 h-12 text-accent-foreground" />
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-kairo text-bone uppercase">Message Sent</h3>
                <p className="text-muted-kairo mb-12 text-lg font-medium leading-relaxed max-w-sm mx-auto tracking-tight">
                  A compliance expert will review your data and respond within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] font-black uppercase tracking-widest text-accent hover:text-bone transition-all flex items-center gap-3 mx-auto"
                >
                  <div className="w-8 h-px bg-accent" />
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black text-accent uppercase tracking-[0.3em]">First Name</label>
                    <input required type="text" className="w-full bg-background/50 border border-white/10 rounded-[2rem] px-8 py-5 text-bone focus:outline-none focus:border-accent transition-all font-bold placeholder:text-muted-kairo/20" placeholder="Jane" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black text-accent uppercase tracking-[0.3em]">Last Name</label>
                    <input required type="text" className="w-full bg-background/50 border border-white/10 rounded-[2rem] px-8 py-5 text-bone focus:outline-none focus:border-accent transition-all font-bold placeholder:text-muted-kairo/20" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-black text-accent uppercase tracking-[0.3em]">Operational Email</label>
                  <input required type="email" className="w-full bg-background/50 border border-white/10 rounded-[2rem] px-8 py-5 text-bone focus:outline-none focus:border-accent transition-all font-bold placeholder:text-muted-kairo/20" placeholder="jane@company.co.uk" />
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-black text-accent uppercase tracking-[0.3em]">Strategic Requirement</label>
                  <div className="relative">
                    <select className="w-full bg-background/50 border border-white/10 rounded-[2rem] px-8 py-5 text-bone focus:outline-none focus:border-accent transition-all font-bold appearance-none cursor-pointer">
                      <option value="" disabled selected>Select an option...</option>
                      <option value="iso9001">ISO 9001</option>
                      <option value="iso27001">ISO 27001</option>
                      <option value="chas">CHAS</option>
                      <option value="cyber">Cyber Essentials</option>
                      <option value="other">Other / Strategic Analysis</option>
                    </select>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-accent">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-black text-accent uppercase tracking-[0.3em]">Briefing</label>
                  <textarea required rows={4} className="w-full bg-background/50 border border-white/10 rounded-[2rem] px-8 py-5 text-bone focus:outline-none focus:border-accent transition-all font-bold resize-none placeholder:text-muted-kairo/20" placeholder="Outline your objectives..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="kairo-button w-full py-8 text-sm justify-center shadow-2xl shadow-accent/20"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  ) : (
                    <>Submit Strategic Inquiry <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
