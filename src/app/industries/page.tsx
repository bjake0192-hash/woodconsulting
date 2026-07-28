"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat, Factory, Shield, Truck, Building2, ArrowRight, CheckCircle2, Award } from "lucide-react";

export const dynamic = "force-static";

const industriesData = [
  {
    id: "construction",
    title: "Construction & Engineering",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    knowledge: "The construction sector faces some of the most rigorous regulatory requirements in the UK. Demonstrating robust Health & Safety practices, quality management, and environmental responsibility is no longer optional—it's a prerequisite for winning public and private sector tenders.",
    accreditations: [
      { name: "CHAS", desc: "Health & Safety compliance for contractors." },
      { name: "Constructionline", desc: "Pre-qualification for public/private tenders." },
      { name: "SafeContractor", desc: "Market-leading H&S accreditation." },
      { name: "ISO 45001", desc: "Occupational Health & Safety management." }
    ]
  },
  {
    id: "electrical",
    title: "Electrical Contractors",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    knowledge: "Electrical contractors require strict adherence to safety and quality standards to win premium contracts. We help you cut through the red tape and achieve the certifications necessary to prove your competence and reliability to major clients.",
    accreditations: [
      { name: "NICEIC", desc: "Electrical competence and safety." },
      { name: "ISO 9001", desc: "Quality Management Systems." },
      { name: "SafeContractor", desc: "Demonstrable H&S excellence." }
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    knowledge: "Manufacturers are under pressure to optimize supply chains, reduce environmental impact, and maintain flawless quality control. Strategic certifications help streamline operations and demonstrate commitment to sustainability and excellence.",
    accreditations: [
      { name: "ISO 9001", desc: "Quality Management Systems." },
      { name: "ISO 14001", desc: "Environmental Management." },
      { name: "ISO 45001", desc: "Health & Safety on the factory floor." }
    ]
  },
  {
    id: "logistics",
    title: "Logistics & Transport",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    knowledge: "Efficiency, safety, and environmental impact are critical in modern logistics. Fleet operators must navigate complex compliance landscapes to secure premium contracts and operate safely across the UK and beyond.",
    accreditations: [
      { name: "FORS", desc: "Fleet Operator Recognition Scheme." },
      { name: "ISO 9001", desc: "Quality in supply chain management." },
      { name: "ISO 14001", desc: "Reducing carbon footprint." }
    ]
  },
  {
    id: "technology",
    title: "Technology & Software",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    knowledge: "In an era of relentless cyber threats and strict data protection laws, tech companies must prove they can safeguard client data. Information security accreditations build trust and open doors to enterprise and government contracts.",
    accreditations: [
      { name: "ISO 27001", desc: "Information Security Management System." },
      { name: "Cyber Essentials", desc: "Government-backed cyber defense scheme." },
      { name: "ISO 9001", desc: "Quality Management for consistent delivery." }
    ]
  },
  {
    id: "facilities",
    title: "Facilities Management",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    knowledge: "FM providers must guarantee safety, security, and quality across diverse operational environments. Multi-disciplinary accreditations assure clients that you can handle their assets with the utmost professionalism.",
    accreditations: [
      { name: "ISO 9001", desc: "Quality Management Systems." },
      { name: "ISO 45001", desc: "Occupational Health & Safety." },
      { name: "SafeContractor", desc: "Demonstrable H&S excellence." }
    ]
  }
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);

  const activeData = industriesData.find(i => i.id === activeTab) || industriesData[0];

  return (
    <div className="flex flex-col items-center w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pb-12 md:pb-16 pt-8 md:pt-12 px-6 bg-slate-50 border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Sectors</p>
            <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-6 leading-[1.2]">
              Specialised <br className="hidden md:block" /><span className="text-accent">Industry</span> Knowledge.
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Every sector has unique compliance challenges. We provide tailored accreditation strategies designed specifically for your industry's demands.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full md:w-[110%] h-[250px] md:h-[350px] lg:h-[400px] rounded-l-[2rem] rounded-r-none md:-right-6 lg:-right-12 overflow-hidden shadow-2xl shadow-black/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
              alt="Engineers discussing industry compliance" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </section>

      {/* Cascading Tabs Section */}
      <section className="w-full py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Tab Navigation */}
            <div className="lg:col-span-4 flex flex-col gap-3 relative z-20">
              {industriesData.map((ind) => {
                const isActive = activeTab === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 border ${
                      isActive 
                        ? "bg-primary border-primary shadow-xl shadow-primary/10 transform scale-[1.02] lg:translate-x-4" 
                        : "bg-slate-50 border-black/5 hover:bg-slate-100 hover:border-black/10 text-slate-600"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-accent/20 text-accent" : "bg-white text-slate-400 shadow-sm"
                    }`}>
                      <ind.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base transition-colors ${isActive ? "text-white" : "text-primary"}`}>
                        {ind.title}
                      </h3>
                      <p className={`text-xs mt-1 transition-colors ${isActive ? "text-white/60" : "text-muted-foreground"}`}>
                        {ind.accreditations.length} Key Accreditations
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Tab Content */}
            <div className="lg:col-span-8 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-slate-50 rounded-[2rem] border border-black/5 p-6 md:p-8 overflow-hidden relative shadow-lg"
                >
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-full h-[200px] md:h-[260px] rounded-2xl overflow-hidden mb-6 shadow-lg border border-black/5">
                      <img 
                        src={activeData.image} 
                        alt={activeData.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                          <activeData.icon className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-black text-primary tracking-tight">
                          {activeData.title}
                        </h2>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {activeData.knowledge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        Relevant Accreditations
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activeData.accreditations.map((acc, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-xl border border-black/5 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow hover:border-accent/30 group">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <div>
                              <h4 className="font-bold text-primary text-sm mb-1">{acc.name}</h4>
                              <p className="text-xs text-muted-foreground leading-relaxed">{acc.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-black/5">
                      <a href="/contact" className="kairo-button group">
                        Discuss Your Sector Requirements
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
