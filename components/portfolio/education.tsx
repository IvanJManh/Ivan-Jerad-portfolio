'use client';

import { useEffect } from 'react';

export function Education() {
  useEffect(() => {
    const eduCards = document.querySelectorAll('.education-bento-card, .achievements-bento-card');

    eduCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e as MouseEvent).clientX - rect.left;
        const y = (e as MouseEvent).clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }, []);

  return (
    <section className="academic-milestones-container">
      
      <div className="education-bento-card">
        <div className="card-glow-effect"></div>
        <span className="academic-tag">// ACADEMIC ENGINE</span>
        <h3>B.Sc (Hons) in Computer Science</h3>
        <p className="institution">University of Westminster (UK) <span className="gray-dash">|</span> Informatics Institute of Technology</p>
        <span className="edu-timeline">2023 — Present</span>

        <p className="edu-description">
          Deepening expertise in core systems engineering, algorithmic logic, and interface frameworks. Bridging theoretical computer science with end-to-end product implementation.
        </p>

        <div className="modules-matrix">
          <div className="matrix-item">
            <span className="module-code">L5</span>
            <span className="module-name">Human Computer Interaction & UX</span>
          </div>
          <div className="matrix-item">
            <span className="module-code">L5</span>
            <span className="module-name">Client-Server Architectures</span>
          </div>
          <div className="matrix-item">
            <span className="module-code">L5</span>
            <span className="module-name">Object Oriented Programming</span>
          </div>
          <div className="matrix-item">
            <span className="module-code">L5</span>
            <span className="module-name">Database Systems</span>
          </div>
          <div className="matrix-item">
            <span className="module-code">L4</span>
            <span className="module-name">Advanced Client Side Development</span>
          </div>
          <div className="matrix-item">
            <span className="module-code">L4</span>
            <span className="module-name">Software Development Group Project</span>
          </div>
        </div>
      </div>

      <div className="achievements-bento-card">
        <div className="card-glow-effect"></div>
        <span className="academic-tag">// VERIFIED MILESTONES</span>
        <h3>Certifications & Impact</h3>
        
        <div className="milestone-timeline-track">
          
          <div className="timeline-step">
            <div className="step-indicator"></div>
            <div className="step-content">
              <span className="step-date">2023</span>
              <h4>Foundation Certificate in CS</h4>
              <p className="step-meta">Informatics Institute of Technology (Galle)</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-indicator"></div>
            <div className="step-content">
              <span className="step-date">2022</span>
              <h4>G.C.E. O/L Academic Honors</h4>
              <p className="step-meta">Mahinda College, Galle • Achieved 8A Passes</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-indicator"></div>
            <div className="step-content">
              <span className="step-date">ACTIVE</span>
              <h4>Synergy & Leadership</h4>
              <p className="step-meta">Active coordinator for event scheduling, sports logistics, and community volunteer frameworks.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
