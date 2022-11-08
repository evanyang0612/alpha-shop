import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [steps, setSteps] = useState(1);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function increaseSteps() {
    setSteps((prevStep) => prevStep + 1);
  }

  function decreaseSteps() {
    setSteps((prevStep) => prevStep - 1);
  }

  return (
    <Context.Provider
      value={{ darkMode, toggleDarkMode, steps, increaseSteps, decreaseSteps }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
