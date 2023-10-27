import React from 'react';
import { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';
import { Button, ButtonGroup } from '@mui/material';
import ZarfDevLogo from '../assets/ZarfDevLogo.png'

//import createTheme and change color of buttons

function Navbar() {

  const [isSelectedHome, setHome] = useState(true);
  const [isSelectedWorks, setWorks] = useState(false);
  const [isSelectedInfo, setInfo] = useState(false);

  function SelectHome(){
    setHome(true);
    setWorks(false);
    setInfo(false);
  }

  function SelectWorks(){
    setHome(false);
    setWorks(true);
    setInfo(false);
  }

  function SelectInfo(){
    setHome(false);
    setWorks(false);
    setInfo(true);
  }

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
              <Button color="success" sx={[ {borderRadius: 2}, 
                    {color: 'white'}, 
                    isSelectedHome ? {color: 'black'} : {color: 'white'}]}
                    startIcon={<HomeIcon></HomeIcon>}
                    onClick={() => SelectHome()}>
                  HOME
              </Button>
              </Link>
              <Link className='' to='/projects'>
                <Button color="info" sx={[ {borderRadius: 2}, 
                    {color: 'white'}, 
                    isSelectedWorks ? {color: 'black'} : {color: 'white'}]}
                    startIcon={<EngineeringIcon></EngineeringIcon>}
                    onClick={() => SelectWorks()}>
                  MY WORKS
                </Button>
              </Link>
              <Link className='' to='/academicInfo'>
              <Button color="warning" sx={[ {borderRadius: 2}, 
                    {color: 'white'}, 
                    isSelectedInfo ? {color: 'black'} : {color: 'white'}]}
                    startIcon={<SchoolIcon></SchoolIcon>}
                    onClick={() => SelectInfo()}>
                  ACADEMIC INFO
              </Button>
            </Link>
          </ButtonGroup>
        </div>
    </div>
  )
}

export default Navbar