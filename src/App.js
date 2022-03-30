import './App.css';
import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import ProfilePage from "./ProfilePage";
import HaircutPage from "./HaircutPage";
import PostsPage from "./PostsPage";
import {Route} from "react-router";
import Navigation from "./Navigation";
import Login from "./Login";
import Cookies from "universal-cookie";
import FollowedPage from "./FollowedPage";
import FollowedProfilePage from "./FollowedProfilePage";
import PediManiPage from "./PediManiPage";
import HairRemovalPage from "./HairRemovalPage";
import HairdressingSalon from "./HairdressingSalon";
import CutHairPage from "./CutHairPage";

class App extends React.Component {

    state = {
        isLoggedIn: true,
        token : ""
    }

    componentDidMount() {
        const cookies = new Cookies();
        if (cookies.get("logged_in")) {
            this.setState({
                isLoggedIn: true,
                token : cookies.get("logged_in")
            })
        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    {
                        this.state.isLoggedIn ?
                            <div style={{display: "flex", alignItems: "start", marginTop: "50px"}}>
                                <Navigation/>
                                <Route path={"/"} component={ProfilePage} exact={true}/>
                                <Route path={"/profile"} component={ProfilePage} exact={true}/>
                                <Route path={"/posts"} component={PostsPage} exact={true}/>
                                <Route path={"/followed"} component={FollowedPage} exact={true}/>
                                <Route path={"/Haircut"} component={HaircutPage} exact={true}/>
                                <Route path={"/HairdressingSalon"} component={HairdressingSalon} exact={true}/>
                                <Route path={"/PedicureManicure"} component={PediManiPage} exact={true}/>
                                <Route path={"/CutHairPage"} component={CutHairPage} exact={true}/>
                                <Route path={"/HairRemoval"} component={HairRemovalPage} exact={true}/>
                                <Route path={"/user/:userId"} component={FollowedProfilePage}/>
                            </div>
                            :
                            <div>
                                <Route path={"/"} component={Login}/>
                            </div>
                    }
                </BrowserRouter>
            </div>
        )
    }

}

export default App;
