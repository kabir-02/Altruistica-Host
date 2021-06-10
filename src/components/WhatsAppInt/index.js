import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
      bottom: "0",
      left: "0",
      flexShrink: 0,
      textAlign: "center",
    "& > * + *": {
      marginTop: theme.spacing(2),
      
    }
  }
}));

export default function WhatsAppInt() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root} id="alert-whatsapp">
      <Collapse in={open}>
        <Alert 
        icon={<WhatsAppIcon fontSize="inherit" />}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Want to learn more about us? Contact us on <a href="">WhatsApp!</a>
        </Alert>
      </Collapse>
    </div>
  );
}
