import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.social.emailDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4 shadow-2xs">
          Get In Touch
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let's Connect
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          I'm open to opportunities to learn, collaborate, and grow in the field of Data Analytics and Business Intelligence.
        </p>

        {/* 3 Contact Action Cards: WhatsApp, Email, GitHub */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
          
          {/* WhatsApp Card */}
          <div className="bg-white/75 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.06] shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:border-emerald-300 hover:ring-emerald-500/20 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50/90 text-emerald-600 ring-1 ring-emerald-500/15 flex items-center justify-center">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">WhatsApp</span>
                <p className="text-sm font-bold text-slate-900 truncate mt-0.5">
                  {personal.social.whatsappDisplay}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-slate-200/60">
              <a
                href={personal.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <span>Chat via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white/75 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.06] shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:border-blue-200/90 hover:ring-blue-500/25 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-500/15 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</span>
                <p className="text-sm font-bold text-slate-900 truncate mt-0.5">
                  {personal.social.emailDisplay}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-slate-200/60 flex items-center justify-between">
              <a
                href={personal.social.email}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white/80 transition-colors text-xs flex items-center gap-1"
                title="Copy Email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-white/75 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.06] shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:border-slate-300 hover:ring-slate-500/20 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-900 ring-1 ring-slate-900/10 flex items-center justify-center">
                <SiGithub className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">GitHub</span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  alfinamm
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-slate-200/60">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
