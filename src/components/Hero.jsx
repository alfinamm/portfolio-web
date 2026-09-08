import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  const { personal } = portfolioData;
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Small status/education pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-xs font-semibold tracking-wider text-slate-700 uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{personal.smallLabel}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-blue-600 underline decoration-blue-200/80 underline-offset-8">{personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight">
                {personal.role}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {personal.shortBio}
            </p>

            {/* Action Buttons & Social Icons */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full sm:w-auto">
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/70 backdrop-blur-md hover:bg-white text-slate-800 border border-white/90 ring-1 ring-slate-900/[0.05] font-medium text-sm transition-all duration-200 shadow-2xs hover:border-slate-300"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Get In Touch</span>
                </a>
              </div>

              {/* Small Social Icons */}
              <div className="flex items-center gap-2.5 pt-1 sm:pt-0 sm:pl-2 sm:border-l border-slate-300/60">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-slate-700 hover:text-blue-600 hover:bg-white transition-all shadow-2xs"
                  aria-label="GitHub"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.email}
                  className="p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-slate-700 hover:text-blue-600 hover:bg-white transition-all shadow-2xs"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-slate-700 hover:text-emerald-600 hover:bg-white transition-all shadow-2xs"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Meta Container */}
            <div className="pt-3 w-full sm:w-auto">
              <div className="inline-flex flex-wrap items-center gap-6 sm:gap-8 px-5 py-3 rounded-2xl bg-white/65 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] shadow-2xs text-xs text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">Focus</span>
                  Data Analytics & BI
                </div>
                <div className="h-6 w-px bg-slate-300/70 hidden sm:block" />
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">Key Stack</span>
                  SQL • Tableau • Power BI • ETL
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo in Portrait Glass Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[310px]">
              
              {/* Decorative blurred soft blue shape behind photo */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-300/40 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-slate-300/50 rounded-full blur-2xl pointer-events-none -z-10" />

              {/* Glass Profile Card Container with tactile stroke */}
              <div className="bg-white/70 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.06] shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_20px_44px_rgba(15,23,42,0.12)]">
                
                {/* Photo Portrait Frame (~280-340px) */}
                <div className="aspect-4/5 w-full bg-white/50 backdrop-blur-xs rounded-2xl overflow-hidden border border-slate-200/80 flex flex-col items-center justify-center text-center relative group">
                  {!imgError ? (
                    <img
                      src={profileImage}
                      alt="Alfina Mazidatul Mufidah"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="p-6 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-xs border border-slate-200/90 ring-1 ring-slate-900/[0.04] flex items-center justify-center text-slate-400 mb-4 shadow-2xs">
                        <svg
                          className="w-10 h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-slate-700 tracking-wide">
                        Alfina Mazidatul Mufidah
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1 max-w-[200px]">
                        Tambahkan foto ke <code className="font-mono text-blue-600 text-[10px]">src/assets/profile.jpg</code>
                      </p>
                    </div>
                  )}
                </div>

                {/* Glass Card Caption */}
                <div className="mt-3.5 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-xs font-medium text-slate-600">Portfolio Alfina</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">2026</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
