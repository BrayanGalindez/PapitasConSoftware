import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="top-bar">
      {isLoggedIn ? (
            <nav className='topbar'>

            <div className='logo'>
            <img className='logo-img'
            alt='Logo'
            //src=''
            />
            <span className='logo-text'>
                <span>BOGO</span>
                <br></br>
                <span>TASTE</span>
                <br></br>
            </span> 
            </div>

            <div className='searchbar'>
                <input type='search' placeholder='Busca restaurante o plato'/>
            </div>

            <div className='botones'>
            < Stack spacing={2} direction="row">
                <Link to="/favoritos"><Tooltip title="Mis favoritos"><Button variant="outlined">Mis favoritos</Button></Tooltip></Link>
                <Link to="/micuenta"><Tooltip title="Mi cuenta"><Button variant="contained">Mi cuenta</Button></Tooltip></Link>
            </Stack>
            </div>
            </nav>
      ) : (
            <nav className='topbar'>

            <div className='logo'>
            <img className='logo-img'
            alt='Logo'
            //src=''
            />
            <span className='logo-text'>
                <span>BOGO</span>
                <br></br>
                <span>TASTE</span>
                <br></br>
            </span> 
            </div>

            <div className='searchbar'>
                <input type='search' placeholder='Busca restaurante o plato'/>
            </div>

            <div className='botones'>
            < Stack spacing={2} direction="row">
                <Link to="/iniciar"><Tooltip title="Iniciar sesión"><Button variant="outlined">Iniciar sesión</Button></Tooltip></Link>
                <Link to="/registrar"><Tooltip title="Registrarse"><Button variant="contained">Registrarse</Button></Tooltip></Link>
            </Stack>
            </div>
            </nav>
      )}
    </div>
  );
}

export default TopBar;