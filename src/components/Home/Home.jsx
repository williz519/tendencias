import React from "react";
import NavBar from "../NavBar/NavBar";
import Mision from "../Mision/Mision";
import Investigadores from "../invesitgadores/investigadores";
import Footer from "../footer/footer";
import Header from "../Header/Header";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Mision />
      <Investigadores />
      <Footer />
    </div>
  );
};
