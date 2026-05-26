import { portfolioContent } from '@/lib/portfolio-content';

export function About() {
  const { title, content } = portfolioContent.about;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {content}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600 mt-2">Full Projects</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">5+</div>
                <div className="text-sm text-gray-600 mt-2">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">∞</div>
                <div className="text-sm text-gray-600 mt-2">Growth Mindset</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <p className="text-gray-700 font-semibold">Ivan Jerad Manamperi</p>
                <p className="text-gray-600 text-sm">CS @ UOW & IIT Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
