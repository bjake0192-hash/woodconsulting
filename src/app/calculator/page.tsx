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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Eligibility <span className="gradient-text-blue">Calculator</span>
          </h1>
          <p className="text-gray-400">
            Find out which accreditations fit your business profile and get a tailored roadmap in minutes.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
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
                    <div className="flex justify-between text-sm text-gray-400 mb-8">
                      <span>Step {step + 1} of {questions.length}</span>
                      <span>{Math.round(((step) / questions.length) * 100)}% Completed</span>
                    </div>
                    
                    <div className="w-full h-1 bg-gray-800 rounded-full mb-8 overflow-hidden">
                      <motion.div 
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step) / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <h2 className="text-2xl font-semibold mb-6">{questions[step].question}</h2>
                    
                    <div className="space-y-3">
                      {questions[step].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left p-4 rounded-xl border transition-all ${
                            answers[questions[step].id] === option 
                              ? "bg-blue-600/20 border-blue-500 text-white" 
                              : "bg-white/5 border-[var(--card-border)] hover:bg-white/10 text-gray-300 hover:text-white"
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
                        className="mt-8 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        ← Back to previous question
                      </button>
                    )}
                  </>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-8 h-8 text-blue-500" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">Almost there!</h2>
                      <p className="text-gray-400 text-sm">Enter your details to reveal your personalized accreditation roadmap.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                        <input required type="text" className="w-full bg-black/50 border border-[var(--card-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Work Email</label>
                        <input required type="email" className="w-full bg-black/50 border border-[var(--card-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all glow-box flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
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
                      className="w-full mt-4 text-sm text-gray-400 hover:text-white transition-colors"
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
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Your Roadmap is Ready</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  Based on your inputs, we've identified the fastest path to compliance for your {answers.industry?.toLowerCase() || 'business'} company. We've sent the full report to your email.
                </p>
                
                <div className="bg-black/40 rounded-2xl p-6 mb-8 border border-[var(--card-border)] text-left">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> 
                    Recommended Next Steps
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center text-[10px]">1</div>
                      <span>Schedule a free 15-minute gap analysis call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center text-[10px]">2</div>
                      <span>Review the ISO 9001 prep checklist sent to your inbox</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center text-[10px]">3</div>
                      <span>Assign an internal compliance champion</span>
                    </li>
                  </ul>
                </div>

                <Link 
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all glow-box inline-block"
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
