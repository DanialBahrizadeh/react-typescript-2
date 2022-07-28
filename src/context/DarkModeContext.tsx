import React, { createContext, useContext, useState } from "react";

interface DarkModeContextModel {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextModel | null>(null);

export const useDarkMode = () => {
  return useContext(DarkModeContext);
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
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
