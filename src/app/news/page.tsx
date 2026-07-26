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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ISO 9001:2026 Revision: What Your Business Needs to Know",
    source: "BSI Group",
    date: "Oct 22, 2026",
    link: "https://www.bsigroup.com/en-GB/about-bsi/media-centre/",
    category: "Standards",
    excerpt: "The upcoming revision of the quality management standard introduces key changes in digital risk...",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "CHAS Updates PQQ Requirements for Construction Suppliers",
    source: "CHAS UK",
    date: "Oct 20, 2026",
    link: "https://www.chas.co.uk/news/",
    category: "Accreditation",
    excerpt: "The latest update to the Common Assessment Standard aims to further reduce duplication in the supply chain...",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-8 md:pt-12 pb-24 px-6 relative overflow-hidden bg-slate-50">
      {/* Premium Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(7,30,70,0.03),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-3">Resources & Updates</p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-primary"
          >
            Industry Insights
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Stay ahead of the curve with the latest regulatory updates, 
            accreditation standards, and UK compliance news.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryNews.map((news, idx) => (
            <motion.a
              key={idx}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent/40 transition-all flex flex-col"
            >
              <div className="w-full h-48 relative overflow-hidden bg-slate-100">
                <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/20 shadow-sm">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {news.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5 text-accent" />
                    {news.source}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-primary leading-snug group-hover:text-accent transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                  {news.excerpt}
                </p>
                
                <div className="mt-auto flex items-center text-[10px] font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                  Read Article
                  <ExternalLink className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
