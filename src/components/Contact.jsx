import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    console.log("Email sent successfully:", response);

    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  } catch (error) {
    console.error("EmailJS error:", error);
    console.error("Status:", error.status);
    console.error("Text:", error.text);

    alert(`Failed to send message: ${error.text || "Unknown error"}`);
  }
};

  return (
    <section id="contact" className="py-24 relative border-t border-purple-200/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="font-mono text-xs font-semibold text-purple-600 tracking-wider mb-2 uppercase">
            06 // Contact
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            I'm currently open to new frontend developer opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <div className="glass-card p-6 rounded-2xl text-center group relative">
            <div className="p-3 rounded-xl bg-purple-100 border border-purple-200 text-purple-600 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1 font-semibold">Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors block truncate"
            >
              {personalInfo.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-purple-600 hover:text-purple-800 font-mono font-semibold transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-6 rounded-2xl text-center group">
            <div className="p-3 rounded-xl bg-purple-100 border border-purple-200 text-purple-600 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1 font-semibold">Phone</p>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors block"
            >
              {personalInfo.phone}
            </a>
            <span className="text-xs text-slate-500 mt-2 block font-mono">Direct Call / WhatsApp</span>
          </div>

          {/* Location Card */}
          <div className="glass-card p-6 rounded-2xl text-center group">
            <div className="p-3 rounded-xl bg-purple-100 border border-purple-200 text-purple-600 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1 font-semibold">Location</p>
            <p className="text-sm font-bold text-slate-900">{personalInfo.location}</p>
            <span className="text-xs text-slate-500 mt-2 block font-mono">Available for Remote Work</span>
          </div>

        </div>

        {/* Contact Form Box */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl max-w-2xl mx-auto border border-purple-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Send Me a Message</h3>

          {formSubmitted ? (
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800">
              <Check className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
              <h4 className="font-bold text-lg text-slate-900 mb-1">Message Sent Successfully!</h4>
              <p className="text-sm text-emerald-700">Thank you for reaching out, Mariam will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 focus:border-purple-600 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors text-sm shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 focus:border-purple-600 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors text-sm shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Mariam, I'd like to talk about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 focus:border-purple-600 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors text-sm resize-none shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/25"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Social Links Footer */}
          <div className="flex items-center justify-center gap-6 pt-8 mt-8 border-t border-purple-100">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-purple-600 transition-colors font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-purple-200">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-purple-600 transition-colors font-medium"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
