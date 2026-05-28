'use client';

import { useEffect } from 'react';
import { portfolioContent } from '@/lib/portfolio-content';

export function Skills() {
  const { groups } = portfolioContent.skillsAndTech;

  useEffect(() => {
    const bentoCards = document.querySelectorAll('.bento-skill-card');

    bentoCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e as MouseEvent).clientX - rect.left;
        const y = (e as MouseEvent).clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }, []);

  const skillData = [
    {
      id: 1,
      meta: '01 / INTERFACE ENGINE',
      title: 'Frontend & Interaction Design',
      description: 'Building high-performance, dynamic user interfaces with fluid animations and responsive, mobile-first component logic.',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript (ES6+)', 'HTML5 & CSS3'],
      span: true
    },
    {
      id: 2,
      meta: '02 / CORE RUNTIME',
      title: 'Backend & Logic',
      description: 'Architecting client-server interactions, data systems, and structured algorithms.',
      skills: ['Java', 'Python', 'REST APIs', 'Node.js', 'OOP']
    },
    {
      id: 3,
      meta: '03 / PRODUCT BLUEPRINT',
      title: 'Discovery & UI/UX',
      description: 'Mapping stakeholder logic, prototyping complex design systems, and analyzing target metrics.',
      skills: ['Figma', 'HCI Concepts', 'Wireframing', 'Design Thinking']
    },
    {
      id: 4,
      meta: '04 / ECOSYSTEM INTEGRITY',
      title: 'Validation & Delivery Workflows',
      description: 'Safeguarding applications through secure form validations, usability testing, cross-device responsiveness verification, and agile cycle management.',
      skills: ['Firebase', 'Database Design', 'Git / GitHub', 'Incremental SDLC', 'ClickUp', 'UI Verification'],
      span: true
    }
  ];

  return (
    <section className="skills-bento-container bg-[#000000]">
      <div className="skills-header">
        <span className="section-tag">// PRODUCT LIFECYCLE CAPABILITIES</span>
        <h2>The Tech Stack & Toolkit</h2>
      </div>

      <div className="bento-grid-layout">
        {skillData.map((skill) => (
          <div 
            key={skill.id} 
            className={`bento-skill-card ${skill.span ? 'span-2' : ''}`}
          >
            <div className="card-glow-effect"></div>
            <div className="card-meta">{skill.meta}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="tech-pill-container">
              {skill.skills.map((tech, idx) => (
                <span key={idx} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
