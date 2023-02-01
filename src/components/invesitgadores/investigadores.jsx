import React from "react";
import S from "./investigadores.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Lista2 from "../Details/invest";

console.log(Lista2);

const Investigadores = () => {
  const [invest, setInvest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInvest(Lista2);
    setLoading(false);
  }, []);

  return (
    <div id="investigadores">
      {loading === false ? (
        <>
          <div className={S.main}>
            <h1>Investigadores</h1>
            <hr />
            <p>
              Actualmente, el grupo está conformado por los siguientes
              integrantes:
            </p>
          </div>

          <div className={S.list}>
            <ul>
              {invest.map((item, id) => (
                <NavLink
                  to={`/Detail/${id}`}
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "#666666",
                    textDecoration: isActive ? "none" : "none",
                  })}
                >
                  <li>{item.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <h1> Cargando... </h1>
      )}
    </div>
  );
};

export default Investigadores;
