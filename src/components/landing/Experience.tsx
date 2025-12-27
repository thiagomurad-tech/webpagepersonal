import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  period: string;
  duration: string;
  titleKey: string;
  descKey: string;
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Mercado Livre',
    period: '2021 - Atual',
    duration: '4+ anos',
    titleKey: 'experience.ml.title',
    descKey: 'experience.ml.desc',
    color: 'bg-yellow-500',
  },
  {
    company: 'Porto Seguro',
    period: '2021',
    duration: '7 meses',
    titleKey: 'experience.porto.title',
    descKey: 'experience.porto.desc',
    color: 'bg-blue-500',
  },
  {
    company: 'Rede',
    period: '2013 - 2021',
    duration: '7+ anos',
    titleKey: 'experience.rede.title',
    descKey: 'experience.rede.desc',
    color: 'bg-red-500',
  },
  {
    company: 'Atento',
    period: '2009 - 2013',
    duration: '4 anos',
    titleKey: 'experience.atento.title',
    descKey: 'experience.atento.desc',
    color: 'bg-green-500',
  },
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 -translate-x-1/2 top-6" />

                {/* Content */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 hover-lift">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className={`w-3 h-3 rounded-full ${exp.color}`} />
                      <span className="font-display font-bold text-lg text-foreground">
                        {exp.company}
                      </span>
                    </div>

                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>

                    <h3 className="font-semibold text-foreground mb-2">{t(exp.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(exp.descKey)}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
