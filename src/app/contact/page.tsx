"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, ChevronRight } from "lucide-react";

export const runtime = "edge";

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
    <div className="min-h-screen pt-24 pb-20 px-6 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
            Let's Start Your <span className="gradient-text-blue glow-text">Journey</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to achieve compliance without the headache? Reach out to our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Get in touch</h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Whether you need a full gap analysis, or just have a few questions about which ISO standard is right for your business, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all border border-white/10">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 tracking-tight">Email Us</h3>
                  <a href="mailto:hello@woodconsulting.co.uk" className="text-gray-400 hover:text-white transition-colors font-medium">
                    hello@woodconsulting.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all border border-white/10">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 tracking-tight">Call Us</h3>
                  <a href="tel:+442071234567" className="text-gray-400 hover:text-white transition-colors font-medium">
                    +44 (0) 20 7123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all border border-white/10">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 tracking-tight">Visit Us</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    124 City Road<br />London, EC1V 2NX<br />United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl shadow-blue-500/5"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold mb-3 tracking-tight">Message Sent!</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Thank you for reaching out. One of our compliance experts will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold transition-all border border-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">First Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-semibold" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Last Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-semibold" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Work Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-semibold" placeholder="jane@company.co.uk" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Service of Interest</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-semibold appearance-none cursor-pointer">
                      <option value="" disabled selected className="bg-black">Select an option...</option>
                      <option value="iso9001" className="bg-black">ISO 9001</option>
                      <option value="iso27001" className="bg-black">ISO 27001</option>
                      <option value="chas" className="bg-black">CHAS</option>
                      <option value="cyber" className="bg-black">Cyber Essentials</option>
                      <option value="other" className="bg-black">Other / Not sure</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Message</label>
                  <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-semibold resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed glow-box"
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
