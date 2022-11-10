import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import productData from "./productData";

import { Context } from "./Context";

import "./style/main.scss";

export default function App() {
  const { darkMode } = useContext(Context);
  const theme = darkMode ? "dark" : "light";
  document.body.setAttribute("data-theme", theme);

  const [itemCount, setItemCount] = useState(
    productData.filter((item) => item.quantity > 0).length
  );

  return (
    <>
      <Header itemCount={itemCount} />
      <Main itemCount={itemCount} setItemCount={setItemCount} />
      <Footer />
    </>
  );
}
