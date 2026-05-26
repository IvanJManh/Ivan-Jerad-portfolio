import { portfolioContent } from '@/lib/portfolio-content';

export function Projects() {
  const projects = portfolioContent.projects;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              {/* Project header with gradient background */}
              <div className={`h-32 bg-gradient-to-br ${[
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600',
                'from-purple-500 to-purple-600',
                'from-orange-500 to-orange-600'
              ][idx % 4]} opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white text-center px-4">
                  {project.title}
                </h3>
              </div>

              {/* Project content */}
              <div className="p-8">
                <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                  {project.category}
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* View project link */}
                <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
