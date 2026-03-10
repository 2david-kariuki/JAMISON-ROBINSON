import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  'AWS Cloud Practitioner',
  'Software Engineering Professional Certificate',
  'Python Programming Certification',
];

const softSkills = [
  'Analytical & Problem-Solving',
  'Communication',
  'Team Collaboration',
  'Time Management',
  'Continuous Learning',
];

const Certifications = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="system-card p-6"
          >
            <h3 className="text-primary text-sm font-semibold tracking-wide uppercase mb-5 flex items-center gap-2">
              <Award size={18} />
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map(cert => (
                <li key={cert} className="text-foreground text-sm flex items-start gap-2">
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent inline-block" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="system-card p-6"
          >
            <h3 className="text-primary text-sm font-semibold tracking-wide uppercase mb-5">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md text-sm bg-secondary text-foreground border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
