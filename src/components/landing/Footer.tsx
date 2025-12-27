import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-left text-sm text-background/70">
          © {currentYear} Thiago Murad. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
