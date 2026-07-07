import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import "./globals.css";

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
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        {/* Minimalist Top Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 border-b border-[var(--card-border)] bg-white/70">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-base">W</span>
              </div>
              <span className="font-bold tracking-tighter text-lg text-slate-900">WOOD</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
              <a href="/accreditations" className="hover:text-blue-600 transition-colors">Accreditations</a>
              <a href="/news" className="hover:text-blue-600 transition-colors">Industry News</a>
              <a href="/calculator" className="hover:text-blue-600 transition-colors">Accreditation Calculator</a>
            </div>
            <a href="/contact" className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all shadow-md">
              Get Started
            </a>
          </div>
        </nav>
        
        <main className="flex-grow pt-16">
          {children}
        </main>

        <footer className="pt-16 pb-8 border-t border-[var(--card-border)] bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-base">W</span>
                  </div>
                  <a href="/" className="font-bold tracking-tighter text-xl text-slate-900">WOOD</a>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Elevating UK businesses through expert guidance and streamlined compliance processes. 
                  Achieve certification with confidence.
                </p>
                <div className="space-y-3">
                  <a href="mailto:hello@woodconsulting.co.uk" className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    hello@woodconsulting.co.uk
                  </a>
                  <a href="tel:+442071234567" className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    +44 (0) 20 7123 4567
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-1 md:ml-auto">
                <h4 className="text-slate-900 font-bold mb-6 tracking-tight">Solutions</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  <li><a href="/solutions/iso-9001" className="hover:text-blue-600 transition-colors">ISO 9001</a></li>
                  <li><a href="/solutions/iso-27001" className="hover:text-blue-600 transition-colors">ISO 27001</a></li>
                  <li><a href="/solutions/chas" className="hover:text-blue-600 transition-colors">CHAS Accreditation</a></li>
                  <li><a href="/solutions/cyber-essentials" className="hover:text-blue-600 transition-colors">Cyber Essentials</a></li>
                </ul>
              </div>

              <div className="md:col-span-1 md:ml-auto">
                <h4 className="text-slate-900 font-bold mb-6 tracking-tight">Company</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  <li><a href="/calculator" className="hover:text-blue-600 transition-colors">Accreditation Calculator</a></li>
                  <li><a href="/news" className="hover:text-blue-600 transition-colors">Industry News</a></li>
                  <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                  <li><a href="/company/success-stories" className="hover:text-blue-600 transition-colors">Success Stories</a></li>
                </ul>
              </div>

              <div className="md:col-span-1 md:ml-auto">
                <h4 className="text-slate-900 font-bold mb-6 tracking-tight">Legal</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  <li><a href="/legal/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="/legal/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                  <li><a href="/legal/cookie-policy" className="hover:text-blue-600 transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-sm text-slate-400 font-medium">© {new Date().getFullYear()} Wood Consulting. All rights reserved.</span>
              
              <div className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors group">
                <span>Proudly built by</span>
                <a href="#" className="flex items-center gap-1.5 font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
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
