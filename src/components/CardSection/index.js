import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IndividualCard from './IndividualCard'
const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

const useStyles = makeStyles((theme) => ({
  rootCard: {
    flexGrow: 1,
    overflow:'hidden',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CardSection=({title,author,date,description,image,url})=> {
  const classes = useStyles();
  return (
    <div className={classes.rootCard}>
    <center>
      <Grid container spacing={3} >
      {names.map(name => (
        <Grid item xs={12} sm={6} md={4} >
          <IndividualCard name={title} author={author} date={date} description={description} image={image} url={url}/>
        </Grid>
      ))}
      </Grid>
      </center>
    </div>
  );
}

export default CardSection
