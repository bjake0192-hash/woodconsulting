"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
      
      {/* Left Column: Info */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text-blue glow-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-md">
            Ready to streamline your accreditation process? Our compliance experts are here to help you navigate every step.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center border border-blue-500/20 shrink-0">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                <p className="text-gray-400 text-sm mb-1">Our friendly team is here to help.</p>
                <a href="mailto:hello@accredituk.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">hello@accredituk.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center border border-blue-500/20 shrink-0">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                <p className="text-gray-400 text-sm mb-1">Come say hello at our London office.</p>
                <span className="text-gray-300 font-medium">100 Compliance Way, London, UK</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center border border-blue-500/20 shrink-0">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                <p className="text-gray-400 text-sm mb-1">Mon-Fri from 9am to 5pm.</p>
                <a href="tel:+442012345678" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">+44 20 1234 5678</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel p-8 md:p-10 rounded-3xl relative"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-green-500 ml-1" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
              <p className="text-gray-400">
                Thank you for reaching out. One of our compliance experts will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">First Name</label>
                  <input required type="text" className="w-full bg-black/50 border border-[var(--card-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Last Name</label>
                  <input required type="text" className="w-full bg-black/50 border border-[var(--card-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Work Email</label>
                <input required type="email" className="w-full bg-black/50 border border-[var(--card-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="jane@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Subject</label>
                <select className="w-full bg-black/50 border border-[var(--card-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option value="general">General Inquiry</option>
                  <option value="iso9001">ISO 9001 Certification</option>
                  <option value="iso27001">ISO 27001 Certification</option>
                  <option value="audit">Internal Audit Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Message</label>
                <textarea required rows={4} className="w-full bg-black/50 border border-[var(--card-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your accreditation goals..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all glow-box flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
