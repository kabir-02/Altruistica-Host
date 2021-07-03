import React from "react";
import { useHistory} from 'react-router-dom'
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
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  LinkedinShareButton, LinkedinIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  rootIndCard: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  large:{
    width: theme.spacing(5),
    height: theme.spacing(5),
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



const FundCards=({frid, title, description,gendate, target, deadline, image, url})=> {
  const classes = useStyles();
  const [expanded] = React.useState(false);
  const history = useHistory();
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
        subheader={gendate}
      />
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Target: {target}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <WhatsappShareButton className="social-media-icon" url={`Check out ${title}: ${url}`}><WhatsappIcon size={32} round={true}/></WhatsappShareButton>
        <FacebookShareButton className="social-media-icon" url={url} quote={`Check out ${title}: `}><FacebookIcon size={32} round={true}/></FacebookShareButton>
        <EmailShareButton className="social-media-icon" url={`Check out {title} at ${url}`} subject={title}><EmailIcon size={32} round={true}/></EmailShareButton>
        <LinkedinShareButton className="social-media-icon" url={url} title={`Check out ${title} at `} summary={description}><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
        <TwitterShareButton className="social-media-icon" url={`Check out ${title} at ${url}`}><TwitterIcon size={32} round={true}/></TwitterShareButton> */}
        <a rel="noopener noreferrer" target="_blank" href='/checkout'><MonetizationOnOutlinedIcon className={classes.large}/></a>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          aria-label="show more"
        >
          <a rel="noopener noreferrer" target="_blank" onClick={handleOpen}><LaunchIcon /></a>
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
                <p>{description}</p>
                <br/>
                Target: {target}
                <br/> 
                Published On: {gendate.split("T")[0]}
                <br/>
                Deadline: {deadline.split("T")[0]}
              </center>
              <Button><a rel="noopener noreferrer" target="_blank" href='/checkout'>DONATE NOW</a></Button>
            </div>
            </div>
        </Fade>
      </Modal>
      </CardActions>
    </Card>
  );
}

export default FundCards;