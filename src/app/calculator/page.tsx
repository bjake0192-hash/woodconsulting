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
      // If it's the last question, wait slightly then show lead form
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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-4xl z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-kairo text-bone uppercase leading-[0.85]">
            Accreditation <br /><span className="text-accent italic">Calculator</span>
          </h1>
          <p className="text-muted-kairo text-xl font-medium max-w-xl mx-auto leading-relaxed">
            Operational analysis of high-impact certifications tailored for your strategic goals.
          </p>
        </div>

        <div className="kairo-card relative overflow-hidden bg-white/5 border border-white/5 shadow-2xl">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="questions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                {step < questions.length ? (
                  <>
                    <div className="flex justify-between text-[11px] font-bold text-muted-kairo mb-10 uppercase tracking-[0.2em]">
                      <span>Analysis Point {step + 1} / {questions.length}</span>
                      <span>{Math.round(progress)}% Progress</span>
                    </div>
                    
                    <div className="w-full h-px bg-white/10 mb-16 relative">
                      <motion.div 
                        className="h-px bg-accent absolute top-0 left-0"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-kairo text-bone uppercase leading-[0.9]">{questions[step].question}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {questions[step].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left p-8 rounded-[1.5rem] border transition-all duration-500 font-black tracking-kairo uppercase text-sm ${
                            answers[questions[step].id] === option 
                              ? "bg-accent border-accent text-accent-foreground shadow-2xl shadow-accent/20" 
                              : "bg-background border-white/5 hover:border-accent/30 text-muted-kairo hover:text-bone"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{option}</span>
                            {answers[questions[step].id] === option && (
                              <CheckCircle2 className="w-5 h-5" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button 
                        onClick={() => setStep(step - 1)}
                        className="mt-12 text-[11px] text-muted-kairo hover:text-accent transition-colors font-bold uppercase tracking-[0.2em] flex items-center gap-2"
                      >
                        <ChevronRight className="w-4 h-4 rotate-180" />
                        Previous Step
                      </button>
                    )}
                  </>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto py-6">
                    <div className="text-center mb-12">
                      <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-accent/20">
                        <AlertCircle className="w-10 h-10 text-accent" />
                      </div>
                      <h2 className="text-4xl font-black mb-4 tracking-kairo text-bone uppercase leading-none">Data Ready</h2>
                      <p className="text-muted-kairo font-medium text-lg">Secure your personalized operational roadmap.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="block text-[11px] font-bold text-muted-kairo uppercase tracking-[0.2em]">Full Name</label>
                        <input required type="text" className="w-full bg-background border border-white/10 rounded-2xl px-8 py-5 text-bone focus:outline-none focus:border-accent transition-all font-bold placeholder:text-muted-kairo/30" placeholder="John Doe" />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-[11px] font-bold text-muted-kairo uppercase tracking-[0.2em]">Operational Email</label>
                        <input required type="email" className="w-full bg-background border border-white/10 rounded-2xl px-8 py-5 text-bone focus:outline-none focus:border-accent transition-all font-bold placeholder:text-muted-kairo/30" placeholder="john@company.co.uk" />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="kairo-button w-full py-6 text-[13px] uppercase tracking-widest justify-center mt-10"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      ) : (
                        <>Generate Strategic Roadmap <ChevronRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-accent/30">
                  <CheckCircle2 className="w-12 h-12 text-accent-foreground" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-kairo text-bone uppercase leading-none">Operational Roadmap</h2>
                <p className="text-muted-kairo mb-16 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                  Strategic focus for <span className="text-accent italic">{answers.industry}</span> sector to achieve <span className="text-bone italic">{answers.goals?.toLowerCase()}</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
                  {industryRecs.map((rec, idx) => (
                    <div key={idx} className="p-10 rounded-[2.5rem] bg-background border border-white/5 flex flex-col">
                      <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-accent">
                          <rec.icon className={`w-7 h-7`} />
                        </div>
                        <h4 className="font-black text-bone text-xl uppercase tracking-kairo">{rec.name}</h4>
                      </div>
                      <p className="text-muted-kairo text-base font-medium leading-relaxed">{rec.benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="p-10 rounded-[2.5rem] mb-16 text-left border border-accent/20 bg-accent/5">
                  <h3 className="font-black text-2xl mb-6 flex items-center gap-4 tracking-kairo text-bone uppercase">
                    <div className="w-2 h-2 rounded-full bg-accent" /> 
                    Execution with WOOD
                  </h3>
                  <p className="text-muted-kairo text-lg font-medium leading-relaxed mb-10 max-w-3xl">
                    We eliminate operational friction. Our methodology handles documentation, 
                    gap analysis, and audit representation to guarantee first-time success.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      'Strategic Prep',
                      'Audit Leadership',
                      'Guaranteed Pass'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-bone font-black text-[11px] uppercase tracking-widest">
                        <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">✓</div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <a href="/contact" className="kairo-button px-12 py-6 text-sm uppercase tracking-widest">
                    Claim Strategic Gap Analysis
                  </a>
                  <button 
                    onClick={() => {
                      setStep(0);
                      setAnswers({});
                      setShowResults(false);
                    }}
                    className="text-sm font-bold uppercase tracking-widest text-muted-kairo hover:text-bone transition-colors pb-1 border-b border-white/10 hover:border-accent"
                  >
                    Reset Analysis
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
