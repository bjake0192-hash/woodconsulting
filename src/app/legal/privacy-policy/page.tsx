"use client";

import { motion } from "framer-motion";

export const dynamic = "force-static";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-32 pb-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-3xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-kairo mb-8 text-bone leading-[0.8] uppercase">
            Privacy <span className="text-accent italic">Policy</span>
          </h1>
          <p className="text-muted-kairo font-bold uppercase tracking-widest text-[10px] mb-8">Last Updated: July 2026</p>
        </motion.div>

        <div className="prose prose-invert max-w-none text-muted-kairo font-medium leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-black text-bone mb-4 tracking-kairo uppercase">Introduction</h2>
            <p>
              Riskwood ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-bone mb-4 tracking-kairo uppercase">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you use our Accreditation Calculator, contact us via our form, or subscribe to our newsletter. This may include your name, email address, company name, and industry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-bone mb-4 tracking-kairo uppercase">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and maintain our services.</li>
              <li>To process your accreditation eligibility results.</li>
              <li>To communicate with you about our services and updates.</li>
              <li>To improve our website and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-bone mb-4 tracking-kairo uppercase">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-bone mb-4 tracking-kairo uppercase">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@riskwood.co.uk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
