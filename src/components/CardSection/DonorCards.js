import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Button, Card }from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import LaunchIcon from '@material-ui/icons/Launch';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ChatIcon from '@material-ui/icons/Chat';
import { withStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  rootIndCard: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  large:{
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  rootCard: {
    flexGrow: 1,
    overflow:'hidden',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '4%',
  },
}));

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);


const DonorCards=({ title, author, description, date, target, image})=> {
  const classes = useStyles();
  const [expanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Card className={classes.rootIndCard}>
      <CardHeader
        title={title}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        By: {author}<br/>
        Target: {target}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Coming Soon!</Typography>
          </React.Fragment>
        }
      >
        <ChatIcon className={classes.large}/>
      </HtmlTooltip>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          aria-label="show more"
        >
          <a onClick={handleOpen}><LaunchIcon /></a>
        </IconButton>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Button className="float-right" onClick={handleClose}><CancelIcon/></Button>
          <h2 className="color-black">{title}</h2>
            <div className={classes.rootCard}>
              <center>
                  <img src={image} className="fit-donor"></img>
                <p>{description}</p>
              </center>
              <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Coming Soon!</Typography>
          </React.Fragment>
        }
      >
        <Button className="background-purple">CONNECT WITH DONOR</Button>
      </HtmlTooltip>
              
            </div>
            </div>
        </Fade>
      </Modal>
      </CardActions>
    </Card>
  );
}

export default DonorCards;