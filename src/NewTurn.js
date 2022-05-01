import './App.css';
import * as React from "react";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import { AiFillLike } from 'react-icons/ai';
import Dropzone from 'react-dropzone'

class NewTurn extends React.Component {
    state = {
        token: "",
        date: "",
        turns: []
    }
    ////
    componentDidMount() {
        this.getAllTurns()
    }

////
    onTextChange = (e) => {
        let date = e.target.value;
        this.setState({
            date: date
        })
    }
    addTurn = () => {
        const cookies = new Cookies();
        let data = new FormData();
        if (this.state.file) {
            data.append("file", this.state.file, this.state.file.name);
        }
        data.append("token", cookies.get("logged_in"));
        data.append("date", this.state.date);
        axios.post("http://localhost:8989/add-turn", data, {
            headers: {'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p'}
        }).then((response) => {
            if (response.data) {
                const dateTurns = this.state.turns;
                dateTurns.unshift({
                    turn: this.state.turn,
                    date: "Few moments ago..."
                })
                this.setState({
                    turns: dateTurns
                })
            } else {
                alert("couldn't add turn")
            }
        })
    }
////
    getAllTurns = () => {
        const cookies = new Cookies();
        axios.get("http://localhost:8989/get-turn", {
            params: {
                token: cookies.get("logged_in")
            }
        })
            .then((response) => {
                this.setState({
                    turns: response.data
                })
            })
    }////


    render() {
        return (
            <div>
                {
                    this.state.turns.map(turn => {
                        return (
                            <div style={{borderBottom: "1px solid black", padding: "10px", width: "300px"}}>
                                {/*<img src={"http://localhost:8989/get-post-image?postId=1"} width={50} height={50}/>*/}

                                <i style={{fontSize: "12px"}}>
                                    {turn.turns}
                                </i>
                                <p style={{fontSize: "8px"}}>
                                    {turn.date}
                                </p>

                            </div>
                        )
                    })
                }

                <div style={{marginTop: "30px"}}>
                    <textarea
                        onChange={this.onTextChange}
                        value={this.state.date}
                        placeholder={"Enter date"}
                    /><br/>


                    <button onClick={this.addTurn}>Submit</button>
                </div>
            </div>
        )
    }
}

export default NewTurn;