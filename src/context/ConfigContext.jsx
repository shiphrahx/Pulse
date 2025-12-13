import { createContext, useContext, useState, useEffect } from 'react';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [particlesEnabled, setParticlesEnabled] = useState(() => {
    const saved = localStorage.getItem('particlesEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('particlesEnabled', JSON.stringify(particlesEnabled));
  }, [particlesEnabled]);

  const toggleParticles = () => {
    setParticlesEnabled(prev => !prev);
  };

  return (
    <ConfigContext.Provider value={{ particlesEnabled, toggleParticles }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
