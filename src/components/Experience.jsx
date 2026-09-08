import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3 shadow-2xs">
            Experience
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Experience
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Pengalaman dan pembelajaran yang saya peroleh melalui program internship dan Studi Independen.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 ml-2 sm:ml-4 border-l-2 border-slate-300/80 space-y-10">

          {experience.map((item, index) => (
            <div key={index} className="relative group max-w-4xl">

              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-blue-600 shadow-xs" />

              {/* Experience Card */}
              <div className="bg-white/75 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.05] shadow-xs hover:shadow-md hover:border-blue-200/90 transition-all duration-200">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">

                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50/90 text-blue-700 ring-1 ring-blue-500/10 text-xs font-semibold uppercase tracking-wider mb-2">
                      {item.programType}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.role}
                    </h3>

                    <p className="text-base font-semibold text-slate-700 mt-1">
                      {item.company}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 text-xs font-medium w-fit shrink-0 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {item.period}
                  </span>

                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.topics && item.topics.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-slate-200/60">

                    <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                      {item.topicsTitle || 'Key Activities'}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {item.topics.map((topic, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-center gap-2 text-xs text-slate-700 bg-white/70 px-3 py-2 rounded-xl border border-white/90 ring-1 ring-slate-900/[0.03]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />

                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {/* Additional Highlight */}
                {item.highlight && (
                  <div className="mt-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80 text-xs text-slate-700 leading-relaxed">
                    <span className="font-semibold text-blue-900 block mb-1">
                      {item.highlightTitle || 'Project Highlight:'}
                    </span>

                    {item.highlight}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}