import React from "react";
import loginImg from "../../img/login.svg";
import Axios from 'axios';
import { hashHistory } from 'react-router';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginStatus:''
    }
  }

  login = () => {
 
    Axios.post("https://altruistica.azurewebsites.net/login", {
      email: this.state.email,
      password: this.state.password,
    }).then((response) => {
      if (response.data.message) {
        this.state.loginStatus= response.data.message;
        console.log("Success");
        console.log(this.state.loginStatus)
      } else {
        this.state.loginStatus=response.data[0].email;
        console.log(this.state.loginStatus);
      }
    });
  };

  componentWillMount = () => {
    Axios.get("https://altruistica.azurewebsites.net/login").then((response) => {
      if (response.data.loggedIn == true) {
        this.state.loginStatus = response.data.user[0].email;
      }
    });

  }


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label className="label-sign" htmlFor="email">Email</label>
              <input className="signup-input" type="email" name="email" placeholder="Email" onChange = {(event) => this.setState({email:event.target.value})} />
            </div>
            <div className="form-group">
              <label className="label-sign" htmlFor="password">Password</label>
              <input className="signup-input" type="password" name="password" placeholder="Password" onChange = {(event) => this.setState({password:event.target.value})} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={(event) => this.login(event)} >
            <a className="no-link" href="/user-profile">Login</a>
          </button>
        </div>
        <h1>{this.state.loginStatus}</h1>
      </div>
    );
  }
}