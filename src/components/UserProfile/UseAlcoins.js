import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

export default function UseAlcoins() {
    const classes = useStyles();
  return (
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">Hooray! Here's how you can use your Alcoins!</h2>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
        <Typography className={classes.heading}>Altruistica</Typography>
          <Typography className={classes.secondaryHeading}>Donate more!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            Make use of your AL Coins for your next donation. Donate more with the same amount that you spend.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
        <Typography className={classes.heading}>Swiggy</Typography>
          <Typography className={classes.secondaryHeading}>Here's our treat for you!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            You are a life saver. It's time we give back to you for your kindness. Use your Alcoins to get a discount on your next order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
        <Typography className={classes.heading}>Amazon</Typography>
          <Typography className={classes.secondaryHeading}>Donation with Altruistica = Gift Voucher on Amazon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            Special people deserve special gifts. Here is a small token of appreciation from us which you can use on Amazon.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    
  );
}