"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const dynamic = "force-static";

export default function CyberEssentialsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-16 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl w-full z-10">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900 leading-none"
          >
            Cyber <span className="text-blue-600">Essentials</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            A government-backed scheme that helps you protect your organization against common cyber attacks. A prerequisite for many UK government contracts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/30"
          >
            <h2 className="text-2xl font-bold mb-6 tracking-tight text-slate-900">Why Cyber Essentials?</h2>
            <ul className="space-y-4">
              {[
                "Defend against 80% of common cyber threats",
                "Reassure customers that you take security seriously",
                "Required for many central government contracts",
                "Understand your organization's security level"
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
              We guide you through the Cyber Essentials self-assessment questionnaire, helping you implement the necessary controls to pass and secure your certification.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
            >
              Secure Your Certification <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
