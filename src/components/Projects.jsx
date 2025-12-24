import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle mx-auto">{t.subtitle}</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => {
              const projectContent = t[project.id];
              
              return (
                <div
                  key={project.id}
                  className="card group hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {projectContent.name}
                      </h3>
                      <p className="text-primary-400 text-sm font-medium mb-2">
                        {projectContent.role}
                      </p>
                      {project.status && (
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'In Development' 
                            ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                            : 'bg-green-500/10 text-green-400 border border-green-500/20'
                        }`}>
                          {project.status === 'In Development' 
                            ? (language === 'en' ? 'In Development' : 'قيد التطوير')
                            : (language === 'en' ? 'Completed' : 'مكتمل')
                          }
                        </span>
                      )}
                    </div>
                    <div className="p-3 bg-primary-600/10 rounded-lg">
                      <svg
                        className="w-6 h-6 text-primary-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-dark-300 mb-6 leading-relaxed">
                    {projectContent.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wide mb-3">
                      {language === 'en' ? 'Key Highlights' : 'النقاط الرئيسية'}
                    </h4>
                    <ul className="space-y-2">
                      {projectContent.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-dark-400 text-sm">
                          <svg
                            className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="flex-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wide mb-3">
                      {language === 'en' ? 'Tech Stack' : 'التقنيات المستخدمة'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark-800 text-dark-300 rounded-md text-xs font-medium
                                   border border-dark-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-dark-800">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-dark-800 text-dark-200 rounded-lg text-sm font-medium
                                 border border-dark-700 hover:border-primary-600/50 hover:text-primary-400
                                 transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        {t.viewCode}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium
                                 hover:bg-primary-700 transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {t.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
