import { motion } from 'framer-motion';
import { Terminal, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-card/30 border-t border-border mt-24">
      <div className="container mx-auto px-6 max-w-[1400px] py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="text-primary w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-tighter font-bold">
                JR_Architect // 2026
              </span>
            </div>
            <p className="text-muted-foreground text-xs font-mono text-center md:text-left">
              OHIO, USA | BUILT WITH REACT & TAILWIND
            </p>
          </div>

          <button 
            onClick={scrollToTop} 
            className="group flex flex-col items-center gap-2 text-[10px] font-mono text-primary hover:text-white transition-colors"
          >
            <div className="p-3 rounded-full border border-primary/20 group-hover:border-primary transition-colors">
               <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </div>
            RETURN_TO_TOP
          </button>
          
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
           <p className="text-[10px] text-muted-foreground/50 font-mono uppercase tracking-[0.2em]">
             Authentication: Jamison Robinson // Secured Terminal Access
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
