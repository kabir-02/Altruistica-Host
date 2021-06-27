import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';

import SearchBar from "material-ui-search-bar";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Gratitude() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const [support, setSupport] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8082/support").then((response)=>{
      console.log(response.data);
      setSupport(response.data);
    });
  },[]);
  
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">SHOW GRATITUDE</h2>
        <center>
    <h5>We make supporting people fun and easy. Want to show your gratitude to individuals or want to help someone succeed. Tap the username and proceed to pay any amount you wish to.</h5>
    <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '20px auto',
          maxWidth: 800
        }}
      />
    <List dense className={classes.root}>
      {support.map((data, index) => {
        return (
            
          <ListItem key={index} button>
            <ListItemAvatar>
              <Avatar/>
            </ListItemAvatar>
            <ListItemText  primary={data.Name} />
            <ListItemSecondaryAction>
              <SendIcon/>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </center>
    </div>
  );
}
