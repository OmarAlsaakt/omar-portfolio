import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  const experiences = [
    {
      ...t.baraka,
      icon: '🚀',
      current: true,
    },
    {
      ...t.dotnet,
      icon: '💼',
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle mx-auto">{t.subtitle}</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-900 
                         ${language === 'ar' ? 'right-4 md:right-1/2' : 'left-4 md:left-1/2'}`}
            ></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${
                    language === 'ar'
                      ? index % 2 === 0
                        ? 'md:pr-1/2 pr-12'
                        : 'md:pl-1/2 md:pr-0 pr-12'
                      : index % 2 === 0
                      ? 'md:pr-1/2 pl-12'
                      : 'md:pl-1/2 md:pr-0 pl-12'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-6 w-8 h-8 bg-primary-600 rounded-full border-4 border-dark-950 
                               flex items-center justify-center z-10
                               ${language === 'ar' ? 'right-0 md:right-1/2 md:-mr-4' : 'left-0 md:left-1/2 md:-ml-4'}`}
                  >
                    <span className="text-sm">{exp.icon}</span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`card hover:scale-[1.02] transition-all duration-300 ${
                      language === 'ar'
                        ? index % 2 === 0
                          ? 'md:mr-8'
                          : 'md:ml-8'
                        : index % 2 === 0
                        ? 'md:ml-8'
                        : 'md:mr-8'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary-400 font-medium mb-1">
                          {exp.company}
                        </p>
                        <p className="text-dark-500 text-sm flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-dark-400 text-sm font-medium mb-2">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium border border-green-500/20">
                            {t.present}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-dark-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
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
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
