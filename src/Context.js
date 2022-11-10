import React, { useState } from "react";
import productData from "./productData";

const Context = React.createContext();

function ContextProvider({ children }) {
  const DHL_SHIPPING_FEE = 500;
  const [darkMode, setDarkMode] = useState(false);
  const [steps, setSteps] = useState(1);
  const [shippedByDHL, setShippedByDHL] = useState(false);
  const [cartDatas, setCartDatas] = useState(productData);

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
      value={{
        DHL_SHIPPING_FEE,
        darkMode,
        toggleDarkMode,
        steps,
        increaseSteps,
        decreaseSteps,
        shippedByDHL,
        setShippedByDHL,
        cartDatas,
        setCartDatas,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
