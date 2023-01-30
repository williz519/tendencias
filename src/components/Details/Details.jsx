import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/footer";
import S from "./Detail.module.css";
import { useLocation } from "react-router-dom";
import * as Lista2 from "./invest";
import { useState, useEffect } from "react";

const Details = () => {
  let location = useLocation();

  const [Info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let index = location.pathname[location.pathname.length - 1];
    let List = Lista2[parseInt(index)];
    setInfo(List);
    setLoading(false);
  }, []);

  return (
    <div>
      <NavBar />
      {loading === false ? (
        <div className={S.main}>
          <div className={S.header}>
            <div className={S.imagen}>Imagen</div>
            <div className={S.text}>
              <h1>{Info.name}</h1>{" "}
            </div>
          </div>

          <div className={S.list}>
            <h2>Proyectos</h2>
            <div>
              <ul>
                {Info.projects?.map((item) => (
                  <li> {item} </li>
                ))}
              </ul>
            </div>

            <h2> Publicaciones </h2>
            <div>
              <ul>
                {Info.publish?.map((item) => (
                  <li> {item} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h1> lkvd </h1>
      )}
      <Footer />
    </div>
  );
};

export default Details;
