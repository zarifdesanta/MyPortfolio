import React from 'react'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function TimelineItemComp({type, year, institution, dotColor, subject}) {
  return (
        <TimelineItem>
          <TimelineOppositeContent color='white'>
              {year}
          </TimelineOppositeContent>
          <TimelineSeparator>
              <TimelineDot color={dotColor}></TimelineDot>
              <TimelineConnector></TimelineConnector>
          </TimelineSeparator>
          <TimelineContent color='white'>
              <h1>{type}</h1>
              <p>{institution}</p>
              <p>{subject}</p>
          </TimelineContent>
        </TimelineItem>
  )
}

export default TimelineItemComp