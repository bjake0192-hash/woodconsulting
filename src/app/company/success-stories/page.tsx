"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

export const dynamic = "force-static";

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-32 pb-24 px-6 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(0,82,255,0.08),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl w-full z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-kairo mb-6 text-bone leading-[0.8] uppercase"
          >
            SUCCESS <br /> <span className="text-accent italic">STORIES</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-kairo max-w-2xl mx-auto text-lg leading-relaxed font-medium tracking-tight"
          >
            Real results for real businesses. See how we've helped UK companies achieve and maintain their critical accreditations.
          </motion.p>
        </div>

        <div className="space-y-8">
          {[
            {
              company: "BuildCo UK",
              accreditation: "CHAS & Constructionline Gold",
              result: "Won a £2.4M public sector contract within 3 months of accreditation.",
              quote: "Wood Consulting made the complex PQQ process feel effortless. We couldn't have done it without them."
            },
            {
              company: "TechFlow Solutions",
              accreditation: "ISO 27001",
              result: "Zero non-conformities during their first external audit.",
              quote: "The depth of their knowledge in information security is unmatched. A truly premium service."
            }
          ].map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="kairo-card bg-white/5 border-white/5 group hover:border-accent/30 p-10 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h3 className="text-2xl font-black text-bone tracking-kairo uppercase">{story.company}</h3>
                  <span className="px-4 py-1.5 rounded-full bg-accent/10 text-[10px] font-black uppercase tracking-widest text-accent border border-accent/20">
                    {story.accreditation}
                  </span>
                </div>
                <p className="text-xl font-bold text-bone mb-6 tracking-tight">
                  <span className="text-accent">Result:</span> {story.result}
                </p>
                <div className="h-px w-12 bg-white/10 mb-6" />
                <p className="text-muted-kairo font-medium italic leading-relaxed text-sm">
                  "{story.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
