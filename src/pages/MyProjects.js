import React from 'react';
import '../styles/MyProjects.css'
import { ProjectList } from '../helper/ProjectList';
import ProjectItem from '../components/ProjectItem';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container } from '@mui/material';

import AnimatePage from '../components/AnimatePage';

function MyProjects() {
  return (
    <AnimatePage>
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
              <Grid>

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
    </AnimatePage>
  )
}

export default MyProjects