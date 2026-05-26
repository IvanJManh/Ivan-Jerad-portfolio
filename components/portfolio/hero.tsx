import { portfolioContent } from '@/lib/portfolio-content';

export function Hero() {
  const { headline, subheadline, intro, ctaButtons } = portfolioContent.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0c] px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Subtle radiant glow background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6366F1] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Headline - Massive typography with tight tracking */}
        <h1 
          className="text-8xl sm:text-9xl lg:text-[10rem] font-black text-[#f3f4f6] mb-6 text-balance leading-none"
          style={{ letterSpacing: '-0.03em' }}
        >
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-[#8e8e9f] font-medium mb-8 text-balance max-w-3xl mx-auto">
          {subheadline}
        </p>

        {/* Intro */}
        <p className="text-lg text-[#8e8e9f] mb-12 max-w-2xl mx-auto leading-relaxed">
          {intro}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {ctaButtons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={idx === 0 ? 'cta-primary' : 'cta-secondary'}
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
