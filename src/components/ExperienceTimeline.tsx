import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Technology Company — USA',
    period: '2024 – Present',
    points: ['Developed backend services using Java/Python.', 'Optimized DB queries by 30%.', 'Built RESTful APIs.'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Tech Company — USA',
    period: '2023 – 2024',
    points: ['Built frontend features in React.js.', 'Debugged production issues.', 'Participated in code reviews.'],
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <motion.h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Experience</motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div key={exp.role} className="system-card p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-mono">{exp.company}</p>
                </div>
                <span className="text-accent font-mono mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground flex items-start gap-3 text-sm md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
