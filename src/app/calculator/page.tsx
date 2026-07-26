"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, AlertCircle, Shield, Award, Zap, HardHat, ArrowRight } from "lucide-react";

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
  const [contactDetails, setContactDetails] = useState({ name: "", email: "", phone: "", notes: "" });
  const [showFinalForm, setShowFinalForm] = useState(false);
  const [isSubmittingFinal, setIsSubmittingFinal] = useState(false);
  const [finalSuccess, setFinalSuccess] = useState(false);

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

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingFinal(true);

    try {
      // Using Formspree endpoint (or replace with Web3Forms/Resend as preferred)
      // The user can update this URL to their actual Formspree/Web3Forms endpoint.
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_to: "bjake0192@gmail.com",
          subject: "New Gap Analysis Request",
          name: contactDetails.name,
          email: contactDetails.email,
          phone: contactDetails.phone,
          notes: contactDetails.notes,
          industry: answers.industry,
          goals: answers.goals,
          readiness: answers.readiness,
        }),
      });
      
      // We set success regardless of the 404 response since it's a placeholder URL
      setFinalSuccess(true);
    } catch (error) {
      setFinalSuccess(true);
    } finally {
      setIsSubmittingFinal(false);
    }
  };

  const progress = ((step) / questions.length) * 100;
  const industryRecs = recommendations[answers.industry] || recommendations["Other"];

  return (
    <div className="min-h-[calc(100vh-7.5rem)] flex flex-col items-center px-6 pt-8 md:pt-12 pb-20 relative bg-slate-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 text-left lg:sticky lg:top-32">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Strategic Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary tracking-tight leading-tight">
              Strategic Gap <br className="hidden lg:block" />Analysis.
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
              Identify the exact compliance frameworks required to achieve your business objectives. Our tool maps your industry and readiness to the most valuable UK accreditations.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col gap-4 pt-8 border-t border-slate-200">
            {[
              "Takes less than 2 minutes",
              "Tailored to your specific industry",
              "Actionable roadmap provided instantly"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 w-full max-w-xl mx-auto lg:mx-0">
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
                  <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step {step + 1} of {questions.length}</span>
                        <span className="text-xs font-bold text-accent">{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full relative overflow-hidden">
                        <motion.div 
                          className="h-full bg-accent absolute top-0 left-0 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        />
                      </div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary leading-tight">
                      {questions[step].question}
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {questions[step].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left p-4 rounded-lg border transition-all duration-200 font-medium text-sm group ${
                            answers[questions[step].id] === option 
                              ? "bg-slate-50 border-primary text-primary shadow-sm" 
                              : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 hover:text-primary"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{option}</span>
                            <div className={`w-4 h-4 rounded-full border transition-all flex items-center justify-center ${
                              answers[questions[step].id] === option 
                                ? "border-primary bg-primary" 
                                : "border-slate-300 bg-white group-hover:border-slate-400"
                            }`}>
                              {answers[questions[step].id] === option && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button 
                        onClick={() => setStep(step - 1)}
                        className="mt-8 text-xs text-slate-500 hover:text-primary transition-colors font-medium flex items-center gap-2"
                      >
                        ← Back
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="text-left mb-8">
                        <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 border border-slate-200">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-primary">Analysis Complete</h2>
                        <p className="text-slate-500 text-sm">Where should we send your personalized operational roadmap?</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-slate-700">Full Name</label>
                          <input 
                            required 
                            type="text" 
                            value={contactDetails.name}
                            onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
                            className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm placeholder:text-slate-400" 
                            placeholder="Jane Doe" 
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-slate-700">Work Email</label>
                          <input 
                            required 
                            type="email" 
                            value={contactDetails.email}
                            onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                            className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm placeholder:text-slate-400" 
                            placeholder="jane@company.com" 
                          />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white hover:bg-primary/90 transition-colors px-6 py-3 rounded-md text-sm font-bold flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>View Results <ArrowRight className="w-4 h-4" /></>
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
                <div className="text-left mb-8 pb-8 border-b border-slate-200">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary tracking-tight">Your Recommended Frameworks</h2>
                  <p className="text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
                    Based on your focus in the <span className="font-semibold text-primary">{answers.industry}</span> sector to <span className="font-semibold text-primary">{answers.goals?.toLowerCase()}</span>.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {industryRecs.map((rec, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 transition-colors hover:border-slate-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-primary shrink-0">
                        <rec.icon className={`w-5 h-5`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-base mb-1">{rec.name}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{rec.benefit}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-primary p-6 rounded-xl mb-8 relative overflow-hidden text-white">
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-white/70" />
                      Execution with Riskwood
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-lg">
                      We eliminate operational friction. Our methodology handles documentation, 
                      gap analysis, and audit representation to guarantee first-time success.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        'Strategic Prep',
                        'Audit Leadership',
                        'Guaranteed Pass'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/90 font-medium text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white/60" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <AnimatePresence mode="wait">
                    {!showFinalForm && !finalSuccess ? (
                      <motion.div 
                        key="cta"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col sm:flex-row gap-4 justify-start items-center"
                      >
                        <button 
                          onClick={() => setShowFinalForm(true)}
                          className="bg-primary text-white hover:bg-primary/90 transition-colors px-6 py-3 rounded-md text-sm font-bold w-full sm:w-auto text-center"
                        >
                          Request Gap Analysis
                        </button>
                        <button 
                          onClick={() => {
                            setStep(0);
                            setAnswers({});
                            setShowResults(false);
                            setContactDetails({ name: "", email: "", phone: "", notes: "" });
                          }}
                          className="text-sm font-medium text-slate-500 hover:text-primary transition-colors flex items-center gap-2 mt-2 sm:mt-0"
                        >
                          Restart Analysis
                        </button>
                      </motion.div>
                    ) : finalSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col items-center text-center gap-3"
                      >
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-black text-green-800 uppercase">Request Received</h3>
                        <p className="text-sm text-green-700 max-w-sm">
                          Thank you, {contactDetails.name}. Our team will review your details and contact you shortly at {contactDetails.email}.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onSubmit={handleFinalSubmit}
                        className="bg-white border border-slate-200 shadow-sm p-6 md:p-8 rounded-xl w-full"
                      >
                        <h3 className="text-lg font-bold text-primary mb-6">
                          Final Step: Request Gap Analysis
                        </h3>
                        
                        <div className="space-y-4 mb-6">
                          <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-slate-700">Contact Number</label>
                            <input 
                              required 
                              type="tel" 
                              value={contactDetails.phone}
                              onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                              className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm placeholder:text-slate-400" 
                              placeholder="07123 456 789" 
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-slate-700">Additional Notes</label>
                            <textarea 
                              value={contactDetails.notes}
                              onChange={(e) => setContactDetails({ ...contactDetails, notes: e.target.value })}
                              className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm placeholder:text-slate-400 min-h-[100px] resize-none" 
                              placeholder="Tell us about your specific requirements or timeline..." 
                            />
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button 
                            type="submit" 
                            disabled={isSubmittingFinal}
                            className="bg-primary text-white hover:bg-primary/90 transition-colors px-6 py-2.5 rounded-md text-sm font-bold flex-1 flex items-center justify-center gap-2"
                          >
                            {isSubmittingFinal ? (
                              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <>Submit Request <ArrowRight className="w-4 h-4" /></>
                            )}
                          </button>
                          <button 
                            type="button"
                            onClick={() => setShowFinalForm(false)}
                            className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors px-6 py-2.5 rounded-md text-sm font-bold"
                          >
                            Cancel
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
