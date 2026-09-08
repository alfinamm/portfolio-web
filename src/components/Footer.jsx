import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Linkedin, Github } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Centered Floating Glassmorphism Card Container with Crisp Stroke */}
      <div className="max-w-[1120px] mx-auto rounded-3xl bg-white/75 backdrop-blur-xl border border-white/95 ring-1 ring-slate-900/[0.06] shadow-[0_16px_36px_rgba(15,23,42,0.06)] p-6 sm:p-8 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Name & Title */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Alfina Mazidatul Mufidah
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Data Analyst Portfolio
            </p>
          </div>

          {/* Right: Social Links (LinkedIn, GitHub, Email) */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://www.linkedin.com/in/alfinamm/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white border border-white/90 ring-1 ring-slate-900/[0.04] transition-all duration-150 shadow-2xs"
            >
              <Linkedin className="w-3.5 h-3.5 text-slate-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white border border-white/90 ring-1 ring-slate-900/[0.04] transition-all duration-150 shadow-2xs"
            >
              <Github className="w-3.5 h-3.5 text-slate-500" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.social.email}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white border border-white/90 ring-1 ring-slate-900/[0.04] transition-all duration-150 shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Alfina Mazidatul Mufidah</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
