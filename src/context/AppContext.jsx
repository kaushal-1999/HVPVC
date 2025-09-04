import React, { createContext, useContext, useState } from 'react';

// Create context
const AppCtx = createContext({
  navbarState: false,
  setNavbarState: () => {},
  toggle: () => {}
});

// Custom hook
export const UseAppCtx = () => useContext(AppCtx);

// Provider
const AppContext = ({ children }) => {
  const [navbarState, setNavbarState] = useState(false);

  const toggle = () => setNavbarState(prev => !prev);

  return (
    <AppCtx.Provider value={{ navbarState, setNavbarState, toggle }}>
      {children}
    </AppCtx.Provider>
  );
};

export default AppContext;
