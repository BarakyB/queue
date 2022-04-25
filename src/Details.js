import React from "react";
import './details.css';


class Details extends React.Component {

    state = {
        name: "",
        number: "",
        rememberMe: false,
        gender: "",
        showErr:""
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };


    handleSelect = event => {
        this.setState({ gender: event.target.value });
    };



    render() {
        return (
            <div className="font-face-gm3">
                Name:
                <input value={this.state.name} onChange={this.handleChange} />
                <br/><br/>
                Phone Number:
                <input value={this.state.number} onChange={this.handleChange} /><br/>
                <br/>
                <br/>
                <div>
                    Gender: <select value={this.state.title} onChange={this.handleSelect}>
                    <option>Male.</option>
                    <option>Female.</option>
                </select>
                </div>
                <br/><br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default Details;