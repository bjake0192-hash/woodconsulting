import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, BookOpen, TrendingUp, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riskwood | Premium UK Accreditations",
  description: "Simplifying UK compliance and accreditations for businesses.",
  robots: "index, follow",
  openGraph: {
    title: "Riskwood | Premium UK Accreditations",
    description: "Simplifying UK compliance and accreditations for businesses.",
    url: "https://riskwood.co.uk",
    siteName: "Riskwood",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
        <Navbar />
        
        <main className="flex-grow pt-36">
          {children}
        </main>

        <footer className="bg-primary text-white border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
              
              {/* Brand & CTA Column */}
              <div className="lg:col-span-4">
                <div className="mb-8">
                  <img 
                    src="/rw-2.png" 
                    alt="Riskwood Consulting Logo" 
                    className="h-20 w-auto object-contain" 
                  />
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4 uppercase">
                  Ready to Become <span className="text-accent">Audit Ready?</span>
                </h3>
                <p className="text-sm text-white/70 mb-6 leading-relaxed">
                  Let's build a stronger, compliant and more resilient business—together.
                </p>
                <a href="/contact" className="kairo-button inline-flex text-xs">
                  Schedule a Consultation <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Value Props Grid */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-6">
                <div>
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mb-3 text-accent">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">Expert Guidance</h4>
                  <p className="text-xs text-white/50">Advice from lead auditors.</p>
                </div>
                <div>
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mb-3 text-accent">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">Tailored Solutions</h4>
                  <p className="text-xs text-white/50">Built for your industry.</p>
                </div>
                <div>
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mb-3 text-accent">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">Fixed Fee</h4>
                  <p className="text-xs text-white/50">Transparent pricing.</p>
                </div>
                <div>
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mb-3 text-accent">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">Partnership</h4>
                  <p className="text-xs text-white/50">Ongoing support.</p>
                </div>
              </div>

              {/* Quick Links & Contact */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-white/50">Quick Links</h4>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                    <li><a href="/accreditations" className="hover:text-accent transition-colors">Services</a></li>
                    <li><a href="/industries" className="hover:text-accent transition-colors">Industries</a></li>
                    <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-white/50">Contact</h4>
                  <ul className="space-y-4 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 
                      <span className="text-xs">hello@riskwood.co.uk</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 
                      <span className="text-xs">+44 1234 567 890</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 
                      <span className="text-xs">Birmingham, UK</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/50 gap-4">
              <p>© 2026 Riskwood Consulting Ltd. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="w-6 h-6 rounded bg-white/10 flex items-center justify-center hover:bg-accent text-white transition-colors">
                  in
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
