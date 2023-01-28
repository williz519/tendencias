import React from "react";
import { Link } from "react-router-dom";

import S from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={S.nav}>
        {/*         <div className={S.logo}>
          <p>
            GRUPO DE INVESTIGACIÓN TENDENCIAS – Territorio, Ciencia, Educación e
            Ingeniería
          </p>
        </div> */}

        <div className={S.items}>
          <ul className={S.list}>
            <li>
              <a href="#inicio">
                <Link to="/">Inicio</Link>
              </a>
            </li>
            <li>
              <a href="#mision">Mision</a>
            </li>
            <li>
              <a href="#vision">Visión</a>
            </li>
            <li>
              <a href="#objetivos">Objetivos</a>
            </li>
            <li>
              <a href="#actividades">Actividades</a>
            </li>

            <li>
              <a href="#investigadores">Investigadores</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
