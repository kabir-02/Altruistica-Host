import React from "react";
import loginImg from "../../img/login.svg";
import Grid from "@material-ui/core/Grid";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      create_pw: "",
      confirm_pw: "",      
      phone: "",
      city: "",
      state: "",
      country: ""
    };
    // this.onSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(this.state);
    console.log(JSON.stringify(this.state));
    // On submit of the form, send a POST request with the data to the server.
    fetch(" http://localhost:8082/signup", {
      mode: 'no-cors',
      body: JSON.stringify(this.state),
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      mode: "cors",
      redirect: "follow",
      referrer: "no-referrer",
    }).then(function (response) {
      console.log(response);
      if (response.status === 200) {

        alert("Saved");
      } else {
        alert("Issues saving");
      }
    });
  };

  render() {
    console.log(window.location.pathname);
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Sign Up</div>
        <div className="content">
          <div className="image">
            <img className="img-sign" src={loginImg} />
          </div>
          <form className="form" action="/dashboard">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <div className="form-group">
                  <label className="label-sign" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="signup-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="label-sign" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="signup-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <label className="label-sign" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="signup-input"
                    type="password"
                    name="create_pw"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="label-sign" htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <input
                    className="signup-input"
                    type="password"
                    name="confirm_pw"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="form-group">
                  <label className="label-sign" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="signup-input"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="label-sign" htmlFor="city">
                    City
                  </label>
                  <input
                    className="signup-input"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="label-sign" htmlFor="State">
                    State
                  </label>
                  <input
                    className="signup-input"
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="label-sign" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="signup-input"
                    type="text"
                    name="country"
                    placeholder="Country"
                    onChange={this.handleChange}
                  />
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
        <div className="footer">
          <button type="submit" onClick={this.handleSubmit} className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
