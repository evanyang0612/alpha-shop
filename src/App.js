import React, { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { Context } from "./Context";

import "./style/main.scss";

export default function App() {
  const { darkMode } = useContext(Context);
  const theme = darkMode ? "dark" : "light";

  document.body.setAttribute("data-theme", theme);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
