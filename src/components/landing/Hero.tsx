import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';
import profileImage from '@/assets/thiago-murad-profile.jpg';

const companies = ['Mercado Livre', 'Porto Seguro', 'Rede', 'Atento'];

const Hero = () => {
  const { t } = useLanguage();
  const whatsappNumber = '5511981272618';
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>12+ anos de experiência</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight tracking-[-0.015em]">
              <span className="font-sans font-medium">Thiago</span>{' '}
              <span className="font-sans font-bold text-accent">Murad</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-primary-foreground/90">
              {t('hero.title')}
            </h2>

            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                asChild
              >
                <a href="#contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('hero.cta.consult')}
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                asChild
              >
                <a href="#contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('hero.cta.whatsapp')}
                </a>
              </Button>
            </div>

            {/* Companies */}
            <div className="pt-8">
              <p className="text-sm text-primary-foreground/50 mb-4">{t('hero.companies')}</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {companies.map((company) => (
                  <span
                    key={company}
                    className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground/80 rounded-lg text-sm font-medium"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in stagger-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-accent to-primary rounded-full" />
              
              {/* Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/20">
                <img
                  src={profileImage}
                  alt="Thiago Murad - Especialista em Gestão de TI e Projetos"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
