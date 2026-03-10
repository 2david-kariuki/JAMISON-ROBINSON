import { motion } from 'framer-motion';
import heroLaptop from '@/assets/hero-laptop.jpg';
import profilePic from '@/assets/profile.jpg';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroLaptop} className="w-full h-full object-cover opacity-20" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-6 border border-primary/20">
            SYSTEM_STATUS: OPERATIONAL
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none">
            JAMISON <br/>
            <span className="text-primary glow-violet">ROBINSON</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            M.S. Software Engineering. I architect high-performance backends 
            and scalable cloud systems with a focus on 30% optimization metrics.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative hidden lg:block"
        >
          <div className="glass aspect-square rounded-3xl overflow-hidden border border-white/10 glow-violet rotate-3">
             <img src={profilePic} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Workspace" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
