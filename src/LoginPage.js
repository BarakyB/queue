import './LoginUi.css';
import profile from "./../src/image/a.png";
import email from "./../src/image/email.png";
import pass from "./../src/image/pass.png";
import * as React from "react";
import Cookies from "universal-cookie";
import axios from "axios";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    showError: false,
    response: ""
  }

  onUsernameChange = (e) => {
    let username = e.target.value;
    this.setState({
      username: username
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }


  login = () => {
    axios.get("http://localhost:8989/sign-in", {
      params: {
        username: this.state.username,
        password: this.state.password
      }
    })
        .then((response) => {
          if (response.data && response.data.length > 0) {
            const cookies = new Cookies();
            cookies.set("logged_in", response.data);
            window.location.reload();
          } else {
            this.setState({
              showError: true
            })
          }
        })

  }

  signUp = () => {
    axios.get("http://localhost:8989/create-account", {
      params: {
        username: this.state.username,
        password: this.state.password
      }
    })
        .then((response) => {
          if (response.data) {
            this.setState({
              response: "Your account has been created!"
            })
          } else {
            this.setState({showError: true, response: "This username is already taken"})
          }
        })
  }
    render() {
      const hasRequiredDetails = !(this.state.username == "" || this.state.password == "");


      return (
          <div className="main">
            <div className="sub-main">
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile"/>
                </div>
              </div>
              <div className="font-face-gm">
                <h1>Login Page</h1>
                <div>
                  <img src={email} alt="email" className="email"/>
                  <input type="text"
                         onChange={this.onUsernameChange}
                         value={this.state.username}
                         placeholder="UserName"
                         className="name"/>
                </div>
                <div className="second-input">
                  <img src={pass} alt="pass" className="email"/>
                  <input type="password"
                         onChange={this.onPasswordChange}
                         value={this.state.password}
                         placeholder="Password"
                         className="name"/>
                </div>
                <div className="login-button">
                  <button onClick={this.login} disabled={!hasRequiredDetails}>Login</button>
                </div>
                <p className="link">
                  <a href="#">Forgot password?</a> Or <a href="/signup">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
      )
    }
  }

export default LoginPage;
