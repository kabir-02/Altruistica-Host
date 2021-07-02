import React from "react";
import { useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import LaunchIcon from '@material-ui/icons/Launch';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
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
  }
}));



const FundCards=({frid, title,author,gendate, target, description,image,url})=> {
  const classes = useStyles();
  const [expanded] = React.useState(false);
  const history = useHistory();

  const handleOpen = () =>{
    history.push({
      pathname: '/fundraiser-details',
      search : `category=${frid}`,
    });
  }

  return (
    <Card className={classes.rootIndCard}>
      <CardHeader
        title={title}
        subheader={gendate}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={author}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Target: {target}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <WhatsappShareButton className="social-media-icon" url={`Check out ${title}: ${url}`}><WhatsappIcon size={32} round={true}/></WhatsappShareButton>
        <FacebookShareButton className="social-media-icon" url={url} quote={`Check out ${title}: `}><FacebookIcon size={32} round={true}/></FacebookShareButton>
        <EmailShareButton className="social-media-icon" url={`Check out {title} at ${url}`} subject={title}><EmailIcon size={32} round={true}/></EmailShareButton>
        <LinkedinShareButton className="social-media-icon" url={url} title={`Check out ${title} at `} summary={description}><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
        <TwitterShareButton className="social-media-icon" url={`Check out ${title} at ${url}`}><TwitterIcon size={32} round={true}/></TwitterShareButton>
        <a rel="noopener noreferrer" target="_blank" href='/checkout'><MonetizationOnOutlinedIcon className={classes.large}/></a>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          aria-label="show more"
        >
          <a rel="noopener noreferrer" target="_blank" onClick={handleOpen}><LaunchIcon /></a>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default FundCards;