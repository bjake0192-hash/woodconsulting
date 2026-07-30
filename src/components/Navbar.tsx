"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/accreditations" },
  { name: "INDUSTRIES", path: "/industries" },
  { name: "RESOURCES", path: "/news" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${
          isScrolled 
            ? "bg-slate-100/95 backdrop-blur-md shadow-md border-b border-slate-200" 
            : "bg-slate-50 border-b border-transparent"
        }`}
      >
        <motion.div 
          className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full h-20 md:h-[7.5rem]"
        >
          <Link href="/" className="flex items-center group z-50">
            <img 
              src="/rw-2.png" 
              alt="Riskwood Consulting Logo" 
              className="h-20 md:h-40 w-auto object-contain shrink-0 group-hover:opacity-90 transition-opacity" 
            />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className="relative text-xs font-bold tracking-widest text-slate-600 hover:text-primary transition-colors py-2 group"
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(7,30,70,0.3)] transition-all px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider group"
            >
              Contact Us
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[90] bg-white pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-black text-primary hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-lg text-sm font-bold uppercase tracking-wider w-full"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
