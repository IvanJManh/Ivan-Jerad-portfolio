import { portfolioContent } from '@/lib/portfolio-content';

export function Hero() {
  const { headline, subheadline, intro, ctaButtons } = portfolioContent.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F8F7F5] px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1E40AF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#6366F1] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Headline - Massive typography */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-[#1A1A1A] mb-6 text-balance leading-none">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-[#6B7280] font-medium mb-8 text-balance max-w-3xl mx-auto">
          {subheadline}
        </p>

        {/* Intro */}
        <p className="text-lg text-[#6B7280] mb-12 max-w-2xl mx-auto leading-relaxed">
          {intro}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {ctaButtons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={`px-8 py-4 font-semibold transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) rounded-xl ${
                idx === 0
                  ? 'bg-[#1E40AF] text-white hover:bg-[#1a3487] shadow-sm hover:shadow-md hover:scale-105'
                  : 'bg-transparent text-[#1E40AF] border-2 border-[#1E40AF] hover:bg-[#F3F1ED]'
              }`}
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
