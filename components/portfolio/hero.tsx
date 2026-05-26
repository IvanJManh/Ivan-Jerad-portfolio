import { portfolioContent } from '@/lib/portfolio-content';

export function Hero() {
  const { headline, subheadline, intro, ctaButtons } = portfolioContent.hero;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 text-balance">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-2xl sm:text-3xl text-blue-600 font-semibold mb-6 text-balance">
          {subheadline}
        </p>

        {/* Intro */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {intro}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaButtons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                idx === 0
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
