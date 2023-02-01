import React from "react";
import S from "./investigadores.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Lista2 from "../Details/invest";
import { Box, Divider, Typography } from "@mui/material";

console.log(Lista2);

const Investigadores = () => {
  const [invest, setInvest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInvest(Lista2);
    setLoading(false);
  }, []);

  return (
    <Box
      id="investigadores"
      sx={{
        paddingTop: "2%",
      }}
    >
      {loading === false ? (
        <>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  color: "#0f5531",
                }}
              >
                Investigadores
              </Typography>{" "}
              <Divider sx={{ width: "40%" }} />
            </Box>

            <Box
              sx={{
                padding: "2% 10%",
              }}
            >
              <Typography
                sx={{
                  color: "#666",
                }}
              >
                Actualmente, el grupo está conformado por los siguientes
                integrantes:
              </Typography>
              <Box>
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
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Typography> Cargando... </Typography>
      )}
    </Box>
  );
};

export default Investigadores;
