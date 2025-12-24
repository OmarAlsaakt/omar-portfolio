import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary-400 text-lg md:text-xl mb-4 animate-fade-in">
            {t.greeting}
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
            {t.name}
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-dark-300 mb-2 animate-slide-up delay-100">
            {t.title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl gradient-text font-semibold mb-6 animate-slide-up delay-200">
            {t.subtitle}
          </p>

          {/* Description */}
          <p className="text-dark-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in delay-300">
            {t.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-400">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary w-full sm:w-auto"
            >
              {t.cta1}
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary w-full sm:w-auto"
            >
              {t.cta2}
            </button>
          </div>

          {/* Location */}
          <div className="mt-12 flex items-center justify-center gap-2 text-dark-400 animate-fade-in delay-400">
            <svg
              className="w-5 h-5"
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
            <span>{t.location}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
