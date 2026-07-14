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
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Construction%20site%20manager%20reviewing%20blueprints%20on%20a%20digital%20tablet%2C%20wearing%20safety%20helmet%2C%20modern%20construction%2C%20professional%2C%20photorealistic&image_size=landscape_16_9"
  },
  {
    title: "ISO 9001:2026 Revision: What Your Business Needs to Know",
    source: "BSI Group",
    date: "Oct 22, 2026",
    link: "https://www.bsigroup.com/en-GB/about-bsi/media-centre/",
    category: "Standards",
    excerpt: "The upcoming revision of the quality management standard introduces key changes in digital risk...",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ISO%20quality%20management%20concept%2C%20digital%20dashboard%20showing%20compliance%20metrics%2C%20glowing%20blue%20accents%2C%20clean%20corporate%20desk%2C%20photorealistic&image_size=landscape_16_9"
  },
  {
    title: "CHAS Updates PQQ Requirements for Construction Suppliers",
    source: "CHAS UK",
    date: "Oct 20, 2026",
    link: "https://www.chas.co.uk/news/",
    category: "Accreditation",
    excerpt: "The latest update to the Common Assessment Standard aims to further reduce duplication in the supply chain...",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20logistics%20supply%20chain%2C%20abstract%20geometric%20nodes%20connecting%2C%20bright%20light%20background%2C%20professional%20compliance%20concept&image_size=landscape_16_9"
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-40 px-6 relative overflow-hidden bg-background">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(197,179,150,0.1),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[10rem] font-black tracking-kairo mb-12 text-bone leading-[0.8] uppercase"
          >
            INDUSTRY <br /> <span className="text-accent italic">INSIGHTS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-kairo max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed font-medium tracking-tight"
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
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="group kairo-card bg-white/5 border-white/5 hover:border-accent/40 transition-all flex flex-col h-full shadow-2xl shadow-black/20 p-0 overflow-hidden"
            >
              <div className="w-full h-48 relative overflow-hidden bg-black/[0.03]">
                <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-5 py-1.5 rounded-full bg-accent/5 text-[10px] font-black uppercase tracking-[0.2em] text-accent border border-accent/20">
                    {news.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black/[0.03] flex items-center justify-center group-hover:bg-accent transition-colors">
                    <ExternalLink className="w-4 h-4 text-muted-kairo group-hover:text-accent-foreground transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-6 tracking-kairo text-bone leading-[0.9] group-hover:text-accent transition-colors uppercase">
                  {news.title}
                </h3>
                
                <p className="text-muted-kairo text-sm mb-10 font-medium leading-relaxed tracking-tight">
                  {news.excerpt}
                </p>
                
                <div className="mt-auto pt-8 border-t border-black/[0.05] flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-kairo">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center">
                      <Newspaper className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span>{news.source}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
