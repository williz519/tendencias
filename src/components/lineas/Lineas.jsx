import React from "react";
import S from "./lineas.module.css";

const Lineas = () => {
  return (
    <div id="líneas de investigación">
      <div className={S.header}>
        <h1> Lineas de Investigación </h1>
        <hr />
      </div>

      <div className={S.list}>
        <p>
          Actualmente el grupo de investigación TENDENCIAS cuenta con las
          siguientes línes de investigación:
        </p>
        <ul>
          <li>Pedagogía</li>
          <li>Economia regional</li>
          <li>Ciencia y análisis de datos </li>
          <li>Modelación matemática y computacional </li>
        </ul>
      </div>
    </div>
  );
};

export default Lineas;
