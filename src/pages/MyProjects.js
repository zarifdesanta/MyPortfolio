import React from 'react';
import '../styles/MyProjects.css'
import { ProjectList } from '../helper/ProjectList';
import ProjectItem from '../components/ProjectItem';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container, Paper } from '@mui/material';

function MyProjects() {
  return (
    <div className=''>
      <h1 className='name'>MY PROJECTS</h1>
      <Container>
        <Grid justifyContent='center' 
                container
                rowSpacing={3} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              
        {
          ProjectList.map((projectItem, key) => {
            return (
              <Grid sx={1}>

                <ProjectItem
                  key = {key}
                  image = {projectItem.image}
                  name = {projectItem.name}
                  tools = {projectItem.tools}
                  link = {projectItem.link}>
                </ProjectItem>
              </Grid>
              
            )
          }
          )
        }
        </Grid>
      </Container>
    </div>
  )
}

export default MyProjects