import Image from 'next/image';
import { portfolioContent } from '@/lib/portfolio-content';

export function About() {
  const { title, content } = portfolioContent.about;

  return (
    <section id="about" className="bg-[#000000] py-24 px-4 sm:px-6 lg:px-8">
      <div className="about-grid-container">
        {/* Left Narrative Section */}
        <div className="about-manifesto-box">
          <span className="section-tag">// {title.toUpperCase()}</span>
          <h2>Engineering with human intent. Validating with technical rigor.</h2>
          <p className="manifesto-lead">
            I am a Computer Science undergraduate at the University of Westminster, operating at the intersection of application architecture, behavioral design, and system quality.
          </p>
          <p className="manifesto-body">
            {content}
          </p>
        </div>

        {/* Right Stats Stack with Profile Image */}
        <div className="about-section-right">
          <div className="about-stats-stack">
            <div className="about-bento-card">
              <div className="card-icon">⚡</div>
              <div className="card-info">
                <h4>Academic Foundation</h4>
                <p>B.Sc (Hons) Computer Science Student at IIT / University of Westminster (2023 - 2028).</p>
              </div>
            </div>

            <div className="about-bento-card">
              <div className="card-icon">🛡️</div>
              <div className="card-info">
                <h4>Product Philosophy</h4>
                <p>Prioritizing strict UI validation, accessible layouts, and reliable client-server architecture.</p>
              </div>
            </div>

            <div className="about-bento-card">
              <div className="card-icon">⛓️</div>
              <div className="card-info">
                <h4>Synergy & Leadership</h4>
                <p>Experienced in team coordination, event scheduling, and managing agile delivery boards.</p>
              </div>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="profile-visual-container">
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
