"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PhoneCall, Menu, X, ArrowUpLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "خدماتنا", path: "/services" },
    { name: "المقالات", path: "/blog" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  return (
    <>
      {/* Top Thin Info Bar */}
      <div className="hidden md:block bg-slate-900 text-slate-300 py-2 text-xs font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1">📍 الرياض، المملكة العربية السعودية</span>
            <span className="text-slate-700">|</span>
            <span className="text-saddad-gold font-medium">مؤسسة مالية وتمويلية معتمدة</span>
          </div>
          <div className="flex gap-5 items-center">
            <a href="mailto:info@brand1me.com" className="hover:text-white transition-colors">info@brand1me.com</a>
            <span className="text-slate-700">|</span>
            <a href="https://wa.me/00966570856657" dir="ltr" className="font-bold text-white tracking-wide hover:text-saddad-gold transition-colors" aria-label="تواصل معنا عبر واتساب">00966570856657</a>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative z-50 transition-all duration-300 bg-white py-2.5 border-b border-slate-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/images/logo.png" 
                alt="" 
                aria-hidden="true"
                width={100} 
                height={100} 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform group-hover:scale-105"
                priority
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-900 tracking-tight">نجد السداد</span>
                <span className="text-[10px] text-slate-400 tracking-wider font-semibold">للحلول المالية والتطوير العقاري</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-50 px-2 py-1.5 rounded-full border border-slate-200/60">
              {navLinks.map((item, i) => {
                const isActive = pathname === item.path || (item.path !== "/" && pathname?.startsWith(item.path));
                return (
                  <Link
                    key={i}
                    href={item.path}
                    className={`px-5 py-2 rounded-full font-medium text-xs transition-all duration-300 ${
                      isActive 
                        ? "bg-white text-slate-950 shadow-sm font-bold border border-slate-200/50" 
                        : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/00966570856657"
                className="group bg-saddad-gold text-slate-950 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-saddad-gold-light transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <PhoneCall size={15} strokeWidth={2.5} />
                <span>طلب استشارة فورية</span>
                <ArrowUpLeft size={15} className="group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 border border-slate-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-3">
                {navLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.path}
                    className="px-4 py-3 font-medium text-slate-800 hover:bg-slate-50 rounded-xl transition-colors text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-2 mx-2"></div>
                <a 
                  href="https://wa.me/00966570856657" 
                  className="bg-saddad-gold text-slate-950 p-3.5 rounded-xl font-bold text-center flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <PhoneCall size={18} />
                  <span>تواصل معنا عبر واتساب</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
