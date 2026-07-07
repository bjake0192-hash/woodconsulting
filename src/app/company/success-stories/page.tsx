"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

export const dynamic = "force-static";

export default function SuccessStoriesPage() {
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
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Client Success</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900 leading-none"
          >
            Success <span className="text-blue-600">Stories</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
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
              className="glass-panel p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/30"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{story.company}</h3>
                <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[10px] font-black uppercase tracking-widest text-blue-600 border border-blue-100">
                  {story.accreditation}
                </span>
              </div>
              <p className="text-lg font-bold text-blue-600 mb-4 tracking-tight">
                Result: {story.result}
              </p>
              <p className="text-slate-500 font-medium italic leading-relaxed">
                "{story.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
