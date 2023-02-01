import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import NavBar from "../NavBar/NavBarMU";

const InvestDetail = () => {
  let location = useLocation();
  let area = location.pathname
    .substring(8, location.pathname.length)
    .toString();
  let area2 = area.replaceAll("%20", " ");
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            commodi neque rem molestias labore, cum placeat quas provident
            sapiente recusandae. Non, blanditiis ipsam. Cumque sed tempora ut,
            deleniti minima similique!
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
