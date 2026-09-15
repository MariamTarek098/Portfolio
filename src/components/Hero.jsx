import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Download,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";
import resume from "../assets/Mariam-Tarek-Resume.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50 hero-glow">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div>
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />

              <span className="font-mono text-xs font-semibold text-purple-700 tracking-wider">
                {personalInfo.tagline}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {personalInfo.name}
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Download Resume */}
              <a
                href={resume}
                download="Mariam-Tarek-Resume.pdf"
                className="group inline-flex items-center gap-2 px-6 py-3.5 border border-purple-200 hover:border-purple-400 text-purple-700 hover:text-purple-900 text-sm font-semibold rounded-xl transition-all duration-300 bg-purple-50 hover:bg-purple-100 shadow-sm"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>

              {/* Get In Touch */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-purple-200 hover:border-purple-400 text-slate-700 hover:text-purple-700 text-sm font-semibold rounded-xl transition-all duration-300 bg-white hover:bg-purple-50 shadow-sm"
              >
                <Mail className="w-4 h-4 text-purple-600" />
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-purple-200/60">
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-purple-200 hover:border-purple-400 text-slate-600 hover:text-purple-600 transition-all duration-300 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-purple-200 hover:border-purple-400 text-slate-600 hover:text-purple-600 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <span className="text-xs font-mono text-slate-500 pl-2">
                Based in {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Right Column: Developer Photo Card */}
<div className="relative flex justify-center">
  {/* Main Card */}
  <div className="relative z-10 w-full max-w-xs rounded-3xl bg-white/80 border border-purple-200 p-3 shadow-2xl backdrop-blur-xl">
    {/* Purple Photo Background */}
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-300 via-purple-200 to-indigo-300 border border-purple-300 group">
      <img
        src={personalInfo.avatarPlaceholder}
        alt={personalInfo.name}
        className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />

    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}