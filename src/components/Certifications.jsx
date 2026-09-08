import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3 shadow-2xs">
            Accreditations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Sertifikasi Fundamental Data Analytics
          </p>
        </div>

        {/* Certifications Grid (Single / Simple layout) */}
        <div className="max-w-xl">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/75 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.05] hover:border-blue-200/90 hover:ring-blue-500/25 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-500/10 shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <div className="space-y-1 flex-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {cert.issuer}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    Google Skillshop
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex justify-end">
                <a
                  href={cert.url}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50/60 hover:bg-blue-50 transition-colors"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
