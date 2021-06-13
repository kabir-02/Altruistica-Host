import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '../ButtonElement'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
    const [hover, setHover] = useState(false)
    const onHover = ()=>{
        setHover(!hover)
    }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit"></Typography>
           {"Create a fund in a category of your choice"}.{' '}
            {"Let's together eliminate poverty and spread happiness."}
          </React.Fragment>
        }
      >
      <Button onMouseEnter = {onHover} onMouseLeave = {onHover} onClick={handleClickOpen}>
                        Create Fund
                    </Button>
        </HtmlTooltip>
        
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create Fund
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <form>
            <label className='fund-label'>
              Fundraiser Title: 
              <input className="fund-input" type="text" name="fr_title" />
            </label>
            <label className='fund-label'>
              Description:
              <textarea className="fund-input"  name="fe_desc" />
            </label>
            <label className='fund-label'>
              Class:
            </label>
            <select id="fr_class" name="fr_class">
              <option value="Fundraising">Fundraising</option>
              <option value="Crowdfunding">Crowdfunding</option>
              <option value="Crowdsourcing">Crowdsourcing</option>
              <option value="Auctioning">Auctioning</option>
              <option value="Covid-19 Support">Covid-19 Support</option>
            </select>
            <label className='fund-label'>
              Category:
            </label>
            <select id="fr_category" name="fr_category">
              <option value="1">Medical</option>
              <option value="2">Education</option>
              <option value="3">Environment</option>
              <option value="4">Social Cause</option>
              <option value="5">NGOs</option>
              <option value="5">School Events</option>
              <option value="5">Homes</option>
            </select>
            <label className='fund-label'>Type</label>
            <select id="fr_type" name="fr_type">
              <option value="Fixed">Fixed</option>
              <option value="Flexible">Flexible</option>
            </select>
            <label for="fr_target" className='fund-label'>Deadline:</label>
            <input className="fund-input" type="date" id="fr_deadline" name="fr_deadline"/>
            <label for="fr_deadline" className='fund-label'>Target Amount:</label>
            <input inputmode="decimal"  className="fund-input" type="number" id="fr_target" name="fr_target"/>
            <input type="submit" value="Submit" />
          </form>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
