import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IndividualCard from '../CardSection/IndividualCard'
import {NavBtnLink} from '../Navbar/NavbarElements'
import {BlogData} from './blogContent'
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


export default function Features() {
  const classes = useStyles();

  
  return (
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">What you need to Know about Covid-19!</h2>
        <center>
        <Grid container spacing={3} >
        <Grid item xs={12} sm={4}><div className="borderWhite"><a className = "buttonBlog" rel="noopener noreferrer" target="_blank" href='https://covid19-twitter.in/'><center>Region-wise Resources</center></a></div></Grid>
        <Grid item xs={12} sm={4}><div className="borderWhite" ><a className = "buttonBlog" rel="noopener noreferrer" target="_blank" href='https://www.cowin.gov.in/'><center>Vaccination Portal</center></a></div></Grid>
        <Grid item xs={12} sm={4}><div className="borderWhite"><center><a className = "buttonBlog" rel="noopener noreferrer" target="_blank" href='https://www.worldometers.info/coronavirus/'>Covid-19 Live Updates</a></center></div></Grid>
        </Grid></center>
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

