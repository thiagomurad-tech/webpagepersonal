import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { key: 'about.values.collaboration', icon: '🤝' },
    { key: 'about.values.autonomy', icon: '🚀' },
    { key: 'about.values.customer', icon: '🎯' },
    { key: 'about.values.results', icon: '📈' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-display font-semibold text-foreground flex items-center gap-3">
              <Heart className="text-accent" />
              {t('about.story.title')}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <p>{t('about.story.p3')}</p>
            </div>
          </div>

          {/* Education, Certifications & Values */}
          <div className="space-y-8">
            {/* Education */}
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <h3 className="text-xl font-display font-semibold text-foreground flex items-center gap-3 mb-4">
                <GraduationCap className="text-accent" />
                {t('about.education.title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {t('about.education.degree')}
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {t('about.education.mba')}
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <h3 className="text-xl font-display font-semibold text-foreground flex items-center gap-3 mb-4">
                <Award className="text-accent" />
                {t('about.certifications.title')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'PMP',
                  'Scrum Master',
                  'DevSecOps',
                  'Kanban Management Professional',
                  'Management 3.0',
                  'Cobit',
                  'ISO 20.000',
                  'ISO 27.002',
                  'ITIL v3',
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg font-medium text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {t('about.values.title')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div
                    key={value.key}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="text-xl">{value.icon}</span>
                    <span className="text-sm">{t(value.key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
