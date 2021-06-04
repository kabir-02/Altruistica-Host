import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className="info-section" id="about">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
                <div className='about-text'>
                    <h2 className="title-section">About Us</h2>
                    <p>Altruistica is a 5-in-one platform that supports Fundraising, Crowdfuning, Crowdsourcing, Auctioning and Support. It's the world's first money-cum-goods donation platform that aims to empower every person on the planet.</p>
                    <h3>Why Choose Us?</h3>

                    <Grid container spacing={6}>
                      <Grid item xs={12} sm={6}> 
                            <ul> 
                                <li>Easy-to-manage UI</li>
                                <li>Dedicated Smart-Dashboard</li>
                                <li>WhatsApp Support</li>
                                </ul>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <ul>
                      <li>Help in all Dimensions</li>
                                <li>Multi-Language Support</li>
                                <li>Returns on Donation</li>
                            </ul>
                      </Grid>
                    </Grid>
                    
                        
                </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}><img src="img/svg-1.svg"></img></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
