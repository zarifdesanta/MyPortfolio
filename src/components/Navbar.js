import React from 'react';
import { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Tab, Tabs, Button, ButtonGroup } from '@mui/material';
import ZarfDevLogo from '../assets/ZarfDevLogo.png'

//import createTheme and change color of buttons

function Navbar() {

  return (
    <div className='navbar'>
        <div className='logo'>
          <Link to='/'>
              <img src={ZarfDevLogo} alt='Logo' 
                  width='100px' height='100px'>
              </img>
            </Link>
        </div>
        <div>
          <ButtonGroup variant="contained" size='small'>
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
              <Link className='' to='/academicInfo'>
              <Button color='warning' sx={{ borderRadius: 2, color: 'white', borderColor: 'white'}}
                    startIcon={<SchoolIcon></SchoolIcon>}>
                  Academic Info
              </Button>
              </Link>
          </ButtonGroup>
        </div>
    </div>
  )
}

export default Navbar