import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const lineas = [
  "Pedagogia y Educación",
  "Terrirorio y Crecimiento Regional",
  "Ciencia y Tecnología",
  "Ingeniería y Desarrollo",
];

const Lineas = () => {
  return (
    <Box id="líneas de investigación">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2% 10%",
        }}
      >
        <Box
          sx={{
            padding: "0% 10%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              color: "#0f5531",
            }}
          >
            Líneas de Investigación
          </Typography>
        </Box>
        <Divider
          sx={{
            width: "40%",
          }}
        />
      </Box>

      <Box
        sx={{
          padding: "2% 10%",
          color: "#666",
        }}
      >
        <Typography>
          Actualmente el grupo de investigación TENDENCIAS cuenta con las
          siguientes línes de investigación:
        </Typography>
        <Box>
          <ul>
            {lineas.map((item, id) => (
              <NavLink
                to={`/Invest/${item}`}
                style={({ isActive }) => ({
                  color: isActive ? "green" : "#666666",
                  textDecoration: isActive ? "none" : "none",
                })}
              >
                <li>{item}</li>
              </NavLink>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Lineas;
