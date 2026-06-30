"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldCheck, Lock, HardHat, HeartPulse, Server, FileCheck, Award, X, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type Accreditation = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  benefits: string[];
  color: string;
  hoverColor: string;
};

const accreditations: Accreditation[] = [
  {
    id: "iso-9001",
    title: "ISO 9001",
    shortDesc: "Quality Management Systems",
    fullDesc: "ISO 9001 is the internationally recognized standard for Quality Management Systems (QMS). It provides a framework and set of principles that ensure a common-sense approach to the management of your organization to consistently satisfy customers and other stakeholders.",
    icon: Award,
    benefits: [
      "Increase your chances of winning public sector contracts",
      "Improve product and service quality",
      "Reduce waste and increase efficiency",
      "Enhance customer satisfaction and retention"
    ],
    color: "text-blue-500",
    hoverColor: "group-hover:text-blue-400 group-hover:bg-blue-500/10",
  },
  {
    id: "iso-14001",
    title: "ISO 14001",
    shortDesc: "Environmental Management",
    fullDesc: "ISO 14001 maps out a framework that a company or organization can follow to set up an effective environmental management system. It helps organizations improve their environmental performance through more efficient use of resources and reduction of waste.",
    icon: ShieldCheck,
    benefits: [
      "Demonstrate compliance with current and future statutory and regulatory requirements",
      "Increase leadership involvement and engagement of employees",
      "Improve company reputation and the confidence of stakeholders",
      "Achieve strategic business aims by incorporating environmental issues into business management"
    ],
    color: "text-green-500",
    hoverColor: "group-hover:text-green-400 group-hover:bg-green-500/10",
  },
  {
    id: "iso-27001",
    title: "ISO 27001",
    shortDesc: "Information Security Management",
    fullDesc: "ISO 27001 is the international standard that sets out the specification for an information security management system (ISMS). Its best-practice approach helps organizations manage their information security by addressing people, processes, and technology.",
    icon: Lock,
    benefits: [
      "Protect your data, wherever it lives",
      "Defend against cyber-attacks",
      "Avoid regulatory fines and penalties",
      "Protect your reputation and build trust with clients"
    ],
    color: "text-purple-500",
    hoverColor: "group-hover:text-purple-400 group-hover:bg-purple-500/10",
  },
  {
    id: "iso-45001",
    title: "ISO 45001",
    shortDesc: "Occupational Health & Safety",
    fullDesc: "ISO 45001 is the world's international standard for occupational health and safety, issued to protect employees and visitors from work-related accidents and diseases.",
    icon: HeartPulse,
    benefits: [
      "Reduce work-related injuries, illnesses and death",
      "Eliminate or minimize OH&S risks",
      "Improve OH&S performance and effectiveness",
      "Demonstrate your commitment to health and safety"
    ],
    color: "text-rose-500",
    hoverColor: "group-hover:text-rose-400 group-hover:bg-rose-500/10",
  },
  {
    id: "chas",
    title: "CHAS",
    shortDesc: "Contractors Health & Safety",
    fullDesc: "The Contractors Health and Safety Assessment Scheme (CHAS) is created for the construction industry to demonstrate health and safety compliance to clients and principal contractors.",
    icon: HardHat,
    benefits: [
      "Pre-qualify for larger contracts",
      "Demonstrate compliance with health and safety laws",
      "Save time and resources on repetitive questionnaires",
      "Gain visibility to over 2,500 client organizations"
    ],
    color: "text-yellow-500",
    hoverColor: "group-hover:text-yellow-400 group-hover:bg-yellow-500/10",
  },
  {
    id: "cyber-essentials",
    title: "Cyber Essentials",
    shortDesc: "Cybersecurity standard",
    fullDesc: "Cyber Essentials is a UK government-backed, industry-supported scheme to help organizations protect themselves against common online threats.",
    icon: Server,
    benefits: [
      "Reassure customers that you are working to secure your IT against cyber attack",
      "Attract new business with the promise you have basic cyber security measures in place",
      "You have a clear picture of your organization's cyber security level",
      "Required for certain government contracts"
    ],
    color: "text-cyan-500",
    hoverColor: "group-hover:text-cyan-400 group-hover:bg-cyan-500/10",
  },
  {
    id: "safe-contractor",
    title: "SafeContractor",
    shortDesc: "Health & Safety accreditation",
    fullDesc: "Alcumus SafeContractor is a leading third-party accreditation scheme which recognizes extremely rigorous standards in health and safety management amongst contractors.",
    icon: Shield,
    benefits: [
      "Prove your health and safety credentials",
      "Reduce risk on-site",
      "Win more work with major brands",
      "Gain competitive advantage"
    ],
    color: "text-orange-500",
    hoverColor: "group-hover:text-orange-400 group-hover:bg-orange-500/10",
  },
  {
    id: "constructionline",
    title: "Constructionline",
    shortDesc: "Supply chain & procurement",
    fullDesc: "Constructionline is the UK's most connected and progressive provider of procurement and supply chain management services, helping buyers and suppliers work together.",
    icon: FileCheck,
    benefits: [
      "Access to a vast network of buyers",
      "Simplified PQQ process",
      "Demonstrate your compliance to PAS 91 and SSIP",
      "Increase your visibility to decision-makers"
    ],
    color: "text-indigo-500",
    hoverColor: "group-hover:text-indigo-400 group-hover:bg-indigo-500/10",
  }
];

export default function AccreditationsPage() {
  const [selectedAccreditation, setSelectedAccreditation] = useState<Accreditation | null>(null);

  // Close modal on outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedAccreditation(null);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center pb-24">
      {/* Header Section */}
      <section className="relative w-full py-24 flex flex-col items-center justify-center px-6 overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Our <span className="gradient-text-blue glow-text">Accreditations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Explore the comprehensive suite of certifications and accreditations we help our clients achieve. Hover to discover more and click for detailed insights.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {accreditations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setSelectedAccreditation(item)}
                className="group cursor-pointer glass-panel p-6 rounded-2xl border border-[var(--card-border)] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background glow that appears on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 transition-all duration-300 ${item.hoverColor}`}>
                    {/* The icon itself transitions from grayscale/dim to full color */}
                    <Icon className={`w-6 h-6 text-gray-500 transition-colors duration-300 group-hover:${item.color.split('-')[1]}-400 ${item.color.replace('text-', 'group-hover:text-')}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors flex-grow">
                    {item.shortDesc}
                  </p>
                  
                  <div className="mt-6 flex items-center text-xs font-medium text-gray-500 group-hover:text-white transition-colors">
                    <span>View details</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedAccreditation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="relative p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-white/5">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 ${selectedAccreditation.color}`}>
                    <selectedAccreditation.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {selectedAccreditation.title}
                    </h2>
                    <p className="text-gray-400 font-medium mt-1">
                      {selectedAccreditation.shortDesc}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedAccreditation(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedAccreditation.fullDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {selectedAccreditation.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${selectedAccreditation.color}`} />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 sm:p-8 border-t border-white/10 bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-400 text-center sm:text-left">
                  Ready to achieve {selectedAccreditation.title}?
                </p>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Link 
                    href="/calculator"
                    onClick={() => setSelectedAccreditation(null)}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-center text-sm"
                  >
                    Check Eligibility
                  </Link>
                  <Link 
                    href="/contact"
                    onClick={() => setSelectedAccreditation(null)}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors glow-box text-center text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}