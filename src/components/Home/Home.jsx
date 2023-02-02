import React from "react";
import NavBar from "../NavBar/NavBarMU";
import Mision from "../Mision/Mision";
import Investigadores from "../invesitgadores/investigadores";
import Footer from "../footer/footer";
import Header from "../Header/Header";
import Lineas from "../lineas/Lineas";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Mision />
      <Lineas />
      <Investigadores />

      <Footer />
    </div>
  );
};
