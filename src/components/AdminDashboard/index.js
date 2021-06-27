import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IndividualCard from '../CardSection/IndividualCard'
import {NavBtnLink} from '../Navbar/NavbarElements'
import {BlogData} from '../Blog/blogContent'
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
  rootCard: {
    flexGrow: 1,
    overflow:'hidden',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '4%',
  },
}));


export default function VievMatch() {
  const classes = useStyles();

  
  return (
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">Welcome Admin!</h2>
        <div className={classes.rootCard}>
    <center>
      <Grid container spacing={3} >
        {BlogData.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <IndividualCard title={data.title} author={data.author} date={data.date} description={data.description} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </center>
    </div>
    </div>
  );
}

