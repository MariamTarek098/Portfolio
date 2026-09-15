import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-purple-200/80 bg-[#faf5ff] relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex items-center gap-3">
          <Code2 className="w-5 h-5 text-purple-600" />
          <span className="text-sm text-slate-600 font-mono">
            Designed & Built by <span className="text-slate-900 font-bold">{personalInfo.name}</span> © {new Date().getFullYear()}
          </span>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-700 hover:text-purple-700 p-2.5 rounded-lg bg-white border border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-sm"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4 text-purple-600" />
        </button>

      </div>
    </footer>
  );
}
