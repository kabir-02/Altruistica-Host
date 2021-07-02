import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Container}  from 'react-bootstrap'
import { useHistory} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import FundCards from '../CardSection/FundCards'
import Axios from 'axios';

export default function SearchByName(props){
  const [searchTerm,setSearchTerm] = useState('')
  const history = useHistory();
  const handleChange = (event)=>{
    setSearchTerm(event.target.value)
  }

  const [cards, setCards] = useState([]);


  const handleClick = () =>{
    history.push({
      pathname: '/donate',
      search : `search_query=${searchTerm}`,
    });
  }

  const handleKeyDown = (keyEvent) =>{
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  useEffect(() => {
    Axios.get("http://localhost:8082/searchfunds?class="+props.fr_class+"&criteria="+searchTerm).then((response)=>{
      setCards(response.data);
    });
  },[searchTerm]);

    return(
      <>
      <Form onKeyDown={handleKeyDown} inline className="form-center">
          <FormControl type="text" placeholder="Search" value={searchTerm}
           className="mr-sm-2 inp" onChange={handleChange}/>
          <Button type="button" variant="outline-success" onClick={handleClick} >Search</Button>
        </Form>    
        <Grid className='grid-full' container spacing={3} >  
        {cards.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
         </Grid>
        </>
    )
}