import React from "react";
import NavBarMU from "../NavBar/NavBarMU";
import Footer from "../footer/footer";
import S from "./Detail.module.css";
import { useLocation } from "react-router-dom";
import * as Lista2 from "./invest";
import { useState, useEffect } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import profile from "./profile.webp";

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
    <Box>
      <Box>
        <NavBarMU />
      </Box>

      {loading === false ? (
        <Box
          sx={{
            padding: "2% 10%",
            minHeight: "100vh",
            margin: "0 auto",
          }}
        >
          <Box>
            <Grid
              container
              sx={{
                padding: "2%",
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingTop: "3vh" }}>
                  <img src={profile} width={150} alt="profile" />
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "3%",
                }}
              >
                <Typography variant="h3">{Info.name}</Typography>{" "}
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                color: "#0f5531",
              }}
            >
              Proyectos
            </Typography>
            <Divider />

            <Box
              sx={{
                color: "#666",
                padding: "2% 0%",
              }}
            >
              <ul>
                {Info.projects?.map((item) => (
                  <li> {item} </li>
                ))}
              </ul>
            </Box>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              color: "#0f5531",
            }}
          >
            Publicaciones
          </Typography>

          <Divider />

          <Box
            sx={{
              color: "#666",
              padding: "2% 0%",
            }}
          >
            <ul>
              {Info.publish?.map((item) => (
                <li> {item} </li>
              ))}
            </ul>
          </Box>
        </Box>
      ) : (
        <h1> lkvd </h1>
      )}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Details;
