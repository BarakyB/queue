import './App.css';
import * as React from "react";
import {NavLink} from "react-router-dom";
import Cookies from "universal-cookie";
import {green} from "@mui/material/colors";
import {blue} from "@material-ui/core/colors";

class Navigation extends React.Component {
    ws = new WebSocket("ws://localhost:8989/stream?t=1&o=7791");

    state = {
        links: [{title: "Profile", path: "/profile"},
            {title: "Haircut", path: "/Haircut"},
            {title: "Pedicure Manicure", path: "/PedicureManicure"},
            {title: "Hair Removal", path: "/HairRemoval"}
        ]
    }

    componentDidMount() {
        this.ws.onmessage = (message) => {
            console.log("message")
        }

    }


    logout = () => {
        const cookies = new Cookies();
        cookies.remove("logged_in");
        window.location.reload();
    }

    render() {
        return (
            <div style={{marginRight: "20px", marginLeft: "20px", borderRight: "1px solid", paddingRight: "20px"}}>
                <ul>
                    {
                        this.state.links.map(link => {
                            return (
                                <NavLink to={link.path} className={"link"} activeClassName={"active"}>
                                    <li style={{marginBottom: "10px"}}>
                                        <i>
                                            {link.title}
                                        </i>
                                    </li>
                                </NavLink>
                            )
                        })
                    }
    <button onClick={this.logout}>
        Logout
    </button>

                </ul>
            </div>
        )
    }
}
export default Navigation;
