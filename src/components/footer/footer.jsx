import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import S from "./footer.module.css";

const Footer = () => {
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 10,
          fontSize: 30,
          padding: "1%",
        }}
      >
        Contacto
      </Typography>

      <Divider
        sx={{
          width: "40%",
          backgroundColor: "white",
        }}
      />
      <Box>
        <Typography
          sx={{
            padding: 1,
          }}
        >
          tendencias@udea.edu.co
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
