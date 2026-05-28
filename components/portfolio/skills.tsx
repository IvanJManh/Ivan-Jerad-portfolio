import { portfolioContent } from '@/lib/portfolio-content';

export function Skills() {
  const { groups, frontendStack, tools, softSkills } = portfolioContent.skillsAndTech;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#f3f4f6] mb-20 text-center">
          Skills & Technologies
        </h2>

        {/* Asymmetrical bento grid for skill groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className={`bento-card ${idx === 0 ? 'md:col-span-2' : ''} ${idx === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="section-number mb-4">
                SKILL {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-bold text-[#f3f4f6] mb-6">
                {group.title}
              </h3>
              <div className="tag-cloud">
                {group.skills.map((skill, sidx) => (
                  <span key={sidx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick reference bento sections */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bento-card">
            <div className="section-number mb-4">TECH</div>
            <h4 className="text-lg font-bold text-[#f3f4f6] mb-6">
              Frontend Stack
            </h4>
            <div className="space-y-3">
              {frontendStack.map((tech, idx) => (
                <div key={idx} className="text-[#8e8e9f] flex items-start gap-3">
                  <span className="text-[#6366F1] font-bold mt-0.5">•</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card">
            <div className="section-number mb-4">TOOLS</div>
            <h4 className="text-lg font-bold text-[#f3f4f6] mb-6">
              Development Tools
            </h4>
            <div className="space-y-3">
              {tools.map((tool, idx) => (
                <div key={idx} className="text-[#8e8e9f] flex items-start gap-3">
                  <span className="text-[#6366F1] font-bold mt-0.5">•</span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card">
            <div className="section-number mb-4">SOFT</div>
            <h4 className="text-lg font-bold text-[#f3f4f6] mb-6">
              Core Competencies
            </h4>
            <div className="space-y-3">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="text-[#8e8e9f] flex items-start gap-3">
                  <span className="text-[#6366F1] font-bold mt-0.5">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
