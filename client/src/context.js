import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [stateValue, setStateValue] = useState({
    value:"",
    currentPage:1
  });

  return (
    <AppContext.Provider value={{ stateValue, setStateValue }}>
      {children}
    </AppContext.Provider>
  );
};