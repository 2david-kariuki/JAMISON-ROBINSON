import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import { useTerminalMode } from '@/contexts/TerminalModeContext';

const navItems = ['About', 'Experience', 'Systems', 'Contact'];

const Header = () => {
  const { isTerminal, toggle } = useTerminalMode();

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-foreground font-semibold text-lg tracking-tight">
          {isTerminal ? '~/jamison' : 'JR'}
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {isTerminal ? `$ ${item.toLowerCase()}` : item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-md text-muted-foreground hover:text-accent transition-colors"
            title="Toggle Terminal Mode"
          >
            <Terminal size={18} />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium pulse-subtle hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
