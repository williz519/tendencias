import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import udea from "./udea.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = ["Inicio", "Investigadores", "Líneas de investigación"];

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "#0a351c",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "left",
            height: "11vh",
          }}
        >
          {" "}
          <Box sx={{ width: "20%", padding: "10px" }}>
            <a
              href="https://www.udea.edu.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={udea}
                style={{
                  filter: "invert()",
                }}
                width="200px"
                alt="Universidad de Antioquia"
              />
            </a>
          </Box>
          <Toolbar
            sx={{
              width: "80%",
              textAlign: "right",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                textAlign: "right",
                justifyContent: "end",
                paddingRight: "6%",
              }}
            >
              {pages.map((page, id) => (
                <>
                  <Button
                    size="large"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 4,
                      color: "white",
                      display: "block",
                      textTransform: "none",
                      fontSize: 20,
                    }}
                  >
                    {id === 0 ? (
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "white" : "white",
                          textDecoration: isActive ? "none" : "none",
                        })}
                        to="/"
                      >
                        Inicio
                      </NavLink>
                    ) : (
                      <a
                        style={{
                          "text-decoration": "none",
                          color: "white",
                        }}
                        href={`#${page.toLowerCase()}`}
                      >
                        {page}
                      </a>
                    )}
                  </Button>
                </>
              ))}
            </Box>
          </Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <a
                    style={{
                      "text-decoration": "none",
                      color: "black",
                    }}
                    href={`#${page.toLowerCase()}`}
                  >
                    {page}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}
