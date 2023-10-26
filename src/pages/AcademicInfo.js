import { Container } from '@mui/material'
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItemComp from '../components/TimelineItemComp';
import AnimatePage from '../components/AnimatePage';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function AcademicInfo() {
  return (
    <AnimatePage>
      <div>
          <Container>
            <Timeline position='alternate'>
                <TimelineItemComp year='2012' 
                      type='PEC'
                      institution='Motijheel Govt. Boys High School' 
                      dotColor='info'>
                </TimelineItemComp>
                <TimelineItemComp year='2015' 
                      type='JSC' 
                      institution='Motijheel Govt. Boys High School' 
                      dotColor='warning'>
                </TimelineItemComp>
                <TimelineItemComp year='2017' 
                      type='SSC' 
                      institution='Motijheel Govt. Boys High School' 
                      dotColor='success'
                      subject='Science'>
                </TimelineItemComp>
                <TimelineItemComp year='2019' 
                      type='HSC'
                      institution='Dhaka City College' 
                      dotColor='error'
                      subject='Science'>
                </TimelineItemComp>
                <TimelineItemComp year='2024' 
                      type='Undergrade' 
                      institution='BRACU' 
                      dotColor='grey'
                      subject='CSE'>
                </TimelineItemComp>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color='info' />
                  </TimelineSeparator>
                  <TimelineContent></TimelineContent>
                </TimelineItem>
            </Timeline>
          </Container>
      </div>
    </AnimatePage>
  )
}

export default AcademicInfo