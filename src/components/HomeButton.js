import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function HomeButton({link, name, icon}) {
  return (
    <Link to={link}>
        <Button sx={{ borderRadius: 2, color: 'white', 
                borderColor: 'white', 
                marginLeft: -5,
                minWidth: 250,
                maxWidth: 525}}
                variant="outlined" fullWidth={300} startIcon={icon}>
                {name}
        </Button>
    </Link>
  )
}

export default HomeButton