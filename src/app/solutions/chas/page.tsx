"use client";

import { motion } from "framer-motion";
import { HardHat, CheckCircle2, ArrowRight } from "lucide-react";

export const dynamic = "force-static";

export default function CHASPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-32 pb-24 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(0,82,255,0.08),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl w-full z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-kairo mb-6 text-bone leading-[0.8] uppercase"
          >
            CHAS <span className="text-accent italic">ACCREDITATION</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-kairo max-w-2xl mx-auto text-lg leading-relaxed font-medium tracking-tight"
          >
            The UK's leading provider of risk management and compliance services. Gain access to the UK's biggest buyers with a CHAS accreditation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="kairo-card bg-white/5 border-white/5"
          >
            <h2 className="text-2xl font-black tracking-kairo uppercase mb-6 text-bone">Why CHAS?</h2>
            <ul className="space-y-4">
              {[
                "Pre-qualify for public and private sector contracts",
                "Demonstrate H&S compliance to potential clients",
                "Reduce time spent on PQQ questionnaires",
                "Access a portal of 2,500+ buyer organizations"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-muted-kairo font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="kairo-card bg-white/5 border-white/5"
          >
            <h2 className="text-2xl font-black tracking-kairo uppercase mb-6 text-bone">How RISKWOOD Helps</h2>
            <p className="text-muted-kairo font-medium leading-relaxed mb-8 text-sm">
              We streamline the CHAS assessment process, helping you prepare your documentation and ensuring you meet all requirements for a successful accreditation.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 text-accent font-black uppercase tracking-widest text-[10px] hover:text-bone transition-all group"
            >
              Get Accredited Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
