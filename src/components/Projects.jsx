import React, { useState } from 'react';
import { ExternalLink, BarChart2, TrendingUp, PieChart, Layers, X, Info, Layout } from 'lucide-react';
import ToolIcon from './ToolIcon';
import { portfolioData } from '../data/portfolioData';

// Visual preview illustration for each project card
const ProjectPreviewIllustration = ({ index, project }) => {
  const icons = [PieChart, BarChart2, TrendingUp, Layout];
  const IconComponent = icons[index % icons.length];

  return (
    <div className="w-full h-48 bg-gradient-to-b from-blue-100/35 via-slate-100/40 to-slate-200/30 relative overflow-hidden flex flex-col justify-between p-5 border-b border-white/90 group-hover:from-blue-100/50 transition-colors">
      
      {/* Top wireframe header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300/90" />
        </div>
        <span className="text-[11px] font-mono text-slate-600 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-white/95 ring-1 ring-slate-900/[0.04] shadow-2xs">
          {project.category}
        </span>
      </div>

      {/* Center visual data motif */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        <div className="p-3.5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xs border border-white/95 ring-1 ring-slate-900/[0.05] group-hover:scale-105 group-hover:border-blue-300/90 transition-all duration-300">
          <IconComponent className="w-6 h-6 text-blue-600" />
        </div>
        <div className="space-y-1.5">
          <div className="w-24 h-2 rounded-full bg-slate-300/80" />
          <div className="w-16 h-2 rounded-full bg-slate-300/50" />
        </div>
      </div>

      {/* Bottom label */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-500 font-medium">
        <span>{project.tools.join(' • ')}</span>
        <span className="font-mono">#{String(index + 1).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 ring-1 ring-slate-900/[0.05] text-xs font-semibold text-blue-700 uppercase tracking-wider mb-3 shadow-2xs">
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Beberapa proyek akademik, Studi Independen, dan proyek pribadi yang berkaitan dengan Data Analytics, Business Intelligence, dan Data Visualization.
            </p>
          </div>
          <div className="text-sm text-slate-500 font-medium shrink-0">
            Total <span className="text-slate-900 font-bold">{projects.length}</span> projects
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.06] overflow-hidden shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_48px_rgba(15,23,42,0.1)] hover:border-blue-200/90 hover:ring-blue-500/25 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image / Wireframe Placeholder */}
                <ProjectPreviewIllustration index={index} project={project} />

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category Tag */}
                  <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide uppercase bg-blue-50/90 text-blue-700 border border-blue-200/60">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/80 border border-white/90 ring-1 ring-slate-900/[0.04] text-slate-700 text-xs font-medium"
                      >
                        <ToolIcon name={tool} className="w-3.5 h-3.5" />
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-7 py-4 bg-white/50 backdrop-blur-xs border-t border-slate-200/60 flex items-center justify-between gap-3">
                {project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors shadow-2xs"
                  >
                    <span>{project.buttonText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors shadow-2xs"
                  >
                    <span>{project.buttonText}</span>
                  </button>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-white/80 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md transition-all">
          <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/95 ring-1 ring-slate-900/[0.08] max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Header with Close button */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide uppercase bg-blue-50/90 text-blue-700 border border-blue-200/60 mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed bg-white/60 p-4 rounded-2xl border border-white/80">
                {selectedProject.overview || selectedProject.description}
              </p>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 text-xs font-medium shadow-2xs"
                  >
                    <ToolIcon name={tool} className="w-3.5 h-3.5" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Project Focus */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Project Focus
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed bg-white/60 p-4 rounded-2xl border border-white/80">
                {selectedProject.projectFocus}
              </p>
            </div>

            {/* Link Button */}
            <div className="pt-2 flex justify-end">
              {selectedProject.link !== '#' ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors shadow-xs"
                >
                  <span>Open {selectedProject.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-slate-500 italic">
                  Aset gambar & detail project akan dilengkapi setelah file disediakan.
                </span>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
