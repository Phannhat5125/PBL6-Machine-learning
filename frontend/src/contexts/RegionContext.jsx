import React, { createContext, useContext, useState } from 'react';

const RegionContext = createContext();

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};

export const RegionProvider = ({ children }) => {
  const [currentRegion, setCurrentRegion] = useState('Việt Nam');

  return (
    <RegionContext.Provider value={{ currentRegion, setCurrentRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionContext;