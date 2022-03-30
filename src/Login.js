import './LoginUi.css';
import profile from "./../src/image/a.png";
import email from "./../src/image/email.png";
import pass from "./../src/image/pass.png";
import * as React from "react";
class Login extends React.Component {
  render()
  {
    return (
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile"/>

                </div>


              </div>
              <div>
                <h1>Login Page</h1>
                <div>
                  <img src={email} alt="email" className="email"/>
                  <input type="text" placeholder="UserName" className="name"/>
                </div>
                <div className="second-input">
                  <img src={pass} alt="pass" className="email"/>
                  <input type="password" placeholder="Password" className="name"/>
                </div>
                <div className="login-button">
                  <button>Login</button>
                </div>

                <p className="link">
                  <a href="#">Forgot password?</a> Or <a href="/signup">Sign Up</a>
                </p>


              </div>
            </div>


          </div>
        </div>
    );
  }
}

export default Login;
