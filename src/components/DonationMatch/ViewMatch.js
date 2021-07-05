import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DonorCards from '../CardSection/DonorCards'
import Grid from '@material-ui/core/Grid';
import {DonorMatchData} from '../CardSection/DonorMatchContent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rootCard: {
    flexGrow: 1,
    overflow:'hidden',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '4%',
  },
}));


export default function VievMatch(props) {
  const classes = useStyles();

  
  return (
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">My Matches</h2>
        <div className={classes.rootCard}>
    <center>
      <Grid container spacing={3} >
        {DonorMatchData.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <DonorCards title={data.title} author={data.author} date={data.date} description={data.description} image={data.image} target={data.target} />
            </Grid>
          )
        })}
        </Grid>
        </center>
    </div>
    </div>
  );
}

