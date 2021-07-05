import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogActions from "@material-ui/core/DialogActions"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from "../ButtonElement"
import Dialog from "@material-ui/core/Dialog"
import Tooltip from "@material-ui/core/Tooltip"

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip)
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
    
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  }));


  const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant='h6'>{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label='close'
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    )
  })
  
  const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent)
  
  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions)


export default function UseAlcoins() {
    const classes = useStyles();
    const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }
    const handleClose = () => {
      setOpen(false)
    }
  return (
      <>
     
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit"></Typography>
           {"Gained AL Coins? It's time to see how you can use them to the fullest."}{' '}
          </React.Fragment>
        }
      >
      <Button onMouseEnter={onHover}
          onMouseLeave={onHover}
          onClick={handleClickOpen}>
      Use AL Coins
        </Button>
        </HtmlTooltip>
        <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >


<DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Here's how you can use your AL Coins!
        </DialogTitle>
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
      </Dialog>
    </>
  );
}