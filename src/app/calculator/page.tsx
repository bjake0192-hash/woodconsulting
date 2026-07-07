"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import Link from "next/link";

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

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
            Eligibility <span className="gradient-text-blue glow-text">Calculator</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Find out which accreditations fit your business profile and get a tailored roadmap in minutes.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl shadow-blue-500/5">
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
                    <div className="flex justify-between text-xs font-bold text-gray-500 mb-8 uppercase tracking-widest">
                      <span>Step {step + 1} of {questions.length}</span>
                      <span>{Math.round(((step) / questions.length) * 100)}% Completed</span>
                    </div>
                    
                    <div className="w-full h-1.5 bg-white/5 rounded-full mb-8 overflow-hidden">
                      <motion.div 
                        className="h-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step) / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">{questions[step].question}</h2>
                    
                    <div className="space-y-3">
                      {questions[step].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left p-5 rounded-2xl border transition-all font-semibold tracking-tight ${
                            answers[questions[step].id] === option 
                              ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10" 
                              : "bg-white/5 border-white/10 hover:border-white/20 text-gray-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{option}</span>
                            {answers[questions[step].id] === option && (
                              <CheckCircle2 className="w-5 h-5 text-blue-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button 
                        onClick={() => setStep(step - 1)}
                        className="mt-8 text-sm text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-widest"
                      >
                        ← Previous
                      </button>
                    )}
                  </>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                        <AlertCircle className="w-8 h-8 text-blue-500" />
                      </div>
                      <h2 className="text-3xl font-bold mb-2 tracking-tight">Almost there!</h2>
                      <p className="text-gray-400">Enter your details to reveal your personalized accreditation roadmap.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Full Name</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-semibold" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Work Email</label>
                        <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-semibold" placeholder="john@company.co.uk" />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4 glow-box"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Get My Results <ChevronRight className="w-4 h-4" /></>
                      )}
                    </button>
                    
                    <button 
                      type="button"
                      onClick={() => setStep(questions.length - 1)}
                      className="w-full mt-4 text-sm text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-widest"
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
                <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-4xl font-bold mb-4 tracking-tighter">Your Roadmap is Ready</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto text-lg">
                  Based on your inputs, we've identified the fastest path to compliance for your {answers.industry?.toLowerCase() || 'business'} company.
                </p>
                
                <div className="glass-panel rounded-2xl p-8 mb-8 text-left border-white/5">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-3 tracking-tight">
                    <span className="w-2 h-2 rounded-full bg-blue-500 glow-box" /> 
                    Recommended Next Steps
                  </h3>
                  <ul className="space-y-4 text-gray-300 font-medium">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 border border-blue-500/20">1</div>
                      <span>Schedule a free 15-minute gap analysis call</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 border border-blue-500/20">2</div>
                      <span>Review the ISO 9001 prep checklist sent to your inbox</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 border border-blue-500/20">3</div>
                      <span>Assign an internal compliance champion</span>
                    </li>
                  </ul>
                </div>

                <Link 
                  href="/contact"
                  className="px-10 py-5 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-xl inline-block"
                >
                  Book Your Gap Analysis
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
