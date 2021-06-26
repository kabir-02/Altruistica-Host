import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function Testimonials() {
  const classes = useStyles();

  return (
    <div className='info-section' id='testimonials'>
    <h2 className="title-section testh">Testimonials</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={12}>
          <center><Avatar alt="Remy Sharp" src="img/team/01.jpg" className={classes.large} /></center>
            <h5>Ram Sekhar</h5>
            <h6>My Brother had a tumour for which we needed to raise funds urgently. The support team at Altruistica understood our problem and helped us to start a fundraiser. If my brother is alive, it's because of Altruistica and all those who supported us in times of need.</h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={12}>
          <center><Avatar alt="Remy Sharp" src="img/team/02.jpg" className={classes.large} /></center>
            <h5>Viz Hanif</h5>
            <h6>Our school's infrastructure needed renovation, without which our students would be left without a institution to study at. We could create a fund and easily raise 250000 within 2 weeks with Altruistica. We have now renovated the building including alot more activities for students.</h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={12}>
          <center><Avatar alt="Remy Sharp" src="img/team/03.jpg" className={classes.large} /></center>
            <h5>Iris Sandstone</h5>
            <h6>We were seeking funds to star a pet shelter in Guana to save the stray dogs from dying out of hunger and road accidents. The procedure was quick and instant. We were able to raise an amount higher than what we needed and could add a lot of more features to the pet shelter.</h6>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={12}>
          <center><Avatar alt="Remy Sharp" src="img/team/04.jpg" className={classes.large} /></center>
            <h5>Aditi Garandhi</h5>
            <h6>My startup idea was down as investors backed out due to the recession. That's when I heard of Altruistica and decided to pitch it on this platform. One of the best decisions I have taken. There are people who have even invested 100Rs but that means a lot. I am sure we are gonna rock this.</h6>
          </Paper>
        </Grid>
        </Grid>
    </div>
  );
}
