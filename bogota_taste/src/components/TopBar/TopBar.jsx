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
import SearchComponent from '../TopBar/SearchComponent';

import '../../styles/TopBar/TopBar.css';

function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
                <SearchComponent></SearchComponent>
            </div>

            <div className='botones'>
            < Stack spacing={2} direction="row">
                <Link to="/favoritos"><Button variant="outlined">Mis favoritos</Button></Link>
                <div>
                <IconButton
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
                <input type='search' placeholder='Busca restaurante o plato'/>
            </div>

            <div className='botones'>
            < Stack spacing={2} direction="row">
                <Link to="/iniciar"><Button variant="outlined">Iniciar sesión</Button></Link>
                <Link to="/registrar"><Button variant="contained">Registrarse</Button></Link>
            </Stack>
            </div>
            </nav>
      )}
    </div>
  );
}

export default TopBar;