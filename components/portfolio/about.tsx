import { portfolioContent } from '@/lib/portfolio-content';

export function About() {
  const { title, content } = portfolioContent.about;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-16 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              {content}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-6 premium-card">
                <div className="text-3xl font-bold text-[#1E40AF] mb-2">4</div>
                <div className="text-sm text-[#6B7280] font-medium">Projects</div>
              </div>
              <div className="text-center p-6 premium-card">
                <div className="text-3xl font-bold text-[#1E40AF] mb-2">5+</div>
                <div className="text-sm text-[#6B7280] font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 premium-card">
                <div className="text-3xl font-bold text-[#1E40AF] mb-2">∞</div>
                <div className="text-sm text-[#6B7280] font-medium">Growth</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="premium-card p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-28 h-28 mx-auto mb-6 bg-[#1E40AF] rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <p className="text-lg font-bold text-[#1A1A1A] mb-2">Ivan Jerad Manamperi</p>
                <p className="text-sm text-[#6B7280] font-medium">CS @ UOW & IIT Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
