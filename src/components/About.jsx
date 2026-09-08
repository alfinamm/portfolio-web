import React from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-xs font-semibold text-blue-700 uppercase tracking-wider mb-3 shadow-2xs">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Background & Analytical Interest
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Information Systems Graduate • Data Analytics & Business Intelligence Enthusiast
          </p>
        </div>

        {/* Content: 3 short paragraphs + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-base leading-relaxed">
            {personal.aboutBio.map((paragraph, index) => (
              <p
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/90 ring-1 ring-slate-900/[0.04] shadow-xs"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Highlight 1: Education */}
            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/95 ring-1 ring-slate-900/[0.06] hover:ring-blue-500/25 hover:border-blue-200/90 hover:shadow-md transition-all duration-200 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-500/10 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Education
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Bachelor of Information Systems
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  UPN "Veteran" Jawa Timur   •   IPK 3.82
                </p>
              </div>
            </div>

            {/* Highlight 2: Interest */}
            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/95 ring-1 ring-slate-900/[0.06] hover:ring-blue-500/25 hover:border-blue-200/90 hover:shadow-md transition-all duration-200 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-500/10 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Interest
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Data Analytics & Business Intelligence
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Data Visualization, ETL, & Data Warehouse
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
