import { portfolioContent } from '@/lib/portfolio-content';

export function Hero() {
  const { headline, subheadline, intro, ctaButtons } = portfolioContent.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#000000] px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Radial lime glow background */}
      <div className="radial-glow absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-0 z-0" style={{
        background: 'radial-gradient(circle, rgba(40, 167, 69, 0.12) 0%, transparent 70%)'
      }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Overline label */}
        <p className="overline-label text-sm tracking-widest font-semibold text-[#28A745] mb-4">
          PRODUCT BUILDER &amp; PROBLEM SOLVER
        </p>

        {/* Headline - Massive typography with tight tracking */}
        <h1 
          className="hero-name text-8xl sm:text-9xl lg:text-[10rem] font-black mb-6 text-balance leading-none"
          style={{ 
            letterSpacing: '-0.03em',
            background: 'linear-gradient(180deg, #ffffff 60%, #8e8e9f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {headline}
        </h1>

        {/* Bio */}
        <p className="hero-bio text-lg text-[#8e8e9f] mb-12 max-w-2xl mx-auto leading-relaxed">
          {intro}
        </p>

        {/* CTA Buttons */}
        <div className="cta-group flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {ctaButtons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={idx === 0 ? 'btn-lime-primary clickable' : 'btn-underlined clickable'}
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-[#28A745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
