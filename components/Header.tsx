"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../app/LanguageContext';
import { translations } from '../app/translations';
import GooeyNav from './GooeyNav';

// update with your own items
const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  // language state moved to context
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 gradient-bg py-4 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 z-10 shrink-0">
          <img
            src="/logo.png"
            alt="Website Innovator Logo"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        {/* Desktop Navigation (GooeyNav) */}
        <div className="hidden lg:flex relative h-16 items-center flex-1 justify-center z-0">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 z-10">
          {/* Language selector */}
          <div className="relative inline-block text-left notranslate" translate="no">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="text-white hover:text-secondary transition-colors p-2 flex items-center"
            >
              <Globe className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">{translations[language].language}</span>
            </button>
            {isLangMenuOpen && (
              <div className="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {['en', 'es', 'de', 'ar', 'fr'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang as any); setIsLangMenuOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="hidden sm:block w-px h-6 bg-white/20"></div>

          <button className="hidden sm:block bg-secondary text-primary px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform">
            <Link href="#contact">{translations[language].contact}</Link>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-white hover:text-secondary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#4c1d95]/95 backdrop-blur-md border-t border-white/10 p-4 flex flex-col items-center gap-4 transition-all z-40 shadow-xl">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-secondary font-medium py-3 text-lg w-full text-center"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-secondary text-primary px-8 py-3 rounded-full font-bold text-base w-full max-w-[200px] mt-4 text-center shadow-lg hover:scale-105 transition-transform block"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
