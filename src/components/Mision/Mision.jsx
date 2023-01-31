import React from "react";
import S from "./mision.module.css";
const Mision = () => {
  return (
    <div id="mision" className={S.main}>
      <div className={S.header}>
        <h1> Misión</h1>
        <hr />
        <p>
          El grupo de investigación TENDENCIAS fue creado en junio de 2022 como
          una iniciativa multidisciplinaria de varios docentes investigadores
          pertenecientes a la Universidad de Antioquia – Seccional Oriente, el
          cual tiene como propósito planear, estudiar, investigar y desarrollar
          programas y proyectos que generen impacto tanto regional como nacional
          teniendo como ejes fundamentales del desarrollo investigativo
          estrategias cualitativas y cuantitativas con alto grado de
          rigurosidad. Además, se busca construir escenarios de cooperación
          académica que permitan desarrollar y aplicar modelos de gestión de
          programas y proyectos adecuados a las necesidades institucionales,
          regionales y nacionales. El grupo de Investigación tiene diferentes
          líneas de investigación, entre las que se encuentran Pedagogía,
          Economía Regional, Modelación Matemática y Computacional, Ciencia y
          Analítica de datos y Biología, cada línea está liderada por un
          coordinador y constituida por docentes investigadores y estudiantes en
          formación.
        </p>
        <h1>Visión</h1>
        <hr />
        <p>
          Constituirnos en el mediano plazo en un referente académico e
          investigativo importante a nivel institucional, regional y nacional en
          las diversas áreas y líneas de investigación que constituyen el grupo.
        </p>
      </div>
      <div className={S.obj} id="objetivos">
        <h1>Objetivos</h1>
        <hr />
        <ul>
          <li> Determinar necesidades y oportunidades de investigación</li>
          <li>
            Desarrollar proyectos de investigación que conduzcan a la solución
            de las necesidades detectadas.
          </li>
          <li>
            Generar productos de investigación de alto nivel que generen un
            impacto a nivel regional y nacional.
          </li>
          <li>
            Divulgar ante la comunidad académica y científica los planes y
            resultados de investigación.
          </li>
          <li>Fomentar la cultura investigativa de la institución.</li>
          <li>
            Fortalecer las líneas de investigación del grupo de investigación
            tendencias
          </li>
        </ul>
      </div>

      <div className={S.act} id="actividades">
        <h1>Actividades</h1>
        <hr />
        <p>
          La línea de investigación de Economía Regional del grupo de
          investigación TENDENCIAS ha realizado las siguientes actividades:
        </p>
        <ul>
          <li>
            Organización del Congreso Nacional de Mercado Laboral: Retos
            Regionales del Mercado de Trabajo, realizado en la Universidad de
            Antioquia – Seccional Oriente el 10 y 11 de noviembre de 2022.
          </li>
          <li>
            Presentación del avance de investigación “Disparidades Subregionales
            en el Mercado de Trabajo en Antioquia” en los seminarios técnicos
            del Departamento Nacional de Planeación. 20 de octubre de 2022.
          </li>
          <li>
            Sometimiento de los resultados de investigación “Análisis
            Exploratorio de la heterogeneidad del desempleo en el Departamento
            de Antioquia”, 2022.
          </li>
          <li>
            Participación conjunta con el grupo de Macroeconomía en el proyecto
            “Antioquia es plana” entre el IDEA y la Universidad de Antioquia.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mision;
