import Image from 'next/image';
import { portfolioContent } from '@/lib/portfolio-content';

export function About() {
  const { title, content } = portfolioContent.about;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000]">
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

          <div className="order-1 md:order-2 flex justify-center">
            <div className="profile-visual-wrapper">
              <div className="glow-ring-back"></div>
              <Image
                src="/images/ivan-profile.png"
                alt="Ivan Jerad Manamperi"
                width={300}
                height={420}
                className="profile-portrait"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
