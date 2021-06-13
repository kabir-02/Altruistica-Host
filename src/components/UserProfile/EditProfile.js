import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Button} from '../ButtonElement'

export default function EditProfile() {
  return (
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">Let's Update your Details!</h2>
    <div className="form">
          <Grid container spacing={3} >
            <Grid item xs={12} sm={6}> 
            <div className="form-group">
              <label className="label-sign" htmlFor="name">Name</label>
              <input className="signup-input upsi" type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="email">Email</label>
              <input className="signup-input upsi" type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="password">Password</label>
              <input className="signup-input upsi" type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label  className="label-sign" htmlFor="confirm-password">Confirm Password</label>
              <input className="signup-input upsi" type="password" name="confirm-password" placeholder="Password" />
            </div>
            </Grid>
            <Grid item xs={12} sm={6}> 
            <div className="form-group">
              <label className="label-sign" htmlFor="country">Phone</label>
              <input className="signup-input upsi" type="text" name="country" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="city">City</label>
              <input className="signup-input upsi" type="text" name="city" placeholder="City" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="State">State</label>
              <input className="signup-input upsi" type="text" name="state" placeholder="State" required/>
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="country">Country</label>
              <input className="signup-input upsi" type="text" name="country" placeholder="Country" />
            </div>
            
            </Grid>
            </Grid>
          </div>
          <Button>Update Profile</Button>
          
    </div>
    
  );
}