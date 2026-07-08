"use client";

import { motion } from "framer-motion";
import { Newspaper, ExternalLink, Calendar, User } from "lucide-react";

export const dynamic = "force-static";

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
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(197,179,150,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-9xl font-black tracking-kairo mb-8 text-bone leading-none uppercase"
          >
            Industry <span className="text-accent italic">Insights</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-kairo max-w-2xl mx-auto text-xl leading-relaxed font-medium"
          >
            Stay ahead of the curve with the latest regulatory updates, 
            accreditation standards, and UK compliance news.
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
              className="group kairo-card bg-white/5 border border-white/5 hover:border-accent/30 transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="px-4 py-1 rounded-full bg-accent/10 text-[10px] font-bold uppercase tracking-[0.2em] text-accent border border-accent/20">
                  {news.category}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-kairo group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-kairo text-bone leading-tight group-hover:text-accent transition-colors uppercase">
                {news.title}
              </h3>
              <p className="text-muted-kairo text-sm mb-10 font-medium leading-relaxed">
                {news.excerpt}
              </p>
              <div className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-kairo">
                <div className="flex items-center gap-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Newspaper className="w-3.5 h-3.5" />
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
