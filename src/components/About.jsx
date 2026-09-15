import React from 'react';
import { Code2, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo, quickStats } from '../data/portfolioData';

const getIcon = (name) => {
  switch (name) {
    case 'Code2': return <Code2 className="w-6 h-6 text-purple-600" />;
    case 'MapPin': return <MapPin className="w-6 h-6 text-purple-600" />;
    case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-purple-600" />;
    default: return <Code2 className="w-6 h-6 text-purple-600" />;
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-purple-200/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-14">
          <p className="font-mono text-xs font-semibold text-purple-600 tracking-wider mb-2 uppercase">
            01 // About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Quick Overview
          </h2>
        </div>

        {/* 3 Quick Cards Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-purple-100 border border-purple-200 w-fit group-hover:scale-110 transition-transform duration-300">
                {getIcon(stat.icon)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">{stat.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Narrative Box */}
        <div className="glass-card p-8 rounded-2xl border border-purple-200/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
            Profile Summary
          </h3>

          <p className="text-slate-700 text-base leading-relaxed mb-6">
            I am a motivated Junior Frontend Developer proficient in <strong className="text-purple-700 font-semibold">React.js</strong>, <strong className="text-purple-700 font-semibold">Next.js</strong>, <strong className="text-purple-700 font-semibold">Tailwind CSS</strong>, <strong className="text-purple-700 font-semibold">JavaScript</strong>, and <strong className="text-purple-700 font-semibold">TypeScript</strong>. Experienced in building responsive, user-friendly, and modern web interfaces.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 pt-4 border-t border-purple-100">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Responsive & Mobile-First Web Architecture</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Reusable Components & Clean Code Standards</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Global State Management (Redux, Context)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>REST API Integration (Axios, Fetch)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}