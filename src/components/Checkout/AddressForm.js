import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios';

export default function AddressForm() {

  const [value, setValue] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8082/display-payment-details").then((response)=>{
      setValue(response.data);
    });
  });

  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Donor Details
      </Typography>
      {value.map((value, key)=>{
          return(
  
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            defaultValue={value.Name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            defaultValue={value.City}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" defaultValue={value.State} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            defaultValue={value.Country}
          />
        </Grid>
      </Grid>
      )
    })}
    </React.Fragment>
  );
}