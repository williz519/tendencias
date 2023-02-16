import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import NavBar from "../NavBar/NavBarMU";

let lineas=[
  {
    id:"Economia regional",
    lineas: ["Organización del Congreso Nacional de Mercado Laboral: Retos Regionales del Mercado de Trabajo, realizado en la Universidad de Antioquia, Seccional Oriente el 10 y 11 de noviembre de 2022.",
    'Presentación del avance de investigación "Disparidades Subregionales en el Mercado de Trabajo en Antioquia" en los seminarios técnicos del Departamento Nacional de Planeación. 20 de octubre de 2022.',
    "Sometimiento de los resultados de investigación “Análisis Exploratorio de la heterogeneidad del desempleo en el Departamento de Antioquia”, 2022",
    "Participación conjunta con el grupo de Macroeconomía en el proyecto “Antioquia es plana” entre el IDEA y la Universidad de Antioquia.",
  ]
  }
]

const InvestDetail = () => {
  let location = useLocation();
  let area = location.pathname
    .substring(8, location.pathname.length)
    .toString();
  let area2 = area.replaceAll("%20", " ");
  const filteredarray=lineas.filter(el=>el.id===area2)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <NavBar />
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          padding: "0% 10%",
          paddingTop: "3vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: 500,
            color: "#0f5531",
            padding: "4% 0%",
          }}
        >
          <Typography variant="h3">{area2}</Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            padding: "4% 0%",
            color: "#666",
          }}
        >
          <Typography>
            La linea de investigación de {area2} cuenta con las siguientes actividades:
            <ul>{
              filteredarray[0].lineas.map((el)=>(<li>{el}</li>)) 
              }
            </ul>
            
          </Typography>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default InvestDetail;
