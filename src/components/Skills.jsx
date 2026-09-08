import React from 'react';
import ToolIcon from './ToolIcon';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-xs font-semibold text-blue-700 uppercase tracking-wider mb-3 shadow-2xs">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Skills & Tools
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Tools dan kompetensi yang saya pelajari dan gunakan dalam proyek akademik, Studi Independen, serta pengalaman internship.
          </p>
        </div>

        {/* Categories Grid with Official Tool Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-xl p-7 rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.05] shadow-xs hover:border-blue-200/90 hover:ring-blue-500/25 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-wider flex items-center gap-2 uppercase">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-5">
                  {cat.description}
                </p>

                {/* Skill Chips with Tool Logos */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 bg-white/85 border border-white/95 ring-1 ring-slate-900/[0.05] hover:bg-white hover:text-blue-600 hover:ring-blue-400/30 transition-all duration-150 shadow-2xs"
                    >
                      <ToolIcon name={skill} className="w-4 h-4 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
