"use client";

import { motion } from "framer-motion";

export const dynamic = "force-static";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-8 md:pt-12 pb-24 px-6 relative overflow-hidden bg-slate-50">
      <div className="max-w-3xl w-full z-10 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-xl shadow-black/5 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-slate-200 pb-8"
        >
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-primary tracking-tight">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Last Updated: July 2026</p>
        </motion.div>

        <div className="prose prose-slate max-w-none text-muted-foreground font-medium leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-black text-primary mb-4 uppercase tracking-wide">Introduction</h2>
            <p>
              Riskwood Consulting Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-primary mb-4 uppercase tracking-wide">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you use our Strategic Gap Analysis, contact us via our form, or request a consultation. This may include your name, email address, phone number, company name, and industry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-primary mb-4 uppercase tracking-wide">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and maintain our compliance consultancy services.</li>
              <li>To process your strategic gap analysis results.</li>
              <li>To communicate with you about our services, accreditations, and industry updates.</li>
              <li>To improve our website and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-primary mb-4 uppercase tracking-wide">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal data. We comply with all relevant UK data protection regulations (GDPR). However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-primary mb-4 uppercase tracking-wide">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or your data rights, please contact us at <a href="mailto:hello@riskwood.co.uk" className="text-accent font-bold hover:underline">hello@riskwood.co.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
