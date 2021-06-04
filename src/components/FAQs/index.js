import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LanguageIcon from '@material-ui/icons/Language';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Demo() {
  const classes = useStyles();

  return (
      <>
      <div id='faqs' className='info-section'>
      <h2 className="title-section">HOW DOES IT WORK?</h2>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" style={{fontSize:'15px'}}>
            Step 1
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color:"#800080", backgroundColor:"#FFF"}}>
            <LanguageIcon  />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" style={{color:"#800080" , fontSize:'22px', textAlign: 'left'}}>
              Need money for a cause?
            </Typography>
          <Typography style={{fontSize:'15px', textAlign: 'left'}}>Open the Altruistica Website and get started</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" style={{fontSize:'15px'}}>
            Step 2
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color:"#800080", backgroundColor:"#FFF"}}>
            <MonetizationOnIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" style={{color:"#800080" , fontSize:'22px'}}>
              Login and Create a Fundraiser
            </Typography>
            <Typography style={{fontSize:'15px'}}>You can host a fundraiser not only for a medical or social cause but also for a project, idea or organization.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" style={{fontSize:'15px'}}>
            Step 3
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color:"#800080", backgroundColor:"#FFF"}}>
            <ShareIcon />
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" style={{color:"#800080" , fontSize:'22px', textAlign: 'left'}}>
            Share your Fundraiser
            </Typography>
            <Typography style={{fontSize:'15px', textAlign: 'left'}}>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" style={{fontSize:'15px'}}>
            Step 4
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color:"#800080", backgroundColor:"#FFF"}}>
            <GetAppIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" style={{color:"#800080" , fontSize:'22px'}}>
              Withdraw Funds
            </Typography>
            <Typography style={{fontSize:'15px'}}>The funds raised can be withdrawn without any hassle directly to your bank account.
</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </>
  );
}
