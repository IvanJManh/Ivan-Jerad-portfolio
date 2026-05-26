import { portfolioContent } from '@/lib/portfolio-content';

export function Skills() {
  const { groups, frontendStack, tools, softSkills } = portfolioContent.skillsAndTech;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center">
          Skills & Technologies
        </h2>

        {/* Functional skill groups */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className={`w-1 h-6 rounded ${[
                  'bg-blue-600',
                  'bg-green-600',
                  'bg-purple-600',
                  'bg-orange-600',
                  'bg-pink-600'
                ][idx % 5]}`}></span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick reference sections */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-lg">💻</span> Frontend
            </h4>
            <div className="space-y-2">
              {frontendStack.map((tech, idx) => (
                <div key={idx} className="text-gray-700">• {tech}</div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-lg">🛠️</span> Tools
            </h4>
            <div className="space-y-2">
              {tools.map((tool, idx) => (
                <div key={idx} className="text-gray-700">• {tool}</div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-lg">🤝</span> Soft Skills
            </h4>
            <div className="space-y-2">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="text-gray-700">• {skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
