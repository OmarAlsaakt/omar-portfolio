import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const highlights = [
    { title: t.highlight1, icon: '💻' },
    { title: t.highlight2, icon: '🎯' },
    { title: t.highlight3, icon: '🏗️' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle mx-auto">{t.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-dark-300 leading-relaxed">{t.p1}</p>
                <p className="text-dark-300 leading-relaxed">{t.p2}</p>
                <p className="text-dark-300 leading-relaxed">{t.p3}</p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-dark-800 rounded-lg border border-dark-700
                             hover:border-primary-600/50 transition-all duration-300"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-dark-200 font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Education & Languages */}
            <div className="space-y-6">
              {/* Education Card */}
              <div className="card">
                <div className="flex items-start gap-4">
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
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{t.education}</h3>
                    <p className="text-primary-400 font-medium mb-2">{t.degree}</p>
                    <p className="text-dark-400 text-sm">{t.university}</p>
                    <p className="text-dark-500 text-sm mt-1">{t.graduated}</p>
                  </div>
                </div>
              </div>

              {/* Languages Card */}
              <div className="card">
                <div className="flex items-start gap-4">
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
                      <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-4">{t.languages}</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-dark-300 font-medium">{t.arabic}</span>
                          <span className="text-dark-500 text-sm">{t.arabicLevel}</span>
                        </div>
                        <div className="w-full bg-dark-700 rounded-full h-2">
                          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-dark-300 font-medium">{t.english}</span>
                          <span className="text-dark-500 text-sm">{t.englishLevel}</span>
                        </div>
                        <div className="w-full bg-dark-700 rounded-full h-2">
                          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Badge */}
              <div className="card bg-gradient-to-br from-primary-600/10 to-primary-800/10 border-primary-600/20">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-primary-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold">
                      {language === 'en' ? '5+ Certifications' : '5+ شهادات احترافية'}
                    </p>
                    <p className="text-dark-400 text-sm">
                      {language === 'en' ? 'IBM, Board Infinity' : 'من IBM و Board Infinity'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
