import React from "react";
import S from "./investigadores.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Lista from "../Details/invest";

const Investigadores = () => {
  const [invest, setInvest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInvest(Lista);
    setLoading(false);
  }, []);

  return (
    <div>
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
              {invest.map((item) => (
                <Link to={`/Detail/${item.id}`} className={S.Link}>
                  <li>{item.name}</li>
                </Link>
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
