export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="about-grid-container">
        <div className="about-manifesto-box">
          <span className="section-tag">// BIOGRAPHY</span>
          <h2>Engineering with human intent. Validating with technical rigor.</h2>
          <p className="manifesto-lead">
            I am a Computer Science undergraduate at the University of Westminster, operating at the intersection of application architecture, behavioral design, and system quality.
          </p>
          <p className="manifesto-body">
            I don&apos;t separate software development into isolated phases. My execution model treats product design, backend logic, and quality verification as a single, unified discipline. Whether mapping user journeys in Figma, structuring database dependencies, or running validation tests, my focus is delivering production-ready digital solutions.
          </p>
        </div>

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
      </div>
    </section>
  );
}
