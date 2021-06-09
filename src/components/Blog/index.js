import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardSection from '../CardSection'
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
    <h2 className="title-section donh">What you need to Know about Covid-19!</h2>
        <NavBtnLink>Region-wise Resources</NavBtnLink>
        <NavBtnLink>Vaccination Portal</NavBtnLink>
        <NavBtnLink>Covid-19 in Numbers</NavBtnLink>
      <CardSection/>
    </div>
  );
}
