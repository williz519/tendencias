import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AiOutlineMenu } from 'react-icons/ai'
import { Navigate } from 'react-router-dom';


import { useNavigate } from "react-router-dom";


const settings = ['Inicio', 'Investigadores'];

const redireccion = (setting) => {
  if (setting == 'Inicio') {
    console.log(setting);
    //  Redireccionar al home 
  }
}

function NavBarMU() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl"
        sx={{
          backgroundColor: 'green'

        }}>
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: '  ' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Button variant="contained" color="success">
              Tendencias
            </Button>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Info  ">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                <AiOutlineMenu  style={{ color: 'white' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={()=> {redireccion(setting)} } >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarMU;
