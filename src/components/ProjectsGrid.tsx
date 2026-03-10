import { motion } from 'framer-motion';
import { Cloud, MessageSquare, BarChart3 } from 'lucide-react';

const projects = [
  { icon: Cloud, title: 'Cloud Task Management', stack: ['React', 'Node.js', 'Docker'], impact: '99.9% Uptime' },
  { icon: MessageSquare, title: 'Distributed Chat', stack: ['WebSockets', 'Redis'], impact: '<100ms Latency' },
  { icon: BarChart3, title: 'ML Analysis Tool', stack: ['Python', 'Scikit-learn'], impact: 'Predictive Models' },
];

const ProjectsGrid = () => {
  return (
    <section id="systems" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Systems</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="system-card p-8 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <project.icon size={32} className="text-primary" />
                <span className="text-xs font-mono text-accent">{project.impact}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map(tech => (
                  <span key={tech} className="px-2 py-1 text-[10px] bg-secondary rounded uppercase">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
