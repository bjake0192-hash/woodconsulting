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
        {/* Floating Pill Navigation */}
        <div className="fixed top-8 w-full z-50 px-6 flex justify-center pointer-events-none">
          <nav className="glass-panel pointer-events-auto flex items-center gap-2 p-2 rounded-full shadow-2xl shadow-black/50 border-white/10">
            <div className="flex items-center gap-8 px-6 py-2">
              <a href="/" className="flex items-center gap-2 group">
                <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                  <span className="text-accent-foreground font-bold text-xs">W</span>
                </div>
                <span className="font-bold tracking-kairo text-sm text-foreground">WOOD</span>
              </a>
              
              <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-kairo">
                <a href="/accreditations" className="hover:text-accent transition-colors">Accreditations</a>
                <a href="/news" className="hover:text-accent transition-colors">Insights</a>
                <a href="/calculator" className="hover:text-accent transition-colors">Calculator</a>
              </div>
            </div>

            <a href="/contact" className="kairo-button !py-2.5 !px-6 !text-[11px] shadow-lg shadow-accent/20">
              Get Started
            </a>
          </nav>
        </div>
        
        <main className="flex-grow">
          {children}
        </main>

        <footer className="pt-40 pb-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
              {/* Brand Column */}
              <div className="md:col-span-6">
                <div className="flex items-center gap-3 mb-10 group">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">W</span>
                  </div>
                  <a href="/" className="font-black tracking-kairo text-3xl text-foreground uppercase">WOOD CONSULTING</a>
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-kairo text-bone leading-tight uppercase mb-12 max-w-xl">
                  Redefining operational <br />
                  <span className="text-accent italic">Authority</span> in the UK.
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Mail className="w-5 h-5 text-muted-kairo group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-kairo mb-1">Inquiries</p>
                      <a href="mailto:hello@woodconsulting.co.uk" className="text-lg font-bold text-bone hover:text-accent transition-colors tracking-tight">
                        hello@woodconsulting.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Phone className="w-5 h-5 text-muted-kairo group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-kairo mb-1">Support</p>
                      <a href="tel:+442071234567" className="text-lg font-bold text-bone hover:text-accent transition-colors tracking-tight">
                        +44 (0) 20 7123 4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Columns */}
              <div className="md:col-span-2 md:col-start-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-10">Coordinates</p>
                <ul className="space-y-6 text-[13px] font-bold uppercase tracking-widest">
                  <li><a href="/solutions/iso-9001" className="text-muted-kairo hover:text-bone transition-colors">ISO 9001</a></li>
                  <li><a href="/solutions/iso-27001" className="text-muted-kairo hover:text-bone transition-colors">ISO 27001</a></li>
                  <li><a href="/solutions/chas" className="text-muted-kairo hover:text-bone transition-colors">CHAS</a></li>
                  <li><a href="/solutions/cyber-essentials" className="text-muted-kairo hover:text-bone transition-colors">Cyber Essentials</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-10">Directory</p>
                <ul className="space-y-6 text-[13px] font-bold uppercase tracking-widest">
                  <li><a href="/calculator" className="text-muted-kairo hover:text-bone transition-colors">Calculator</a></li>
                  <li><a href="/news" className="text-muted-kairo hover:text-bone transition-colors">Insights</a></li>
                  <li><a href="/contact" className="text-muted-kairo hover:text-bone transition-colors">Contact</a></li>
                  <li><a href="/legal/privacy-policy" className="text-muted-kairo hover:text-bone transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold text-muted-kairo uppercase tracking-widest">
                  © {new Date().getFullYear()} Wood Consulting. 
                </span>
                <span className="text-[10px] text-muted-kairo/50 uppercase tracking-[0.2em]">
                  Operational Efficiency Redefined.
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-[11px] font-bold text-muted-kairo uppercase tracking-widest">
                <span>Coded with precision by</span>
                <a href="#" className="flex items-center gap-3 text-bone hover:text-accent transition-colors group">
                  <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-foreground">
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
