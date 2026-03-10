import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-6"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-10"
        >
          Open to opportunities in software engineering, system design, and cloud architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="mailto:Jamison09Robinson@outlook.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Jamison09Robinson@outlook.com
          </a>
          <div className="inline-flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={18} />
            Ohio, USA
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
