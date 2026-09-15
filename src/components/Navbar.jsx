import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'projects', label: 'Projects', number: '02' },
  { id: 'skills', label: 'Skills', number: '03' },
  { id: 'education', label: 'Education', number: '04' },
  { id: 'courses', label: 'Courses', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#faf5ff]/90 backdrop-blur-md border-b border-purple-200/80 py-4 shadow-md shadow-purple-900/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group text-xl font-bold tracking-wide text-slate-900">
          <Code2 className="w-6 h-6 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
          <span>Mariam<span className="text-purple-600">.</span></span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative font-mono text-sm text-slate-600 hover:text-purple-700 transition-colors py-1"
            >
              <span className="text-purple-600/80 mr-1.5 font-semibold">{item.number}.</span>
              {item.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 border border-purple-300 bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 hover:text-purple-700 p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-purple-600" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#faf5ff]/95 backdrop-blur-xl border-b border-purple-200 px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="font-mono text-lg text-slate-800 hover:text-purple-700 flex items-center gap-3 py-2 border-b border-purple-100"
              >
                <span className="text-purple-600 font-bold">{item.number}.</span>
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium text-sm transition-colors shadow-md shadow-purple-600/20"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
