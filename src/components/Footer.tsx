import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card/30 border-t border-border mt-24">
      <div className="container mx-auto px-6 max-w-[1400px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="text-primary w-6 h-6" />
              <span className="font-mono font-bold text-xl tracking-tighter uppercase">
                JR_Architect
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              M.S. Software Engineering. Dedicated to building robust, 
              scalable systems with precision and performance at the core.
            </p>
          </div>

          {/* Placeholders for Future Links */}
          <div>
            <h4 className="text-foreground font-mono text-sm uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex gap-4">
              <div className="p-3 glass rounded-xl text-muted-foreground opacity-50 cursor-not-allowed" title="Link coming soon">
                <Github size={20} />
              </div>
              <div className="p-3 glass rounded-xl text-muted-foreground opacity-50 cursor-not-allowed" title="Link coming soon">
                <Linkedin size={20} />
              </div>
              <div className="p-3 glass rounded-xl text-muted-foreground opacity-50 cursor-not-allowed" title="Link coming soon">
                <Mail size={20} />
              </div>
            </div>
          </div>

          {/* Career Docs Placeholder */}
          <div>
            <h4 className="text-foreground font-mono text-sm uppercase tracking-widest mb-6">Resources</h4>
            <button className="text-muted-foreground text-sm font-mono hover:text-primary transition-colors opacity-50 cursor-not-allowed">
              [ DOWNLOAD_CV_LATEST ]
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-xs font-mono">
            © 2026 JAMISON ROBINSON // ALL_RIGHTS_RESERVED
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-primary hover:text-accent transition-colors group"
          >
            RETURN_TO_TOP 
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
