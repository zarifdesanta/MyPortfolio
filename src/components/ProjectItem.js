import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const cardSX = {
    '&:hover': {
        borderColor: 'blue',
        color: 'lightblue',
        backgroundColor: 'lightwhite'
    }
}

function ProjectItem({image, name, tools, link}) {
  return (
    <div>
        <Card variant='outlined' sx={{ width: 345, 
            height: 330,
            borderRadius: 5, 
            borderColor: 'white',
            bgcolor:"transparent", ...cardSX}}>
            <CardActionArea component={Link} to={link} target='_blank' sx={{height: 330}}>
                <CardMedia component="img"
                    height="194"
                    image={image}>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" color="white" fontSize={20}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="gray">
                        {tools}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default ProjectItem