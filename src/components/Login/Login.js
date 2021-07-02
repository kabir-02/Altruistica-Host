import React from "react";
import loginImg from "../../img/login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginStatus:''
    }
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
              <label className="label-sign" htmlFor="username">Email</label>
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
            Login
          </button>
        </div>
        <h1>{this.state.loginStatus}</h1>
      </div>
    );
  }
}