import React from "react";
import loginImg from "../../img/login.svg";
import Grid from '@material-ui/core/Grid';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Sign Up</div>
        <div className="content">
          <div className="image">
            <img className="img-sign" src={loginImg} />
          </div>
          <div className="form">
          <Grid container spacing={3} >
            <Grid item xs={12} sm={6}> 
            <div className="form-group">
              <label className="label-sign" htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label  className="label-sign" htmlFor="confirm-password">Confirm Password</label>
              <input type="password" name="confirm-password" placeholder="Password" />
            </div>
            </Grid>
            <Grid item xs={12} sm={6}> 
            <div className="form-group">
              <label className="label-sign" htmlFor="country">Phone</label>
              <input type="text" name="country" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="city">City</label>
              <input type="text" name="city" placeholder="City" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="State">State</label>
              <input type="text" name="state" placeholder="State" required/>
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="country">Country</label>
              <input type="text" name="country" placeholder="Country" />
            </div>
            
            </Grid>
            </Grid>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}