"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "HOME", path: "/" },
  { name: "SERVICES", path: "/accreditations" },
  { name: "INDUSTRIES", path: "/industries" },
  { name: "CASE STUDIES", path: "/case-studies" },
  { name: "ABOUT", path: "/about" },
  { name: "RESOURCES", path: "/news" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled 
          ? "bg-slate-100/95 backdrop-blur-md shadow-md border-b border-slate-200" 
          : "bg-slate-50 border-b border-transparent"
      }`}
    >
      <motion.div 
        animate={{ height: isScrolled ? "7rem" : "9rem" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full"
      >
        <Link href="/" className="flex items-center group">
          <img 
            src="/rw-2.png" 
            alt="Riskwood Consulting Logo" 
            className="h-20 md:h-24 w-auto object-contain group-hover:opacity-90 transition-opacity" 
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
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

        <Link 
          href="/contact" 
          className="hidden md:inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(29,78,216,0.3)] transition-all px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider group"
        >
          Contact Us
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.header>
  );
}
