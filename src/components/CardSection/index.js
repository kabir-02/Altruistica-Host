import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IndividualCard from './IndividualCard'
import { hidden } from 'colorette';
const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

const useStyles = makeStyles((theme) => ({
  rootCard: {
    flexGrow: 1,
    overflow:'hidden',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.rootCard}>
    <center>
      <Grid container spacing={3} >
      {names.map(name => (
        <Grid item xs={12} sm={6} md={4} >
          <IndividualCard/>
        </Grid>
      ))}
      </Grid>
      </center>
    </div>
  );
}
