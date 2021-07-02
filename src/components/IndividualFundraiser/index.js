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


export default function IndividualFundraiser(props) {
  const classes = useStyles();

  
  return (
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">{props.data.title}</h2>
        <div className={classes.rootCard}>
    <center>
      {props.data.author} 
      <br/>
      {props.data.date}
      <br/>
      {props.data.description}
      <br/>
      {props.data.image}
      <br/>
      {props.data.url} />
          )
        })}
        </center>
    </div>
    </div>
  );
}

