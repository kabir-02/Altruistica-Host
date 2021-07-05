import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import { Button } from "../ButtonElement"
import Axios from "axios"
import { withStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogActions from "@material-ui/core/DialogActions"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import Tooltip from "@material-ui/core/Tooltip"

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip)

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

export default function EditProfile() {
  const [fields, setFields] = useState(null)
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
  const onChange = e => {
    const { name, value } = e.target

    setFields({ ...fields, [name]: value })
  }
  const validation = () => {
    if (Object.keys(fields).length !== 8) {
      return false
    }
    var validate = true
    Object.values(fields).map(obj => {
      if (obj === "" && validate === true) {
        validate = false
      }
      return ""
    })
    return validate
  }
  const onSubmit = () => {
    if (fields !== null) {
      if (validation()) {
        console.log("update values", fields)
        updateUserProfile(fields)
      } else {
        alert("Please fill the form")
      }
    }
  }
  const updateUserProfile = body => {
    Axios.post("http://localhost:8082/update_user_profile", body)
      .then(res => {
        console.log("udpate_user_profile api", res)
        if (res.status === 200) {
          alert("user updated successfully")
        }
      })
      .catch(err => console.log("error update_user_profile api", err))
  }

  return (
    <>
     <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit"></Typography>
           {"Check out your profile. Add fields, update whatever you want to."}
          </React.Fragment>
        }
      >
      <Button onMouseEnter={onHover}
          onMouseLeave={onHover}
          onClick={handleClickOpen}>
      Edit Profile
        </Button>
        </HtmlTooltip>
        <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
        Let's Update your Details!
        </DialogTitle>
        <hr/>
      <div className='form' className="dialog-margin">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className='form-group'>
              <label className='label-sign' htmlFor='name'>
                Name
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='name'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='email'>
                Email
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='email'
                name='email'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='password'>
                Password
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='confirm-password'>
                Confirm Password
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='password'
                name='confirm_password'
                placeholder='Password'
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='form-group'>
              <label className='label-sign' htmlFor='country'>
                Phone
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='phone'
                placeholder='Phone'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='city'>
                City
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='city'
                placeholder='City'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='State'>
                State
              </label>
              <input
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='state'
                placeholder='State'
                required
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='country'>
                Country
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='country'
                placeholder='Country'
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <Button onClick={() => onSubmit()}>Update Profile</Button>
      </Dialog>
    </>
  )
}
