import { motion } from 'framer-motion';

const groups = [
  { title: 'Core Languages', items: ['Python', 'Java', 'TypeScript', 'C++', 'SQL'] },
  { title: 'Frameworks', items: ['React.js', 'Node.js', 'Spring Boot', 'GraphQL'] },
  { title: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux'] },
];

const TechToolkit = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <motion.h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Technical Toolkit</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, i) => (
            <motion.div key={group.title} className="system-card p-8">
              <h3 className="text-primary font-mono uppercase tracking-widest mb-6 border-b border-primary/20 pb-2">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="px-4 py-2 glass rounded-lg text-sm font-medium border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechToolkit;
