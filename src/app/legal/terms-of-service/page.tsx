"use client";

import { motion } from "framer-motion";

export const runtime = "edge";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-3xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-slate-900 leading-none">
            Terms of <span className="text-blue-600">Service</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-8">Last Updated: October 2026</p>
        </motion.div>

        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Acceptance of Terms</h2>
            <p>
              By accessing and using Wood Consulting's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Use of Services</h2>
            <p>
              Our services, including the Accreditation Calculator, are provided for informational purposes to help UK businesses understand compliance requirements. While we strive for accuracy, the results do not constitute legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of Wood Consulting or its content suppliers and is protected by UK and international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Limitation of Liability</h2>
            <p>
              Wood Consulting shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
