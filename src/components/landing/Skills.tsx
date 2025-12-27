import { useLanguage } from '@/contexts/LanguageContext';

interface SkillCategory {
  titleKey: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    titleKey: 'skills.management',
    skills: ['PMP', 'Scrum Master', 'Kanban', 'Lean', 'Design Thinking'],
    color: 'bg-blue-500',
  },
  {
    titleKey: 'skills.backend',
    skills: ['PHP', 'Java', 'Node.js', 'MySQL', 'SQL Server'],
    color: 'bg-green-500',
  },
  {
    titleKey: 'skills.frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    color: 'bg-purple-500',
  },
  {
    titleKey: 'skills.methodologies',
    skills: ['Waterfall', 'Scrum', 'Híbrido', 'Ágil', 'SAFe'],
    color: 'bg-orange-500',
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.titleKey}
              className="glass-card rounded-2xl p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {t(category.titleKey)}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
