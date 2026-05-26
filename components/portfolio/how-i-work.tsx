import { portfolioContent } from '@/lib/portfolio-content';

export function HowIWork() {
  const steps = portfolioContent.howIWork;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#f3f4f6] mb-20 text-center">
          How I Work
        </h2>

        <div className="relative">
          {/* Ultra-thin luxury tracking line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[rgba(255,255,255,0.1)]"></div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Step number - monospace, minimal */}
                <div className="flex justify-start mb-12">
                  <span className="text-sm font-mono text-[#8e8e9f] tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                {/* Neon dot illuminates on hover */}
                <div className="hidden md:block absolute top-2 left-[-8px] w-4 h-4 rounded-full bg-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" style={{ boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)' }}></div>

                {/* Step content */}
                <div>
                  <h3 className="text-xl font-bold text-[#f3f4f6] mb-4 group-hover:text-[#a78bfa] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#8e8e9f] leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
