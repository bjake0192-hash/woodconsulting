"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";

export const runtime = "edge";

export default function ISO27001Page() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl w-full z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 mb-6 border border-blue-100"
          >
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Information Security</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900 leading-none"
          >
            ISO <span className="text-blue-600">27001</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            The global standard for Information Security Management Systems (ISMS). Protect your sensitive data and demonstrate your commitment to cybersecurity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/30"
          >
            <h2 className="text-2xl font-bold mb-6 tracking-tight text-slate-900">Why ISO 27001?</h2>
            <ul className="space-y-4">
              {[
                "Protect sensitive client information",
                "Comply with legal and regulatory requirements",
                "Gain a competitive edge in tech tenders",
                "Build a culture of security awareness"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/30"
          >
            <h2 className="text-2xl font-bold mb-6 tracking-tight text-slate-900">How WOOD Helps</h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-6">
              Our cybersecurity experts guide you through the complex ISO 27001 framework, ensuring your ISMS is robust, compliant, and ready for audit.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
            >
              Secure Your Business <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
