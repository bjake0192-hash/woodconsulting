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
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-12 relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-3xl z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter text-slate-900 leading-[0.9]">
            Accreditation <span className="text-blue-600">Calculator</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">
            Discover the high-impact certifications tailored for your industry and goals.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden bg-white border border-slate-200 shadow-2xl">
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
                    <div className="flex justify-between text-[10px] font-black text-slate-400 mb-8 uppercase tracking-[0.2em]">
                      <span>Question {step + 1} of {questions.length}</span>
                      <span>{Math.round(progress)}% Complete</span>
                    </div>
                    
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mb-12 overflow-hidden">
                      <motion.div 
                        className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight text-slate-900 leading-tight">{questions[step].question}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {questions[step].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left p-6 rounded-2xl border transition-all font-bold tracking-tight premium-card-hover ${
                            answers[questions[step].id] === option 
                              ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20" 
                              : "bg-white border-slate-200 hover:border-blue-500/50 text-slate-600 hover:text-blue-600"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{option}</span>
                            {answers[questions[step].id] === option && (
                              <CheckCircle2 className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button 
                        onClick={() => setStep(step - 1)}
                        className="mt-10 text-[10px] text-slate-400 hover:text-slate-900 transition-colors font-black uppercase tracking-[0.2em]"
                      >
                        ← Previous Question
                      </button>
                    )}
                  </>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-10">
                      <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                        <AlertCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold mb-3 tracking-tight text-slate-900">Analysis Complete!</h2>
                      <p className="text-slate-500 font-medium leading-relaxed">Enter your details to unlock your personalized recommendation report.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Full Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Work Email</label>
                        <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold" placeholder="john@company.co.uk" />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-xl flex justify-center items-center gap-2 disabled:opacity-50 mt-8"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Reveal My Roadmap <ChevronRight className="w-4 h-4" /></>
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
                className="text-center py-4"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/30">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black mb-4 tracking-tighter text-slate-900">Your Recommended Roadmap</h2>
                <p className="text-slate-500 mb-10 max-w-lg mx-auto text-lg font-medium leading-relaxed">
                  Based on your role in <span className="text-blue-600 font-bold">{answers.industry}</span>, these are the essential accreditations to reach your goal of <span className="text-blue-600 font-bold">{answers.goals?.toLowerCase()}</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                  {industryRecs.map((rec, idx) => (
                    <div key={idx} className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                          <rec.icon className={`w-5 h-5 ${rec.color}`} />
                        </div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-tighter">{rec.name}</h4>
                      </div>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{rec.benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="glass-panel rounded-3xl p-8 mb-10 text-left border-blue-100 bg-blue-50/30">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-3 tracking-tight text-slate-900">
                    <span className="w-2 h-2 rounded-full bg-blue-600" /> 
                    How WOOD Helps You
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    Navigating UK standards is complex. We handle the heavy lifting—from documentation and gap analysis to the final audit—ensuring a 98% first-time pass rate.
                  </p>
                  <ul className="space-y-3 text-slate-700 font-bold text-xs uppercase tracking-widest">
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600">✓</div>
                      Zero-stress documentation prep
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600">✓</div>
                      Expert audit representation
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600">✓</div>
                      Guaranteed first-time compliance
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="px-10 py-5 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl"
                  >
                    Claim Free Gap Analysis
                  </a>
                  <button 
                    onClick={() => {
                      setStep(0);
                      setAnswers({});
                      setShowResults(false);
                    }}
                    className="px-10 py-5 rounded-full bg-white border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-all"
                  >
                    Start Over
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
