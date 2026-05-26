import { portfolioContent } from '@/lib/portfolio-content';

export function Skills() {
  const { groups, frontendStack, tools, softSkills } = portfolioContent.skillsAndTech;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-20 text-center">
          Skills & Technologies
        </h2>

        {/* Asymmetrical bento grid for skill groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className={`premium-card p-8 ${idx === 0 ? 'md:col-span-2' : ''} ${idx === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="section-number mb-4">
                SKILL {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-4 py-2 bg-[#F3F1ED] text-[#1A1A1A] rounded-full text-sm font-medium hover:bg-[#1E40AF] hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick reference bento sections */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="premium-card p-8 md:col-span-1">
            <div className="section-number mb-4">TECH</div>
            <h4 className="text-lg font-bold text-[#1A1A1A] mb-6">
              Frontend Stack
            </h4>
            <div className="space-y-3">
              {frontendStack.map((tech, idx) => (
                <div key={idx} className="text-[#6B7280] flex items-start gap-3">
                  <span className="text-[#1E40AF] font-bold mt-0.5">•</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-8 md:col-span-1">
            <div className="section-number mb-4">TOOLS</div>
            <h4 className="text-lg font-bold text-[#1A1A1A] mb-6">
              Development Tools
            </h4>
            <div className="space-y-3">
              {tools.map((tool, idx) => (
                <div key={idx} className="text-[#6B7280] flex items-start gap-3">
                  <span className="text-[#1E40AF] font-bold mt-0.5">•</span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-8 md:col-span-1">
            <div className="section-number mb-4">SOFT</div>
            <h4 className="text-lg font-bold text-[#1A1A1A] mb-6">
              Core Competencies
            </h4>
            <div className="space-y-3">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="text-[#6B7280] flex items-start gap-3">
                  <span className="text-[#1E40AF] font-bold mt-0.5">•</span>
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
