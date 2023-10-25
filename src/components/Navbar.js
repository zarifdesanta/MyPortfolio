import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Box, Tab, Tabs, Button, ButtonGroup } from '@mui/material';

//import createTheme and change color of buttons

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            ZarfDev
        </div>
        <div>
            <ButtonGroup variant="contained" size='large'>
                <Link className='' to='/'>
                <Button color="success" sx={{ borderRadius: 2, color: 'white', borderColor: 'white'}}
                      startIcon={<HomeIcon></HomeIcon>}>
                    HOME
                </Button>
                </Link>
                <Link className='' to='/projects'>
                <Button sx={{ borderRadius: 2, color: 'white', borderColor: 'white'}}
                     startIcon={<EngineeringIcon></EngineeringIcon>}>
                    MY WORKS
                </Button>
                </Link>
            </ButtonGroup>
        </div>
    </div>
  )
}

export default Navbar