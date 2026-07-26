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
  manifest: '/site.webmanifest',
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
        
        <main className="flex-grow pt-24 md:pt-[7.5rem]">
          {children}
        </main>

        <footer className="bg-primary text-white pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
              
              {/* Brand Column */}
              <div className="lg:col-span-4 pr-0 lg:pr-8">
                <div className="mb-6 bg-white px-6 py-4 rounded-xl inline-block shadow-lg">
                  <img 
                    src="/rw-2.png" 
                    alt="Riskwood Consulting Logo" 
                    className="h-10 w-auto object-contain" 
                  />
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Practical, expert support to help your organisation meet standards, pass audits and build a culture of compliance. Audit ready, every time.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors group">
                  Schedule a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Navigation Columns */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
                {/* Services */}
                <div>
                  <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-white/40">Services</h4>
                  <ul className="space-y-4 text-sm text-white/80">
                    <li><Link href="/accreditations" className="hover:text-accent transition-colors">ISO 9001</Link></li>
                    <li><Link href="/accreditations" className="hover:text-accent transition-colors">ISO 14001</Link></li>
                    <li><Link href="/accreditations" className="hover:text-accent transition-colors">ISO 45001</Link></li>
                    <li><Link href="/accreditations" className="hover:text-accent transition-colors">ISO 27001</Link></li>
                    <li><Link href="/accreditations" className="hover:text-accent transition-colors">Internal Audits</Link></li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-white/40">Company</h4>
                  <ul className="space-y-4 text-sm text-white/80">
                    <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                    <li><Link href="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
                    <li><Link href="/news" className="hover:text-accent transition-colors">Resources</Link></li>
                    <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-white/40">Contact Us</h4>
                  <ul className="space-y-4 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 
                      <span>hello@riskwood.co.uk</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 
                      <span>+44 1234 567 890</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 
                      <span className="leading-relaxed">100 Colmore Row<br />Birmingham<br />B3 3AG</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40 gap-4">
              <p>© {new Date().getFullYear()} Riskwood Consulting Ltd. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
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
