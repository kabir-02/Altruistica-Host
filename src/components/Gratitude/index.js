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
import { useHistory} from 'react-router-dom'
import { Form, FormControl, Button}  from 'react-bootstrap'
import { ConsoleWriter } from 'istanbul-lib-report';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Gratitude() {
  const classes = useStyles();
  const [support, setSupport] = useState([]);
  const history = useHistory();
  const [searchTerm,setSearchTerm] = useState('')

  const handleChange = (event)=>{
    //console.log(event.target.value);
    setSearchTerm(event.target.value)
  }

  const handleSearch = () =>{
    history.push({
      pathname: '/support',
      search : `search_query=${searchTerm}`,
    });
  }
  
   const handleKeyDown = (keyEvent) =>{
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    } 
  
  }

  const handleClick = (user_id) =>{
    history.push({
      pathname: `/checkout/${user_id}`,
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:8082/support?criteria="+searchTerm).then((response)=>{
      setSupport(response.data);
      console.log(response.data)
    });
  },[searchTerm]); 
  
  return (
    <>
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">SHOW GRATITUDE</h2>
        <center>
    <h5>We make supporting people fun and easy. Want to show your gratitude to individuals or want to help someone succeed. Tap the username and proceed to pay any amount you wish to.</h5>
    <Form onKeyDown={handleKeyDown} inline className="form-center">
          <FormControl type="text" placeholder="Search" value={searchTerm}
           className="mr-sm-2 inp" onChange={handleChange}/>
          <Button type="button" variant="outline-success" onClick={handleSearch} >Search</Button>
    </Form>    
    <List dense className={classes.root}>
      {support.map((data, index) => {
        return (
            
          <ListItem key={index} button>
            <ListItemAvatar>
              <Avatar/>
            </ListItemAvatar>
            <ListItemText  primary={data.Name} />
            <ListItemSecondaryAction>
            <Button type="button" variant="outline-success" onClick={() => handleClick(data.user_id)} ><SendIcon/></Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </center>
    </div>  </>
  );

}
