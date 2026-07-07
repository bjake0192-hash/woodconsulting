"use client";

import { motion } from "framer-motion";

export const runtime = "edge";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-3xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-slate-900 leading-none">
            Cookie <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-8">Last Updated: October 2026</p>
        </motion.div>

        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">How We Use Cookies</h2>
            <p>
              We use cookies to understand how you interact with our website, to remember your preferences (like calculator progress), and to improve your overall experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong>Performance Cookies:</strong> Help us analyze how visitors use our site.</li>
              <li><strong>Functional Cookies:</strong> Allow the site to remember choices you make.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but this may affect your ability to use certain features of our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
