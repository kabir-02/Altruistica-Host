import React from "react";
import loginImg from "../../img/login.svg";
import Grid from '@material-ui/core/Grid';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '',Create_pw: '',Confirm_pw: '' };
    this.onSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  handleSubmit(e) {
    console.log(JSON.stringify(this.state))
    // On submit of the form, send a POST request with the data to the server.
    fetch(' /initial_signup', {
        body: JSON.stringify(this.state),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    })
        .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                alert('Saved');
            } else {
                alert('Issues saving');
            }
        });
    
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
              <input className="signup-input" type="text" name="name" placeholder="Name" onChange = {this.handleChange}/>
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="email">Email</label>
              <input className="signup-input" type="text" name="email" placeholder="Email" onChange = {this.handleChange} />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="password">Password</label>
              <input className="signup-input" type="password" name="Create_pw" placeholder="Password" onChange = {this.handleChange} />
            </div>
            <div className="form-group">
              <label  className="label-sign" htmlFor="confirm-password">Confirm Password</label>
              <input className="signup-input" type="password" name="Confirm_pw" placeholder="Password" onChange = {this.handleChange}/>
            </div>
            </Grid>
            <Grid item xs={12} sm={6}> 
            <div className="form-group">
              <label className="label-sign" htmlFor="country">Phone</label>
              <input className="signup-input" type="text" name="country" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="city">City</label>
              <input className="signup-input" type="text" name="city" placeholder="City" />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="State">State</label>
              <input className="signup-input" type="text" name="state" placeholder="State" required/>
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="country">Country</label>
              <input className="signup-input" type="text" name="country" placeholder="Country" />
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