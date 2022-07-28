import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext(false);

const SetDarkModeContext = createContext<() => void>(() => {});

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const useSetDarkModeContext = () => {
  return useContext(SetDarkModeContext);
};

interface DarkModeContextProviderProps {
  children: React.ReactNode;
}

const DarkModeContextProvider: React.FunctionComponent<
  DarkModeContextProviderProps
> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevStete) => !prevStete);
  };
  return (
    <DarkModeContext.Provider value={darkMode}>
      <SetDarkModeContext.Provider value={toggleDarkMode}>
        {children}
      </SetDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
