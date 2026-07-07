import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import "./globals.css";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Wood Consulting | Premium UK Accreditations",
  description: "Simplifying UK compliance and accreditations for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-black text-white font-sans">
        {/* Minimalist Top Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 border-b border-[var(--card-border)] bg-black/40">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 glow-box">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold tracking-tighter text-xl text-white">WOOD</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="/#services" className="hover:text-white transition-colors">Services</a>
              <a href="/#process" className="hover:text-white transition-colors">Process</a>
              <a href="/calculator" className="hover:text-white transition-colors">Eligibility Calculator</a>
            </div>
            <a href="/contact" className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all shadow-lg">
              Get Started
            </a>
          </div>
        </nav>
        
        <main className="flex-grow pt-16">
          {children}
        </main>

        <footer className="pt-20 pb-10 border-t border-[var(--card-border)] bg-black relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Brand Column */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center glow-box">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <span className="font-bold tracking-tighter text-2xl">WOOD</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Elevating UK businesses through expert guidance and streamlined compliance processes. 
                  Achieve certification with confidence.
                </p>
                <div className="space-y-3">
                  <a href="mailto:hello@woodconsulting.co.uk" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    hello@woodconsulting.co.uk
                  </a>
                  <a href="tel:+442071234567" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    +44 (0) 20 7123 4567
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-1 md:ml-auto">
                <h4 className="text-white font-bold mb-6 tracking-tight">Solutions</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">ISO 9001</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">ISO 27001</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">CHAS Accreditation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cyber Essentials</a></li>
                </ul>
              </div>

              <div className="md:col-span-1 md:ml-auto">
                <h4 className="text-white font-bold mb-6 tracking-tight">Company</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><a href="/calculator" className="hover:text-white transition-colors">Eligibility Calculator</a></li>
                  <li><a href="/#process" className="hover:text-white transition-colors">Our Process</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                </ul>
              </div>

              <div className="md:col-span-1 md:ml-auto">
                <h4 className="text-white font-bold mb-6 tracking-tight">Legal</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-sm text-gray-500">© {new Date().getFullYear()} Wood Consulting. All rights reserved.</span>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors group">
                <span>Proudly built by</span>
                <a href="#" className="flex items-center gap-1.5 font-medium text-gray-400 group-hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                    <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 12H12M12 4V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Kairo Studio
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
