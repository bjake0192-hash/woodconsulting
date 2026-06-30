make the entire site "use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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

function AccreditationCard({ 
  item, 
  onClick 
}: { 
  item: Accreditation; 
  onClick: () => void 
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the hover follow effect
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Transform mouse position to rotation and slight translation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-5px", "5px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-5px", "5px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (normalized between -0.5 and 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformStyle: "preserve-3d",
      }}
      onClick={onClick}
      className="group cursor-pointer glass-panel p-4 rounded-[1.5rem] border border-[var(--card-border)] hover:border-white/20 transition-colors duration-300 relative overflow-hidden flex flex-col items-center justify-center aspect-square mx-auto w-full max-w-[200px]"
    >
      {/* Dynamic background glow that follows mouse */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" style={{ transform: "translateZ(-10px)" }} />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full" style={{ transform: "translateZ(30px)" }}>
        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 transition-all duration-500 ${item.hoverColor} group-hover:scale-110 shadow-lg`}>
          <Icon strokeWidth={1.5} className={`w-7 h-7 md:w-8 md:h-8 text-gray-500 transition-colors duration-500 ${item.color.replace('text-', 'group-hover:text-')}`} />
        </div>
        
        <h3 className="text-sm md:text-base font-bold text-gray-400 group-hover:text-white transition-colors text-center tracking-tight">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function AccreditationsPage() {
  const [selectedAccreditation, setSelectedAccreditation] = useState<Accreditation | null>(null);

  // Close modal on outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedAccreditation(null);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden bg-[var(--background)]">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Section */}
      <section className="w-full flex-grow flex flex-col justify-center z-10 max-w-[1600px] mx-auto" style={{ perspective: 1200 }}>
        
        {/* Subtle Integrated Header inside the grid area */}
        <div className="text-center mb-10 mt-4 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Our <span className="gradient-text-blue glow-text">Accreditations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Explore our comprehensive suite of certifications. Hover to discover more and click for insights.
          </motion.p>
        </div>

        {/* The Full-Bleed Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 w-full max-w-5xl mx-auto flex-grow pb-8">
          {accreditations.map((item, idx) => (
            <AccreditationCard 
              key={item.id} 
              item={item} 
              onClick={() => setSelectedAccreditation(item)} 
            />
          ))}
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