import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Science (M.S.) in Software Engineering",
    school: "University — Ohio, USA",
    year: "2025",
    focusAreas: ["Advanced Software Architecture", "Distributed Systems", "Cloud Computing"],
    project: "Design and Implementation of a Scalable Cloud-Based Application"
  },
  {
    degree: "Bachelor of Science (B.S.) in Computer Science",
    school: "University — USA",
    year: "2023",
    focusAreas: ["Data Structures & Algorithms", "Operating Systems", "Database Systems"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <motion.h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Education</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div key={edu.degree} className="system-card p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <GraduationCap size={32} className="text-primary" />
                  <span className="text-accent font-mono text-sm">{edu.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground mb-6">{edu.school}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.focusAreas.map(area => (
                    <span key={area} className="px-3 py-1 bg-secondary text-xs rounded-md border border-border">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
