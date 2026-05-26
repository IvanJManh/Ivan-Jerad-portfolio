'use client';

import { useState } from 'react';
import { portfolioContent } from '@/lib/portfolio-content';

export function Contact() {
  const { title, intro, email, phone, linkedin, github, formFields } = portfolioContent.contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0c] via-[#1a1627] to-[#0a0a0c]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f3f4f6] mb-4">
            {title}
          </h2>
          <p className="text-lg text-[#8e8e9f]">
            {intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            <div className="glass-premium p-8">
              <h3 className="text-xl font-bold text-[#f3f4f6] mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-[#a78bfa] hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(99,102,241,0.2)] flex items-center justify-center group-hover:bg-[rgba(99,102,241,0.3)] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#8e8e9f]">Email</div>
                    <div className="font-semibold text-[#f3f4f6]">{email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-[#a78bfa] hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(99,102,241,0.2)] flex items-center justify-center group-hover:bg-[rgba(99,102,241,0.3)] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#8e8e9f]">Phone</div>
                    <div className="font-semibold text-[#f3f4f6]">{phone}</div>
                  </div>
                </a>

                <a
                  href={`https://linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#a78bfa] hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(99,102,241,0.2)] flex items-center justify-center group-hover:bg-[rgba(99,102,241,0.3)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#8e8e9f]">LinkedIn</div>
                    <div className="font-semibold text-[#f3f4f6]">{linkedin}</div>
                  </div>
                </a>

                <a
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#a78bfa] hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(99,102,241,0.2)] flex items-center justify-center group-hover:bg-[rgba(99,102,241,0.3)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">GitHub</div>
                    <div className="font-semibold text-[#f3f4f6]">{github}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-premium p-8">
            {submitted ? (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <svg className="w-16 h-16 text-[#a78bfa] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#f3f4f6] mb-2">Message Sent!</h3>
                  <p className="text-[#8e8e9f]">I&apos;ll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold text-[#f3f4f6] mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full px-4 py-3 border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.05)] text-[#f3f4f6] rounded-lg focus:border-[#6366F1] focus:outline-none transition-colors resize-none placeholder-[#8e8e9f]"
                        rows={4}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full px-4 py-3 border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.05)] text-[#f3f4f6] rounded-lg focus:border-[#6366F1] focus:outline-none transition-colors placeholder-[#8e8e9f]"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-[#6366F1] text-white font-semibold py-3 rounded-lg hover:bg-[#818cf8] transition-all duration-300 mt-6 hover:shadow-lg hover:shadow-[rgba(99,102,241,0.5)]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
