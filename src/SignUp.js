import './SignUpUi.css';
import profile from "./../image/a.png";
import email from "./../image/email2.png";
import pass from "./../image/pass.png";
import './App.css';
import * as React from "react";

class SignUp extends React.Component {

    render(){
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
                            <h1>SignUp Page</h1>
                            <div>
                                <img src={email} alt="email" className="email"/>
                                <input type="text" placeholder="Enter Name" className="name"/>
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email"/>
                                <input type="text" placeholder="Enter Mail" className="email"/>
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="password"/>
                                <input type="password" placeholder="Password" className="password"/>
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="c-password"/>
                                <input type="password" placeholder="Confirm Password" className="c-password"/>
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="c-password"/>
                                <input type="password" placeholder="Confirm Password" className="c-password"/>
                            </div>
                            <div className="signup-button">
                                <button>Sign Up</button>
                            </div>

                            <p className="link">
                                <a href="#">Forgot password?</a> Or <a href="#">Sign Up</a>
                            </p>


                        </div>
                    </div>


                </div>
            </div>
        );
    }

}



export default SignUp;
