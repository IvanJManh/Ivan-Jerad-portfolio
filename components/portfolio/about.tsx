import { portfolioContent } from '@/lib/portfolio-content';

export function About() {
  const { title, content } = portfolioContent.about;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#f3f4f6] mb-16 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-[#8e8e9f] leading-relaxed mb-8">
              {content}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-6 bento-card">
                <div className="text-3xl font-bold text-[#a78bfa] mb-2">4</div>
                <div className="text-sm text-[#8e8e9f] font-medium">Projects</div>
              </div>
              <div className="text-center p-6 bento-card">
                <div className="text-3xl font-bold text-[#a78bfa] mb-2">5+</div>
                <div className="text-sm text-[#8e8e9f] font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bento-card">
                <div className="text-3xl font-bold text-[#a78bfa] mb-2">∞</div>
                <div className="text-sm text-[#8e8e9f] font-medium">Growth</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bento-card p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-[#6366F1] to-[#a78bfa] rounded-full flex items-center justify-center shadow-lg" style={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)' }}>
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <p className="text-lg font-bold text-[#f3f4f6] mb-2">Ivan Jerad Manamperi</p>
                <p className="text-sm text-[#8e8e9f] font-medium">CS @ UOW & IIT Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
