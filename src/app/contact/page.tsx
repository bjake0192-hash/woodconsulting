"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
    <div className="min-h-[calc(100vh-7.5rem)] pt-12 pb-20 px-6 relative bg-slate-50 overflow-hidden">
      {/* Premium Corporate Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-primary uppercase leading-tight">
            LET'S START <br /><span className="text-accent italic">THE JOURNEY</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Ready to achieve compliance without the friction? Reach out to our team of authoritative experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-black mb-4 text-primary uppercase">Get in touch</h2>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm md:text-base">
                Whether you need a full gap analysis, or just have a few questions 
                about which standard is right for your business, we're here to help.
              </p>
              
              <div className="w-full h-40 md:h-48 relative mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" 
                  alt="Strategic Compliance" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-1000" 
                  unoptimized 
                />
              </div>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Operational Email", value: "hello@riskwood.co.uk", href: "mailto:hello@riskwood.co.uk" },
                { icon: Phone, label: "Direct Line", value: "+44 (0) 20 7123 4567", href: "tel:+442071234567" },
                { icon: MapPin, label: "Headquarters", value: "100 Colmore Row, Birmingham", href: "#" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm group-hover:border-accent/30 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">{item.label}</h3>
                    <a href={item.href} className="text-base font-bold text-primary hover:text-accent transition-colors">
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
            className="bg-white border border-slate-200 shadow-xl shadow-black/5 p-6 md:p-8 rounded-2xl w-full"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-primary uppercase">Message Sent</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed max-w-xs mx-auto">
                  A compliance expert will review your data and respond within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] font-black uppercase tracking-widest text-accent hover:text-primary transition-colors flex items-center gap-2 mx-auto group"
                >
                  <div className="w-6 h-[2px] bg-slate-200 group-hover:bg-accent group-hover:w-8 transition-all rounded-full" />
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-accent uppercase tracking-widest">First Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-bold placeholder:text-slate-400 text-sm" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-accent uppercase tracking-widest">Last Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-bold placeholder:text-slate-400 text-sm" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-accent uppercase tracking-widest">Operational Email</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-bold placeholder:text-slate-400 text-sm" placeholder="jane@company.co.uk" />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-accent uppercase tracking-widest">Strategic Requirement</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-bold appearance-none cursor-pointer text-sm">
                      <option value="" disabled>Select an option...</option>
                      <option value="iso9001">ISO 9001</option>
                      <option value="iso27001">ISO 27001</option>
                      <option value="chas">CHAS</option>
                      <option value="cyber">Cyber Essentials</option>
                      <option value="other">Other / Strategic Analysis</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-accent uppercase tracking-widest">Briefing</label>
                  <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-bold resize-none placeholder:text-slate-400 text-sm" placeholder="Outline your objectives..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="kairo-button w-full py-3 text-xs justify-center shadow-md shadow-accent/20"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Submit Strategic Inquiry <Send className="w-4 h-4 ml-1" /></>
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
