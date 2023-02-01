import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import S from "./header.module.css";

const anArrayOfNumbers = [
  <img src="https://www.udea.edu.co/wps/wcm/connect/udea/9c0e6e6a-d860-4282-a9f8-c64f0e45810b/1/aeroespacial3.jpg?MOD=AJPERES" />,
  <img src="https://www.udea.edu.co/wps/wcm/connect/udea/cc8b3109-d8ae-4dfb-93cf-b0ebc3ab49bf/1/aeroespacial2.jpg?MOD=AJPERES" />,
  <img src="https://www.udea.edu.co/wps/wcm/connect/udea/055f12a9-48dd-4ee3-83ac-43bc93cf0f17/1/fuente+udea+-+hombre+creador+de+energia.jpg?MOD=AJPERES" />,
];

const Header = () => {
  return (
    <Box>
      <Box className={S.cosa}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            translate: "0vh 20vh",
          }}
        >
          <Typography variant="h1">
            GRUPO DE INVESTIGACIÓN TENDENCIAS
          </Typography>
          <Typography variant="h2">
            Territorio, Ciencia, Educación e Ingeniería
          </Typography>
        </Box>
      </Box>
      <Box className={S.carousel}>
        <Carousel
          autoPlay={false}
          indicatorContainerProps={{
            style: {
              zIndex: 1,
              marginTop: "-30px",
              position: "relative",
            },
          }}
        >
          {anArrayOfNumbers.map((item, i) => (
            <Box key={i}>{item}</Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Header;
