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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non
              rerum officia quae quia quibusdam et ullam ex quas autem.
              Similique, dolore illo. Impedit, repudiandae. Et consectetur
              numquam voluptate corporis.
            </p>
          </div>

          <div className={S.list}>
            {invest.map((item) => (
              <div>
                <div className={S.img}>imagen</div>
                <h3>{item.name}</h3>
                <Link to={`/Detail/${item.id}`}>
                  <button>Detalles</button>
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1> Cargando... </h1>
      )}
    </div>
  );
};

export default Investigadores;
