import React, { createContext, useContext, useState, useEffect } from 'react';

const RecruiterContext = createContext();

export const RecruiterProvider = ({ children }) => {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => !prev);
  };

  // Optional: persist selection
  useEffect(() => {
    const savedMode = localStorage.getItem('recruiter_mode');
    if (savedMode === 'true') {
      setIsRecruiterMode(true);
    }
  }, []);

  const handleToggle = () => {
    const nextState = !isRecruiterMode;
    setIsRecruiterMode(nextState);
    localStorage.setItem('recruiter_mode', String(nextState));
  };

  return (
    <RecruiterContext.Provider value={{ isRecruiterMode, toggleRecruiterMode: handleToggle }}>
      {children}
    </RecruiterContext.Provider>
  );
};

export const useRecruiter = () => {
  const context = useContext(RecruiterContext);
  if (!context) {
    throw new Error('useRecruiter must be used within a RecruiterProvider');
  }
  return context;
};
