"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, AlertCircle, Shield, Award, Zap, HardHat } from "lucide-react";

export const dynamic = "force-static";

const questions = [
  {
    id: "industry",
    question: "What is your primary industry?",
    options: ["Construction", "Electrical", "Technology / IT", "Manufacturing", "Healthcare"],
  },
  {
    id: "goals",
    question: "What is your main goal for accreditation?",
    options: ["Win bigger contracts", "Improve internal quality", "Meet legal requirements", "Enhance brand reputation"],
  },
  {
    id: "readiness",
    question: "How ready is your current documentation?",
    options: ["Non-existent", "Partial / Outdated", "Mostly complete", "Ready for audit"],
  },
];

const recommendations: Record<string, any[]> = {
  "Construction": [
    { name: "CHAS", benefit: "Pre-qualify for 2,500+ UK buyers instantly.", icon: HardHat, color: "text-yellow-500" },
    { name: "Constructionline", benefit: "The gold standard for UK supply chain compliance.", icon: Award, color: "text-indigo-500" },
    { name: "SafeContractor", benefit: "Demonstrate safety excellence to major brands.", icon: Shield, color: "text-orange-500" }
  ],
  "Electrical": [
    { name: "NICEIC", benefit: "Mandatory for high-end commercial electrical work.", icon: Zap, color: "text-red-500" },
    { name: "ISO 9001", benefit: "Standardize quality across your electrical installs.", icon: Award, color: "text-blue-500" }
  ],
  "Technology / IT": [
    { name: "ISO 27001", benefit: "Crucial for protecting data and winning tech tenders.", icon: Shield, color: "text-purple-500" },
    { name: "Cyber Essentials", benefit: "Government-backed security baseline for UK tech.", icon: Zap, color: "text-cyan-500" }
  ],
  "Manufacturing": [
    { name: "ISO 9001", benefit: "Optimize production efficiency and reduce waste.", icon: Award, color: "text-blue-500" },
    { name: "ISO 14001", benefit: "Meet environmental targets and sustainability goals.", icon: Shield, color: "text-green-500" }
  ],
  "Healthcare": [
    { name: "ISO 9001", benefit: "Ensure consistent patient care and quality management.", icon: Award, color: "text-blue-500" },
    { name: "ISO 27001", benefit: "Protect sensitive patient data against cyber threats.", icon: Shield, color: "text-purple-500" }
  ],
  "Other": [
    { name: "ISO 9001", benefit: "Universal standard for quality and business growth.", icon: Award, color: "text-blue-500" },
    { name: "Cyber Essentials", benefit: "Basic security required for most modern tenders.", icon: Zap, color: "text-cyan-500" }
  ]
};

export default function CalculatorPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (option: string) => {
    const currentQuestionId = questions[step].id;
    setAnswers(prev => ({ ...prev, [currentQuestionId]: option }));
    
    if (step < questions.length - 1) {
      setTimeout(() => setStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setStep(questions.length), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowResults(true);
    }, 1500);
  };

  const progress = ((step) / questions.length) * 100;
  const industryRecs = recommendations[answers.industry] || recommendations["Other"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 relative bg-background overflow-hidden">
      {/* Cinematic Atmospheric Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(0,82,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-kairo text-bone uppercase leading-[0.8]">
            ACCREDITATION <br /><span className="text-accent italic">ANALYSIS</span>
          </h1>
          <p className="text-muted-kairo text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
            Operational analysis of high-impact certifications tailored for your strategic UK objectives.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="questions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full"
              >
                {step < questions.length ? (
                  <div className="kairo-card bg-white/5 border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                    <div className="flex justify-between items-end mb-16">
                      <div className="space-y-2">
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Progress</p>
                        <h3 className="text-3xl font-black text-bone tracking-kairo uppercase">
                          Point {step + 1} <span className="text-muted-kairo/30">/ {questions.length}</span>
                        </h3>
                      </div>
                      <span className="text-4xl font-black text-white/5 tracking-kairo">{Math.round(progress)}%</span>
                    </div>
                    
                    <div className="w-full h-px bg-white/5 mb-16 relative">
                      <motion.div 
                        className="h-px bg-accent absolute top-0 left-0 shadow-[0_0_20px_rgba(0,82,255,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                      />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-kairo text-bone uppercase leading-[0.9] max-w-2xl">
                      {questions[step].question}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {questions[step].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left p-10 rounded-[2.5rem] border transition-all duration-700 font-black tracking-kairo uppercase text-sm group ${
                            answers[questions[step].id] === option 
                              ? "bg-accent border-accent text-accent-foreground shadow-2xl shadow-accent/20" 
                              : "bg-background/50 border-white/5 hover:border-accent/40 text-muted-kairo hover:text-bone"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{option}</span>
                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                              answers[questions[step].id] === option 
                                ? "border-accent-foreground bg-accent-foreground/10" 
                                : "border-white/10 group-hover:border-accent/50"
                            }`}>
                              {answers[questions[step].id] === option && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button 
                        onClick={() => setStep(step - 1)}
                        className="mt-16 text-[10px] text-muted-kairo hover:text-accent transition-colors font-black uppercase tracking-[0.3em] flex items-center gap-3 group"
                      >
                        <div className="w-8 h-px bg-white/10 group-hover:bg-accent group-hover:w-12 transition-all" />
                        Previous Analysis
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="kairo-card max-w-2xl mx-auto border-accent/20 bg-accent/5 shadow-2xl shadow-accent/5">
                    <form onSubmit={handleSubmit} className="space-y-12 py-6">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-accent/20">
                          <AlertCircle className="w-10 h-10 text-accent" />
                        </div>
                        <h2 className="text-5xl font-black mb-6 tracking-kairo text-bone uppercase leading-none">ANALYSIS COMPLETE</h2>
                        <p className="text-muted-kairo font-medium text-xl tracking-tight">Secure your personalized operational roadmap.</p>
                      </div>

                      <div className="space-y-8">
                        <div className="space-y-4">
                          <label className="block text-[10px] font-black text-accent uppercase tracking-[0.3em]">Full Name</label>
                          <input required type="text" className="w-full bg-background/50 border border-white/10 rounded-[2rem] px-10 py-6 text-bone focus:outline-none focus:border-accent transition-all font-bold placeholder:text-muted-kairo/20" placeholder="John Doe" />
                        </div>
                        <div className="space-y-4">
                          <label className="block text-[10px] font-black text-accent uppercase tracking-[0.3em]">Operational Email</label>
                          <input required type="email" className="w-full bg-background/50 border border-white/10 rounded-[2rem] px-10 py-6 text-bone focus:outline-none focus:border-accent transition-all font-bold placeholder:text-muted-kairo/20" placeholder="john@company.co.uk" />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="kairo-button w-full py-8 text-sm justify-center shadow-2xl shadow-accent/20"
                      >
                        {isSubmitting ? (
                          <span className="w-6 h-6 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        ) : (
                          <>GENERATE STRATEGIC ROADMAP <ChevronRight className="w-5 h-5" /></>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full"
              >
                <div className="text-center mb-16">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(0,82,255,0.3)]">
                    <CheckCircle2 className="w-12 h-12 text-accent-foreground" />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-kairo text-bone uppercase leading-[0.8]">OPERATIONAL <br /><span className="text-accent italic">ROADMAP</span></h2>
                  <p className="text-muted-kairo text-xl md:text-2xl font-medium tracking-tight max-w-3xl mx-auto">
                    Strategic focus for <span className="text-accent italic">{answers.industry}</span> sector to achieve <span className="text-bone italic">{answers.goals?.toLowerCase()}</span>.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                  {industryRecs.map((rec, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="kairo-card bg-white/5 border-white/10 flex flex-col group hover:border-accent/40"
                    >
                      <div className="flex items-center gap-6 mb-10">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-700">
                          <rec.icon className={`w-8 h-8`} />
                        </div>
                        <h4 className="font-black text-bone text-2xl uppercase tracking-kairo">{rec.name}</h4>
                      </div>
                      <p className="text-muted-kairo text-lg font-medium leading-relaxed tracking-tight">{rec.benefit}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="kairo-card border-accent/20 bg-accent/5 mb-24 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                    <Shield className="w-64 h-64 text-accent" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-black text-3xl md:text-5xl mb-8 flex items-center gap-6 tracking-kairo text-bone uppercase">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" /> 
                      EXECUTION WITH WOOD
                    </h3>
                    <p className="text-muted-kairo text-xl font-medium leading-relaxed mb-12 max-w-4xl tracking-tight">
                      We eliminate operational friction. Our methodology handles documentation, 
                      gap analysis, and audit representation to guarantee first-time success.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                      {[
                        'Strategic Prep',
                        'Audit Leadership',
                        'Guaranteed Pass'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-5 text-bone font-black text-xs uppercase tracking-[0.2em]">
                          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                  <a href="/contact" className="kairo-button px-16 py-8 text-sm shadow-2xl shadow-accent/20">
                    Claim Strategic Gap Analysis
                  </a>
                  <button 
                    onClick={() => {
                      setStep(0);
                      setAnswers({});
                      setShowResults(false);
                    }}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-kairo hover:text-bone transition-all flex items-center gap-3 group"
                  >
                    Restart Analysis
                    <div className="w-8 h-px bg-white/10 group-hover:w-12 group-hover:bg-accent transition-all" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
