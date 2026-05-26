import { portfolioContent } from '@/lib/portfolio-content';
import Image from 'next/image';

export function Projects() {
  const projects = portfolioContent.projects;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ffffff] mb-20 text-center">
          Projects
        </h2>

        <div className="bento-layout-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bento-card group clickable ${idx === 0 ? 'span-two-columns' : ''}`}
            >
              {/* Project image with desaturation effect */}
              <div className="relative h-48 bg-[rgba(40,167,69,0.05)] overflow-hidden mb-6 rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Project content */}
              <div className="card-inner-content">
                <div className="project-header-meta mb-4">
                  <span className="meta-tag text-[#28A745]">{project.category}</span>
                  <span className="date-tag text-[#8e8e9f]">2025</span>
                </div>
                <h3 className="text-2xl font-bold text-[#ffffff] mb-4 group-hover:text-[#28A745] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#8e8e9f] leading-relaxed text-base mb-6">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3 flex-wrap">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#6366F1] text-white font-medium rounded-full hover:bg-[#818cf8] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(99,102,241,0.5)] hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#6366F1]/40 text-[#a78bfa] font-medium rounded-full hover:border-[#6366F1]/80 hover:bg-[rgba(99,102,241,0.1)] transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
