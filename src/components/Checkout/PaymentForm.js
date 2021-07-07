import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Button, Checkbox} from '@material-ui/core';
import Axios from 'axios';



export default function PaymentForm() {
  const [val, setVal] = useState([]);
  const [amount, setAmount] = useState([]);
  const [anon, setAnon]=useState([]);

  const submitPayment=()=>{
    Axios.post('https://altruistica.azurewebsites.net/complete-payment', {amount: amount, anonymous:anon }).then(()=>{
     alert("Successful Insert");
    });
  };
  useEffect(() => {
    Axios.get("https://altruistica.azurewebsites.net/display-payment-details").then((response)=>{
      setVal(response.data);
    });
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      {val.map((val, key)=>{
          return(
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" defaultValue={val.Name} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            name="cardNumber"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="amount"
            label="Donation Amount"
            onChange={(e)=>{setAmount(e.target.value)}}
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel className='black-label'
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel className='black-label'
            control={<Checkbox color="secondary" name="anonymous" value="1" />}
            label="Donate Anonymously"  onChange={(e)=>{setAnon(e.target.value)}}
          />
        </Grid>
      </Grid>
      )
    })}
    </React.Fragment>
  );
}