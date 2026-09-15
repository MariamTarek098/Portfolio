import React from 'react';
import { ExternalLink, Github, ArrowUpRight, ShoppingBag, Share2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

const getProjectIcon = (id) => {
  switch (id) {
    case 'ellestore': return <ShoppingBag className="w-6 h-6 text-purple-600" />;
    case 'redlline': return <Share2 className="w-6 h-6 text-purple-600" />;
    default: return <ExternalLink className="w-6 h-6 text-purple-600" />;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-purple-200/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-xs font-semibold text-purple-600 tracking-wider mb-2 uppercase">
            02 // Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Works
          </h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white/90 border border-purple-200 hover:border-purple-400 p-8 transition-all duration-300 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10"
            >
              {/* Top Row: Title & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-100 border border-purple-200">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 font-semibold">{project.subtitle}</p>
                  </div>
                </div>

                {/* Live Demo Link Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-md shadow-purple-600/20 hover:-translate-y-0.5"
                >
                  <span>Live Preview</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm leading-relaxed mb-6 max-w-3xl">
                {project.description}
              </p>

              {/* Key Features Bullet List */}
              <ul className="space-y-2.5 mb-6">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="text-purple-600 font-bold shrink-0 mt-0.5">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills & Bottom Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-purple-100">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-xs text-purple-700 font-semibold px-3 py-1 rounded-full bg-purple-50 border border-purple-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-purple-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
