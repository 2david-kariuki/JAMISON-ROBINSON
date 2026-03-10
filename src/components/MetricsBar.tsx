import { motion } from 'framer-motion';
import { TrendingUp, GraduationCap, Layers } from 'lucide-react';

const metrics = [
  { icon: TrendingUp, label: '30% DB Optimization', color: 'text-accent' },
  { icon: GraduationCap, label: 'M.S. Software Engineering', color: 'text-primary' },
  { icon: Layers, label: 'Full-Stack Proficiency', color: 'text-accent' },
];

const MetricsBar = () => {
  return (
    <section className="py-8 border-y border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <metric.icon size={20} className={metric.color} />
              <span className="text-foreground text-sm font-medium">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
