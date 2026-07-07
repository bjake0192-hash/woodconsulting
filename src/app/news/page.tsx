"use client";

import { motion } from "framer-motion";
import { Newspaper, ExternalLink, Calendar, User } from "lucide-react";

export const runtime = "edge";

const industryNews = [
  {
    title: "HSE Announces New Building Safety Regulatory Framework",
    source: "Health and Safety Executive",
    date: "Oct 24, 2026",
    link: "https://www.hse.gov.uk/news/index.htm",
    category: "Regulation",
    excerpt: "New measures aimed at enhancing high-rise residential building safety are set to take effect..."
  },
  {
    title: "ISO 9001:2026 Revision: What Your Business Needs to Know",
    source: "BSI Group",
    date: "Oct 22, 2026",
    link: "https://www.bsigroup.com/en-GB/about-bsi/media-centre/",
    category: "Standards",
    excerpt: "The upcoming revision of the quality management standard introduces key changes in digital risk..."
  },
  {
    title: "CHAS Updates PQQ Requirements for Construction Suppliers",
    source: "CHAS UK",
    date: "Oct 20, 2026",
    link: "https://www.chas.co.uk/news/",
    category: "Accreditation",
    excerpt: "The latest update to the Common Assessment Standard aims to further reduce duplication in the supply chain..."
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 mb-6 border border-blue-100"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Industry Feed</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900 leading-none"
          >
            Industry <span className="text-blue-600">Insights</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            Stay ahead of the curve with the latest regulatory updates, accreditation standards, and UK compliance news.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryNews.map((news, idx) => (
            <motion.a
              key={idx}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="group glass-panel p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-500/30 transition-all flex flex-col h-full premium-card-hover"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[10px] font-black uppercase tracking-widest text-blue-600 border border-blue-100">
                  {news.category}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">
                {news.excerpt}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3" />
                  <span>{news.source}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
