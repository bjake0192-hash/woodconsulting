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
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
        {/* Minimalist Top Navigation */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                <span className="text-accent-foreground font-bold text-lg">W</span>
              </div>
              <span className="font-bold tracking-kairo text-xl text-foreground">WOOD</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-muted-kairo">
              <a href="/accreditations" className="hover:text-accent transition-colors">Accreditations</a>
              <a href="/news" className="hover:text-accent transition-colors">Insights</a>
              <a href="/calculator" className="hover:text-accent transition-colors">Calculator</a>
            </div>

            <a href="/contact" className="kairo-button text-[13px] uppercase tracking-widest">
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </nav>
        
        <main className="flex-grow pt-20">
          {children}
        </main>

        <footer className="pt-24 pb-12 border-t border-white/5 bg-background relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
              {/* Brand Column */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-2 mb-8 group">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">W</span>
                  </div>
                  <a href="/" className="font-bold tracking-kairo text-2xl text-foreground">WOOD</a>
                </div>
                <p className="text-muted-kairo text-lg leading-relaxed max-w-md mb-10">
                  Precision in compliance. Authority in accreditations. 
                  We streamline the operational complexity of UK certifications 
                  for high-performance businesses.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="mailto:hello@woodconsulting.co.uk" className="text-sm font-medium hover:text-accent transition-colors pb-1 border-b border-white/10 hover:border-accent">
                    hello@woodconsulting.co.uk
                  </a>
                  <a href="tel:+442071234567" className="text-sm font-medium hover:text-accent transition-colors pb-1 border-b border-white/10 hover:border-accent">
                    +44 (0) 20 7123 4567
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2 md:col-start-7">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-kairo mb-8">Solutions</h4>
                <ul className="space-y-4 text-[15px] font-medium">
                  <li><a href="/solutions/iso-9001" className="hover:text-accent transition-colors">ISO 9001</a></li>
                  <li><a href="/solutions/iso-27001" className="hover:text-accent transition-colors">ISO 27001</a></li>
                  <li><a href="/solutions/chas" className="hover:text-accent transition-colors">CHAS</a></li>
                  <li><a href="/solutions/cyber-essentials" className="hover:text-accent transition-colors">Cyber Essentials</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-kairo mb-8">Company</h4>
                <ul className="space-y-4 text-[15px] font-medium">
                  <li><a href="/calculator" className="hover:text-accent transition-colors">Calculator</a></li>
                  <li><a href="/news" className="hover:text-accent transition-colors">Insights</a></li>
                  <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
                  <li><a href="/company/success-stories" className="hover:text-accent transition-colors">Success Stories</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-kairo mb-8">Legal</h4>
                <ul className="space-y-4 text-[15px] font-medium">
                  <li><a href="/legal/privacy-policy" className="hover:text-accent transition-colors">Privacy</a></li>
                  <li><a href="/legal/terms-of-service" className="hover:text-accent transition-colors">Terms</a></li>
                  <li><a href="/legal/cookie-policy" className="hover:text-accent transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <span className="text-[13px] text-muted-kairo font-medium">
                © {new Date().getFullYear()} Wood Consulting. Operational Efficiency Redefined.
              </span>
              
              <div className="flex items-center gap-3 text-[13px] text-muted-kairo">
                <span>Experience by</span>
                <a href="#" className="flex items-center gap-2 font-bold text-foreground hover:text-accent transition-colors group">
                  <div className="w-5 h-5 bg-accent rounded-sm flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-foreground">
                      <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  KAIRO STUDIO
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
