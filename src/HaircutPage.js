import './App.css';
import * as React from "react";
import sheep from "./../src/image/sheep.png"

class HaircutPage extends React.Component {
    render() {
        return (
            <div>
                <a href="./HairdressingSalon">
                <img
                    src={sheep} alt="sheep"
                    width={200}
                    height={200}
                />
                </a>
            </div>
        )
    }
}
export default HaircutPage;
