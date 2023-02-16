import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import S from "./mision.module.css";
const Mision = () => {
  return (
    <Box id="mision" className={S.main}>
      <Box className={S.header}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
            }}
          >
            Misión
          </Typography>
        </Box>

        <Divider />

        <Box
          sx={{
            padding: "2% 0%",
          }}
        >
          <Typography>
            El grupo de investigación TENDENCIAS fue creado en junio de 2022
            como una iniciativa multidisciplinaria de varios docentes
            investigadores pertenecientes a la Universidad de Antioquia –
            Seccional Oriente, el cual tiene como propósito planear, estudiar,
            investigar y desarrollar programas y proyectos que generen impacto
            tanto regional como nacional teniendo como ejes fundamentales del
            desarrollo investigativo estrategias cualitativas y cuantitativas
            con alto grado de rigurosidad. Además, se busca construir escenarios
            de cooperación académica que permitan desarrollar y aplicar modelos
            de gestión de programas y proyectos adecuados a las necesidades
            institucionales, regionales y nacionales. El grupo de Investigación
            tiene diferentes líneas de investigación, entre las que se
            encuentran Pedagogía, Economía Regional, Modelación Matemática y
            Computacional, Ciencia y Analítica de datos y Biología, cada línea
            está liderada por un coordinador y constituida por docentes
            investigadores y estudiantes en formación.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
            }}
          >
            Visión
          </Typography>
        </Box>

        <Divider />

        <Box
          sx={{
            padding: "2% 0%",
          }}
        >
          <Typography>
            Constituirnos en el mediano plazo en un referente académico e
            investigativo importante a nivel institucional, regional y nacional
            en las diversas áreas y líneas de investigación que constituyen el
            grupo.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
            }}
          >
            Objetivos
          </Typography>
        </Box>

        <Divider />
      </Box>

      <Box
        sx={{
          padding: "0% 10%",
          color: "#666666",
        }}
      >
        <Box>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Mision;
