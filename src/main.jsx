import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/main_toutem";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
);