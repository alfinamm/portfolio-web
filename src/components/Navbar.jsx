import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      <header
        className={`pointer-events-auto max-w-[1120px] mx-auto rounded-2xl transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-2xl border border-white/95 ring-1 ring-slate-900/[0.08] shadow-[0_12px_32px_rgba(15,23,42,0.08)] py-2.5 px-4 sm:px-6'
            : 'bg-white/70 backdrop-blur-xl border border-white/85 ring-1 ring-slate-900/[0.06] shadow-[0_8px_24px_rgba(15,23,42,0.04)] py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand: [AM] Alfina Mazidatul Mufidah */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-slate-900 hover:text-blue-600 transition-colors"
          >
            <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold tracking-wider group-hover:bg-blue-600 transition-colors shadow-xs">
              AM
            </span>
            <span className="font-semibold text-slate-900 tracking-tight text-sm sm:text-base group-hover:text-blue-600 transition-colors">
              <span className="sm:hidden">Alfina</span>
              <span className="hidden sm:inline">Alfina Mazidatul Mufidah</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white/80 hover:shadow-2xs transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-slate-700 hover:bg-white/80 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu: Floating Glass Container */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pt-2 pb-1 border-t border-slate-200/60 space-y-1 transition-all">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3.5 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-white/80 transition-all"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200/60 mt-1">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-colors shadow-xs"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
