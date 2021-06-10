import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SingleLineGridList from '../SingleLineGridList'
import {NavBtnLink} from '../Navbar/NavbarElements'

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

export default function Features() {
  const classes = useStyles();

  return (
    <div className='info-section' id='donate'>
    <h2 className="title-section donh">Features</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <img src="img/svg-2.svg"/>
            <h2>Fundraiser</h2>
            <p>Be it somebody's medical treatment or a cause to fight for, help them in their times of need by donating as much money as you can.</p>
     
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <img src="img/svg-3.svg"/>
            <h2>Crowdsource</h2>
            <p>Not all happiness can be bought by money. Goods and items that are in good condition can also help someone if donated to them.</p>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <img src="img/svg-4.svg"/>
            <h2>Crowdfunding</h2>
            <p>Talented Individuals and organizations work on big projects. Big Ideas = Big Funds. Join us in supporting and empowering them.</p>       
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <br/>
          <img src="img/svg-5.svg"/>
          
            <h2>Support</h2>
            <p>A Saviour can be helped too. They need not ask for support each time. Choose who you want to donate for, as a token of appreciation.</p>

          </Paper>
        </Grid>
      </Grid>
      <br/> <br/>
      <SingleLineGridList/>
    </div>
  );
}
