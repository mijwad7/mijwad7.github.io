import { createContext, useContext, useState } from 'react';

const ModeContext = createContext();

export function useMode() {
  return useContext(ModeContext);
}

export function ModeProvider({ children }) {
  const [mode, setMode] = useState('story'); // 'story' or 'resume'

  const toggleMode = () => {
    setMode((prev) => (prev === 'story' ? 'resume' : 'story'));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}
