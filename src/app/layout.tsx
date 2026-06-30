import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UK Accreditations | Expert Guidance & Certification",
  description: "Gain and maintain UK accreditations with our expert guidance, interactive tools, and streamlined processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Minimalist Top Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 border-b border-[var(--card-border)]">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center glow-box">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-semibold tracking-tight">AccreditUK</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
              <a href="/calculator" className="hover:text-white transition-colors">Eligibility Calculator</a>
            </div>
            <a href="/contact" className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors">
              Get Started
            </a>
          </div>
        </nav>
        
        <main className="flex-grow pt-16">
          {children}
        </main>

        <footer className="py-12 border-t border-[var(--card-border)] mt-24 glass-panel">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="font-semibold text-sm">AccreditUK © {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
