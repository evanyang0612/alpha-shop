import React, { useState } from "react";
import productData from "./productData";

const Context = React.createContext();

function ContextProvider({ children }) {
  const DHL_SHIPPING_FEE = 500;
  const [darkMode, setDarkMode] = useState(false);
  const [steps, setSteps] = useState(1);
  const [shippedByDHL, setShippedByDHL] = useState(false);
  const [items, setItems] = useState(productData);
  const [formData, setFormData] = useState({
    userTitle: "mr",
    userName: "",
    userPhone: "",
    userEmail: "",
    userCity: "",
    userAddress: "",
    shipping: "",
    creditCardName: "",
    creditCardNumber: "",
    creditCardExpiredDate: "",
    creditCardCVC: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

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
        items,
        setItems,
        formData,
        setFormData,
        handleFormSubmit,
        handleFormChange,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
