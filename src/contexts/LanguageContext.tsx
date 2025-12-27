import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.services': 'Serviços',
    'nav.skills': 'Competências',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Especialista em Gestão de TI & Projetos',
    'hero.subtitle': '12+ anos transformando desafios tecnológicos em resultados sustentáveis para empresas de grande porte',
    'hero.cta.consult': 'Agende uma Consultoria',
    'hero.cta.whatsapp': 'Fale no WhatsApp',
    'hero.companies': 'Empresas onde atuei',
    
    // About
    'about.title': 'Sobre Mim',
    'about.story.title': 'Minha História',
    'about.story.p1': 'Desde muito cedo na minha vida sou apaixonado por tecnologia. Tive a oportunidade de ganhar um computador com 8 anos de idade, "o famoso 486", na qual sabia apenas digitar alguns comandos em DOS para acessar um jogo popular na época.',
    'about.story.p2': 'Vivi e acompanhei boa parte da evolução dos sistemas operacionais, hardwares e afins, e cada vez mais fui me apaixonando por essa área e pelas novidades constantes que a mesma proporcionava.',
    'about.story.p3': 'Fiz diversos estudos, cursos e me considero privilegiado, pois antes mesmo de cursar a graduação já tinha convicção da profissão que gostaria de seguir - TI (Sistemas de Informação). Cursei posteriormente universidade, MBA, fiz cursos preparatórios e importantes certificações para escrever a minha carreira profissional até aqui. E tem muito mais por vir!',
    'about.education.title': 'Formação',
    'about.education.degree': 'Sistemas de Informação',
    'about.education.mba': 'MBA em Gestão de Projetos',
    'about.certifications.title': 'Certificações',
    'about.values.title': 'Valores',
    'about.values.collaboration': 'Colaboração',
    'about.values.autonomy': 'Autonomia',
    'about.values.customer': 'Foco no Cliente',
    'about.values.results': 'Resultados Sustentáveis',
    
    // Experience
    'experience.title': 'Experiência Profissional',
    'experience.years': 'anos',
    'experience.present': 'Atual',
    'experience.ml.title': 'Software Engineer Project Lead | Coordinator IT',
    'experience.ml.desc': 'Liderança de Squad/Equipe, projetos LATAM, disseminador ágil, garantia do ciclo de vida das aplicações (Build & Run), propostas de melhorias para sistemas críticos em Pagamentos/Fintech.',
    'experience.porto.title': 'Team Leader - Projetos IT',
    'experience.porto.desc': 'Liderança da Squad, entendimento do escopo de negócio e técnico, disseminador da cultura ágil e melhores práticas.',
    'experience.rede.title': 'Team Leader → Analista Sr (Projetos)',
    'experience.rede.desc': 'Liderança da Squad, ritos ágeis, avaliação do negócio em parceria com PO, replicação da cultura ágil para empresa.',
    'experience.atento.title': 'Analista Projetos → IT Support',
    'experience.atento.desc': 'Gerência de projetos, controle de prazos, custos, qualidade. Gestão de equipes multidisciplinares.',
    
    // Services
    'services.title': 'Serviços',
    'services.subtitle': 'Como posso ajudar você e sua empresa',
    'services.consulting.title': 'Consultoria em Gestão de Projetos de TI',
    'services.consulting.desc': 'Planejamento estratégico, arquitetura de soluções e acompanhamento de projetos do início ao fim.',
    'services.agile.title': 'Liderança de Squads e Times Ágeis',
    'services.agile.desc': 'Implementação de cultura ágil, ritos, métricas e desenvolvimento de times de alta performance.',
    'services.web.title': 'Criação de Websites Profissionais',
    'services.web.desc': 'Sites institucionais, landing pages e portfólios com design moderno e responsivo.',
    'services.mentoring.title': 'Mentoria e Transformação Digital',
    'services.mentoring.desc': 'Lean, Design Thinking, Jornada do Cliente e indicadores de performance.',
    
    // Skills
    'skills.title': 'Competências & Tecnologias',
    'skills.management': 'Gestão',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.methodologies': 'Metodologias',
    
    // Contact
    'contact.title': 'Vamos Conversar?',
    'contact.subtitle': 'Entre em contato para discutir seu próximo projeto',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.form.error': 'Erro ao enviar. Tente novamente.',
    'contact.or': 'Ou fale diretamente',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'E-mail',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.made': 'Feito com',
    
    // WhatsApp
    'whatsapp.message': 'Olá Thiago! Gostaria de conversar sobre um projeto.',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'IT & Project Management Specialist',
    'hero.subtitle': '12+ years transforming technological challenges into sustainable results for large enterprises',
    'hero.cta.consult': 'Schedule a Consultation',
    'hero.cta.whatsapp': 'Chat on WhatsApp',
    'hero.companies': 'Companies I\'ve worked with',
    
    // About
    'about.title': 'About Me',
    'about.story.title': 'My Story',
    'about.story.p1': 'From a very early age, I\'ve been passionate about technology. I had the opportunity to receive a computer at 8 years old, "the famous 486", on which I only knew how to type some DOS commands to access a popular game at the time.',
    'about.story.p2': 'I lived and followed most of the evolution of operating systems, hardware and related technologies, and increasingly fell in love with this area and the constant innovations it provided.',
    'about.story.p3': 'I took various courses and consider myself privileged, because even before attending university I was already convinced of the profession I wanted to follow - IT (Information Systems). I later completed university, an MBA, preparatory courses and important certifications to write my professional career up to this point. And there\'s much more to come!',
    'about.education.title': 'Education',
    'about.education.degree': 'Information Systems',
    'about.education.mba': 'MBA in Project Management',
    'about.certifications.title': 'Certifications',
    'about.values.title': 'Values',
    'about.values.collaboration': 'Collaboration',
    'about.values.autonomy': 'Autonomy',
    'about.values.customer': 'Customer Focus',
    'about.values.results': 'Sustainable Results',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.years': 'years',
    'experience.present': 'Present',
    'experience.ml.title': 'Software Engineer Project Lead | IT Coordinator',
    'experience.ml.desc': 'Squad/Team Leadership, LATAM projects, agile disseminator, application lifecycle management (Build & Run), improvement proposals for critical Payment/Fintech systems.',
    'experience.porto.title': 'Team Leader - IT Projects',
    'experience.porto.desc': 'Squad Leadership, business and technical scope understanding, agile culture disseminator and best practices.',
    'experience.rede.title': 'Team Leader → Sr Analyst (Projects)',
    'experience.rede.desc': 'Squad Leadership, agile rituals, business evaluation in partnership with PO, replicating agile culture across the company.',
    'experience.atento.title': 'Project Analyst → IT Support',
    'experience.atento.desc': 'Project management, deadline control, costs, quality. Management of multidisciplinary teams.',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'How I can help you and your company',
    'services.consulting.title': 'IT Project Management Consulting',
    'services.consulting.desc': 'Strategic planning, solution architecture and project monitoring from start to finish.',
    'services.agile.title': 'Agile Squad and Team Leadership',
    'services.agile.desc': 'Implementation of agile culture, rituals, metrics and development of high-performance teams.',
    'services.web.title': 'Professional Website Development',
    'services.web.desc': 'Institutional websites, landing pages and portfolios with modern and responsive design.',
    'services.mentoring.title': 'Mentoring and Digital Transformation',
    'services.mentoring.desc': 'Lean, Design Thinking, Customer Journey and performance indicators.',
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.management': 'Management',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.methodologies': 'Methodologies',
    
    // Contact
    'contact.title': 'Let\'s Talk?',
    'contact.subtitle': 'Get in touch to discuss your next project',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending. Please try again.',
    'contact.or': 'Or contact directly',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with',
    
    // WhatsApp
    'whatsapp.message': 'Hello Thiago! I would like to discuss a project.',
  },
  es: {
    // Header
    'nav.about': 'Sobre',
    'nav.experience': 'Experiencia',
    'nav.services': 'Servicios',
    'nav.skills': 'Competencias',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Especialista en Gestión de TI y Proyectos',
    'hero.subtitle': '12+ años transformando desafíos tecnológicos en resultados sostenibles para grandes empresas',
    'hero.cta.consult': 'Agendar Consultoría',
    'hero.cta.whatsapp': 'Hablar por WhatsApp',
    'hero.companies': 'Empresas donde trabajé',
    
    // About
    'about.title': 'Sobre Mí',
    'about.story.title': 'Mi Historia',
    'about.story.p1': 'Desde muy temprano en mi vida soy apasionado por la tecnología. Tuve la oportunidad de ganar una computadora con 8 años de edad, "el famoso 486", en la cual solo sabía escribir algunos comandos en DOS para acceder a un juego popular en la época.',
    'about.story.p2': 'Viví y acompañé buena parte de la evolución de los sistemas operativos, hardwares y afines, y cada vez más me fui apasionando por esta área y por las novedades constantes que la misma proporcionaba.',
    'about.story.p3': 'Hice diversos estudios, cursos y me considero privilegiado, pues antes incluso de cursar la graduación ya tenía convicción de la profesión que me gustaría seguir - TI (Sistemas de Información). Cursé posteriormente universidad, MBA, hice cursos preparatorios e importantes certificaciones para escribir mi carrera profesional hasta aquí. ¡Y hay mucho más por venir!',
    'about.education.title': 'Formación',
    'about.education.degree': 'Sistemas de Información',
    'about.education.mba': 'MBA en Gestión de Proyectos',
    'about.certifications.title': 'Certificaciones',
    'about.values.title': 'Valores',
    'about.values.collaboration': 'Colaboración',
    'about.values.autonomy': 'Autonomía',
    'about.values.customer': 'Enfoque en el Cliente',
    'about.values.results': 'Resultados Sostenibles',
    
    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.years': 'años',
    'experience.present': 'Actual',
    'experience.ml.title': 'Software Engineer Project Lead | Coordinador IT',
    'experience.ml.desc': 'Liderazgo de Squad/Equipo, proyectos LATAM, diseminador ágil, garantía del ciclo de vida de las aplicaciones (Build & Run), propuestas de mejoras para sistemas críticos en Pagos/Fintech.',
    'experience.porto.title': 'Team Leader - Proyectos IT',
    'experience.porto.desc': 'Liderazgo de Squad, entendimiento del alcance de negocio y técnico, diseminador de cultura ágil y mejores prácticas.',
    'experience.rede.title': 'Team Leader → Analista Sr (Proyectos)',
    'experience.rede.desc': 'Liderazgo de Squad, ritos ágiles, evaluación del negocio en sociedad con PO, replicación de la cultura ágil para la empresa.',
    'experience.atento.title': 'Analista Proyectos → IT Support',
    'experience.atento.desc': 'Gerencia de proyectos, control de plazos, costos, calidad. Gestión de equipos multidisciplinarios.',
    
    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Cómo puedo ayudarte a ti y a tu empresa',
    'services.consulting.title': 'Consultoría en Gestión de Proyectos de TI',
    'services.consulting.desc': 'Planificación estratégica, arquitectura de soluciones y seguimiento de proyectos de principio a fin.',
    'services.agile.title': 'Liderazgo de Squads y Equipos Ágiles',
    'services.agile.desc': 'Implementación de cultura ágil, ritos, métricas y desarrollo de equipos de alto rendimiento.',
    'services.web.title': 'Creación de Sitios Web Profesionales',
    'services.web.desc': 'Sitios institucionales, landing pages y portafolios con diseño moderno y responsivo.',
    'services.mentoring.title': 'Mentoría y Transformación Digital',
    'services.mentoring.desc': 'Lean, Design Thinking, Customer Journey e indicadores de performance.',
    
    // Skills
    'skills.title': 'Competencias y Tecnologías',
    'skills.management': 'Gestión',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.methodologies': 'Metodologías',
    
    // Contact
    'contact.title': '¿Hablamos?',
    'contact.subtitle': 'Contáctame para discutir tu próximo proyecto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado con éxito!',
    'contact.form.error': 'Error al enviar. Intente nuevamente.',
    'contact.or': 'O contacta directamente',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Correo',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.made': 'Hecho con',
    
    // WhatsApp
    'whatsapp.message': '¡Hola Thiago! Me gustaría hablar sobre un proyecto.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
