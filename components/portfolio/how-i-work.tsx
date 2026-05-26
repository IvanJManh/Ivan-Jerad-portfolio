import { portfolioContent } from '@/lib/portfolio-content';

export function HowIWork() {
  const steps = portfolioContent.howIWork;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center">
          How I Work
        </h2>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"></div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Step number circle */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl relative z-10 ${[
                    'bg-blue-600',
                    'bg-purple-600',
                    'bg-pink-600',
                    'bg-orange-600'
                  ][idx]}`}>
                    {item.step}
                  </div>
                </div>

                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
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
