"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
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
    <div className="min-h-screen pt-24 pb-20 px-6 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            Let's Start Your <span className="gradient-text-blue">Journey</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to achieve compliance without the headache? Reach out to our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need a full gap analysis, or just have a few questions about which ISO standard is right for your business, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Email Us</h3>
                  <a href="mailto:hello@accredituk.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    hello@accredituk.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Call Us</h3>
                  <a href="tel:+442071234567" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +44 (0) 20 7123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">
                    124 City Road<br />London, EC1V 2NX<br />United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-[var(--card-border)] shadow-xl shadow-black/5"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for reaching out. One of our compliance experts will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Work Email</label>
                  <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium" placeholder="jane@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service of Interest</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium appearance-none">
                    <option value="" disabled selected>Select an option...</option>
                    <option value="iso9001">ISO 9001</option>
                    <option value="iso27001">ISO 27001</option>
                    <option value="chas">CHAS</option>
                    <option value="cyber">Cyber Essentials</option>
                    <option value="other">Other / Not sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea required rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
