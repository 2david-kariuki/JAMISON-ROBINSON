import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

interface TerminalModeContextType {
  isTerminal: boolean;
  toggle: () => void;
}

const TerminalModeContext = createContext<TerminalModeContextType>({ isTerminal: false, toggle: () => {} });

export const useTerminalMode = () => useContext(TerminalModeContext);

export const TerminalModeProvider = ({ children }: { children: ReactNode }) => {
  const [isTerminal, setIsTerminal] = useState(false);

  const toggle = useCallback(() => setIsTerminal(prev => !prev), []);

  useEffect(() => {
    document.body.classList.toggle('terminal-mode', isTerminal);
  }, [isTerminal]);

  return (
    <TerminalModeContext.Provider value={{ isTerminal, toggle }}>
      {children}
    </TerminalModeContext.Provider>
  );
};
