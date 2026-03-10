import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-card/30 border-t border-border mt-24">
      <div className="container mx-auto px-6 max-w-[1400px] py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="text-primary w-5 h-5" />
            <span className="font-mono text-sm uppercase tracking-tighter">JR_Architect // 2026</span>
          </div>
          <button onClick={scrollToTop} className="text-xs font-mono text-primary flex items-center gap-2">
            RETURN_TO_TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
