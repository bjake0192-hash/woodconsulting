"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const runtime = "edge";

const questions = [
  {
    id: "industry",
    question: "What is your primary industry?",
    options: ["Construction", "Healthcare", "Technology / IT", "Manufacturing", "Other"],
  },
  {
    id: "employees",
    question: "How many employees do you have?",
    options: ["1-10", "11-50", "51-200", "201+"],
  },
  {
    id: "current_accreditation",
    question: "Do you currently hold any ISO accreditations?",
    options: ["Yes, multiple", "Yes, one", "No, but we are working on it", "No, starting from scratch"],
  },
];

export default function CalculatorPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [questions[step].id]: option });
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowResults(true);
    }, 1500);
  };

  const progress = ((step) / questions.length) * 100;

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 relative bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Smart Assessment</span>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter text-slate-900 leading-[0.9]">
            Eligibility <span className="text-blue-600">Calculator</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">
            Find out which accreditations fit your business profile and get a tailored roadmap in minutes.
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
                      <span>Step {step + 1} of {questions.length}</span>
                      <span>{Math.round(progress)}% Completed</span>
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
                    
                    <div className="space-y-3">
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
                        ← Previous Step
                      </button>
                    )}
                  </>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-10">
                      <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                        <AlertCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold mb-3 tracking-tight text-slate-900">Almost there!</h2>
                      <p className="text-slate-500 font-medium leading-relaxed">Enter your details to reveal your personalized accreditation roadmap.</p>
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
                      className="w-full py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-xl flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Generate Results <ChevronRight className="w-4 h-4" /></>
                      )}
                    </button>
                    
                    <button 
                      type="button"
                      onClick={() => setStep(questions.length - 1)}
                      className="w-full mt-4 text-[10px] text-slate-400 hover:text-slate-900 transition-colors font-black uppercase tracking-[0.2em]"
                    >
                      ← Back to questions
                    </button>
                  </form>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/30">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black mb-4 tracking-tighter text-slate-900">Roadmap Ready</h2>
                <p className="text-slate-500 mb-10 max-w-md mx-auto text-lg font-medium leading-relaxed">
                  Based on your inputs, we've identified the fastest path to compliance for your {answers.industry?.toLowerCase() || 'business'} company.
                </p>
                
                <div className="glass-panel rounded-3xl p-8 mb-10 text-left border-slate-100 bg-slate-50/50">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-3 tracking-tight text-slate-900">
                    <span className="w-2 h-2 rounded-full bg-blue-600" /> 
                    Next Steps
                  </h3>
                  <ul className="space-y-4 text-slate-600 font-bold text-sm">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                      <span>Schedule a free 15-minute gap analysis call</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                      <span>Review the ISO 9001 prep checklist sent to your inbox</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                      <span>Assign an internal compliance champion</span>
                    </li>
                  </ul>
                </div>

                <Link 
                  href="/contact"
                  className="px-10 py-5 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl inline-block"
                >
                  Book Gap Analysis
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
