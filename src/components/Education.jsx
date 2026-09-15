import React from 'react';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-purple-200/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-xs font-semibold text-purple-600 tracking-wider mb-2 uppercase">
            04 // Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Academic Background
          </h2>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-purple-400 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-purple-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-100 border border-purple-200 text-purple-600 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-purple-600 flex items-center gap-1.5 mt-1">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 font-mono text-xs text-purple-700 font-semibold w-fit">
                  <Calendar className="w-3.5 h-3.5 text-purple-600" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
