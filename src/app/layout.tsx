import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, BookOpen, TrendingUp, CheckCircle2 } from "lucide-react";
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
        url: "https://riskwood.co.uk/og-image.jpg", // TODO: Item 11 - Ensure this absolute URL is correct once image exists
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
        {/* Corporate Navigation Header */}
        <header className="w-full bg-primary text-white border-b border-white/10 z-50 sticky top-0">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg leading-none">RISKWOOD</span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-white/60">CONSULTING</span>
              </div>
            </a>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="/" className="text-accent hover:text-accent transition-colors">HOME</a>
              <a href="/accreditations" className="text-white/80 hover:text-white transition-colors">SERVICES</a>
              <a href="/industries" className="text-white/80 hover:text-white transition-colors">INDUSTRIES</a>
              <a href="/case-studies" className="text-white/80 hover:text-white transition-colors">CASE STUDIES</a>
              <a href="/about" className="text-white/80 hover:text-white transition-colors">ABOUT</a>
              <a href="/news" className="text-white/80 hover:text-white transition-colors">RESOURCES</a>
            </nav>

            <a href="/contact" className="hidden md:inline-flex border border-accent text-accent hover:bg-accent hover:text-white transition-all px-6 py-2 rounded text-xs font-bold uppercase tracking-wider">
              Contact Us
            </a>
          </div>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-primary text-white">
          {/* Pre-footer CTA */}
          <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 uppercase">Ready to Become</h2>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-accent mb-6 uppercase">Audit Ready?</h2>
              <p className="text-white/70 mb-8 max-w-md">Let's build a stronger, compliant and more resilient business—together.</p>
              <a href="/contact" className="kairo-button inline-flex">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 text-accent">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Expert Guidance</h4>
                <p className="text-sm text-white/60">Practical advice from experienced lead auditors.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 text-accent">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Tailored Solutions</h4>
                <p className="text-sm text-white/60">Solutions built around your business and industry.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 text-accent">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Fixed Fee Approach</h4>
                <p className="text-sm text-white/60">Transparent pricing with no hidden surprises.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 text-accent">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Long-Term Partnership</h4>
                <p className="text-sm text-white/60">Ongoing support to help you stay compliant and grow.</p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">R</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold tracking-tight text-lg leading-none">RISKWOOD</span>
                    <span className="text-[9px] font-medium tracking-[0.2em] text-white/60">CONSULTING</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/50">Quick Links</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><a href="/" className="hover:text-accent">Home</a></li>
                  <li><a href="/accreditations" className="hover:text-accent">Services</a></li>
                  <li><a href="/industries" className="hover:text-accent">Industries</a></li>
                  <li><a href="/case-studies" className="hover:text-accent">Case Studies</a></li>
                  <li><a href="/about" className="hover:text-accent">About</a></li>
                  <li><a href="/news" className="hover:text-accent">Resources</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/50">Contact</h4>
                <ul className="space-y-4 text-sm text-white/80">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" /> hello@riskwood.co.uk
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent" /> +44 1234 567 890
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent" /> Birmingham, United Kingdom
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/50">Follow Us</h4>
                <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  in
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/50">
              <p>© 2026 Riskwood Consulting Ltd. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="/legal/privacy-policy" className="hover:text-white">Privacy Policy</a>
                <a href="/legal/terms-of-service" className="hover:text-white">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
