import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skillCategories = [
    { key: 'languages', icon: '📝', data: skillsData.languages },
    { key: 'backend', icon: '⚙️', data: skillsData.backend },
    { key: 'frontend', icon: '🎨', data: skillsData.frontend },
    { key: 'databases', icon: '🗄️', data: skillsData.databases },
    { key: 'ai', icon: '🤖', data: skillsData.ai },
    { key: 'tools', icon: '🛠️', data: skillsData.tools },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle mx-auto">{t.subtitle}</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.key}
                className="card group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {t.categories[category.key]}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.data.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-badge"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
