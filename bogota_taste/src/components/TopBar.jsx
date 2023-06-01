import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

import '../styles/TopBar.css';

function TopBar({ onSearch }, { onDataFetched }) {

  const [query, setQuery] = useState('');
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleSearch = async () => {
    try {
      onSearch(query);
      const response = await axios.get('http://localhost:8000/rutas/restaurante.py',{
        params: { nombre: query }
      });
      onDataFetched(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="top-bar">
      {isLoggedIn ? (
            <nav className='topbar'>

            <div className='logo'>
            <img className='logo-img'
            alt='Logo'
            src='/images/papas-fritas.png'
            />
            <span className='logo-text'>
                <span>BOGO</span>
                <br></br>
                <span>TASTE</span>
                <br></br>
            </span> 
            </div>

            <div className='searchbar'>
              <div className='search-container'>
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="search-input"
                  placeholder="Busca restaurante o plato..."
                />
                <button onClick={handleSearch} className="search-icon">
                  <SearchIcon style={{color:'#e78284'}} sx={2}></SearchIcon>
                </button>
              </div>
            </div>

            <div className='botones'>
            < Stack spacing={2} direction="row">
                <Link to="/favoritos"><Button style={{ borderColor:'#e78284', color: '#e78284' }} variant="outlined">Mis favoritos</Button></Link>
                <div>
                <IconButton
                  style={{ color: '#e78284' }}
                  size="medium"
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <AccountCircleIcon></AccountCircleIcon>
                </IconButton>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom-start' ? 'left top' : 'left bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <Link className='link-micuenta' to='/micuenta'><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
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
              <div className='search-container'>
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="search-input"
                  placeholder="Busca restaurante o plato..."
                />
                <button onClick={handleSearch} className="search-icon">
                  <SearchIcon sx={2}></SearchIcon>
                </button>
              </div>
            </div>

            <div className='botones'>
            < Stack spacing={2} direction="row">
                <Link to="/iniciar"><Button style={{ borderColor:'#e78284', color: '#e78284' }} variant="outlined">Iniciar sesión</Button></Link>
                <Link to="/registrar"><Button style={{background:'#F9E2AF', borderColor:'#e78284', color: '#e78284' }} variant="contained">Registrarse</Button></Link>
            </Stack>
            </div>
            </nav>
      )}
    </div>
  );
}

export default TopBar;