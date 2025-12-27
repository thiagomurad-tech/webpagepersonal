import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Users, Globe, Lightbulb } from 'lucide-react';

const services = [
  {
    titleKey: 'services.consulting.title',
    descKey: 'services.consulting.desc',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    titleKey: 'services.agile.title',
    descKey: 'services.agile.desc',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    titleKey: 'services.web.title',
    descKey: 'services.web.desc',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
  },
  {
    titleKey: 'services.mentoring.title',
    descKey: 'services.mentoring.desc',
    icon: Lightbulb,
    color: 'from-orange-500 to-yellow-500',
  },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className="group glass-card rounded-2xl p-6 hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
