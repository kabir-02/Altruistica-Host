import React, { useState } from 'react'
import { Form, FormControl, Button, Container}  from 'react-bootstrap'
import { useHistory} from 'react-router-dom'
import SearchBar from "material-ui-search-bar";

export default function SearchByName(){
  const [searchTerm,setSearchTerm] = useState('')
  const history = useHistory();
  const handleChange = (event)=>{
    setSearchTerm(event.target.value)
  }


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

    return(
      <>
      <Form onKeyDown={handleKeyDown} inline className="form-center">
          <FormControl type="text" placeholder="Search" value={searchTerm}
           className="mr-sm-2 inp" onChange={handleChange}/>
          <Button type="button" variant="outline-success" onClick={handleClick} >Search</Button>
        </Form>      

        </>
    )
}