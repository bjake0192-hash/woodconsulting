"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Newspaper, ExternalLink, Calendar, User } from "lucide-react";

export const dynamic = "force-static";

const industryNews = [
  {
    title: "HSE Announces New Building Safety Regulatory Framework",
    source: "Health and Safety Executive",
    date: "Oct 24, 2026",
    link: "https://www.hse.gov.uk/news/index.htm",
    category: "Regulation",
    excerpt: "New measures aimed at enhancing high-rise residential building safety are set to take effect...",
    image: "/news-hse.jpg"
    // TODO: Item 2 - Replace with self-hosted static image /public/news-hse.jpg
  },
  {
    title: "ISO 9001:2026 Revision: What Your Business Needs to Know",
    source: "BSI Group",
    date: "Oct 22, 2026",
    link: "https://www.bsigroup.com/en-GB/about-bsi/media-centre/",
    category: "Standards",
    excerpt: "The upcoming revision of the quality management standard introduces key changes in digital risk...",
    image: "/news-iso.jpg"
    // TODO: Item 2 - Replace with self-hosted static image /public/news-iso.jpg
  },
  {
    title: "CHAS Updates PQQ Requirements for Construction Suppliers",
    source: "CHAS UK",
    date: "Oct 20, 2026",
    link: "https://www.chas.co.uk/news/",
    category: "Accreditation",
    excerpt: "The latest update to the Common Assessment Standard aims to further reduce duplication in the supply chain...",
    image: "/news-chas.jpg"
    // TODO: Item 2 - Replace with self-hosted static image /public/news-chas.jpg
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-32 pb-24 px-6 relative overflow-hidden bg-background">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(0,82,255,0.08),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-5xl w-full z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-kairo mb-8 text-bone leading-[0.8] uppercase"
          >
            INDUSTRY <br /> <span className="text-accent italic">INSIGHTS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-kairo max-w-xl mx-auto text-lg leading-relaxed font-medium tracking-tight"
          >
            Stay ahead of the curve with the latest regulatory updates, 
            accreditation standards, and UK compliance news.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {industryNews.map((news, idx) => (
            <motion.a
              key={idx}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="group kairo-card bg-white border border-black/5 hover:border-accent/30 transition-all flex flex-col md:flex-row shadow-sm hover:shadow-xl shadow-black/5 p-4 md:p-5 gap-6 items-center"
            >
              <div className="w-full md:w-64 h-48 md:h-36 relative overflow-hidden rounded-[1.25rem] shrink-0 bg-black/[0.03]">
                <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              </div>
              
              <div className="flex flex-col flex-1 py-2 w-full">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/5 text-[9px] font-black uppercase tracking-[0.2em] text-accent border border-accent/20">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-kairo">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {news.date}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-kairo">
                    <Newspaper className="w-3.5 h-3.5 text-accent" />
                    {news.source}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black mb-3 tracking-kairo text-bone leading-tight group-hover:text-accent transition-colors uppercase">
                  {news.title}
                </h3>
                
                <p className="text-muted-kairo text-sm font-medium leading-relaxed tracking-tight line-clamp-2 max-w-2xl">
                  {news.excerpt}
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center px-4 shrink-0">
                <div className="w-12 h-12 rounded-full bg-black/[0.02] flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ExternalLink className="w-5 h-5 text-muted-kairo group-hover:text-accent-foreground transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
