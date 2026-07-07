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
    <div className="min-h-screen pt-24 pb-20 px-6 relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Contact Us</span>
          </motion.div>
          <h1 className="text-4xl md:text-8xl font-black mb-4 tracking-tighter text-slate-900 leading-[0.9]">
            Let's Start Your <span className="text-blue-600">Journey</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Ready to achieve compliance without the headache? Reach out to our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight text-slate-900">Get in touch</h2>
              <p className="text-slate-500 mb-8 leading-relaxed text-lg font-medium">
                Whether you need a full gap analysis, or just have a few questions about which ISO standard is right for your business, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Us", value: "hello@woodconsulting.co.uk", href: "mailto:hello@woodconsulting.co.uk" },
                { icon: Phone, label: "Call Us", value: "+44 (0) 20 7123 4567", href: "tel:+442071234567" },
                { icon: MapPin, label: "Visit Us", value: "71-75 Shelton St, London, WC2H 9JQ", href: "#" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all border border-slate-100">
                    <item.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-[0.2em]">{item.label}</h3>
                    <a href={item.href} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors tracking-tight">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-2xl bg-white border border-slate-200"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/30">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3 tracking-tight text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 mb-8 text-lg font-medium leading-relaxed">
                  Thank you for reaching out. One of our compliance experts will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">First Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Last Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Work Email</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold" placeholder="jane@company.co.uk" />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Service of Interest</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold appearance-none cursor-pointer">
                      <option value="" disabled selected>Select an option...</option>
                      <option value="iso9001">ISO 9001</option>
                      <option value="iso27001">ISO 27001</option>
                      <option value="chas">CHAS</option>
                      <option value="cyber">Cyber Essentials</option>
                      <option value="other">Other / Not sure</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Message</label>
                  <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-xl flex justify-center items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
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
