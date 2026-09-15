import React from 'react';
import { Layers, Terminal, Layout, Cpu, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const getCategoryIcon = (index) => {
  switch (index) {
    case 0: return <Terminal className="w-5 h-5 text-purple-600" />;
    case 1: return <Layers className="w-5 h-5 text-purple-600" />;
    case 2: return <Layout className="w-5 h-5 text-purple-600" />;
    case 3: return <Cpu className="w-5 h-5 text-purple-600" />;
    case 4: return <Wrench className="w-5 h-5 text-purple-600" />;
    default: return <Terminal className="w-5 h-5 text-purple-600" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative border-t border-purple-200/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-xs font-semibold text-purple-600 tracking-wider mb-2 uppercase">
            03 // Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Skills & Tools
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 rounded-2xl ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-50 to-white border-purple-200' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-purple-100">
                <div className="p-2 rounded-lg bg-purple-100 border border-purple-200">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="font-mono text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-sm text-slate-800 font-medium px-3.5 py-1.5 rounded-xl bg-purple-50/80 border border-purple-200/80 hover:border-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
