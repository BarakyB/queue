import './App.css';
import * as React from "react";
import hairall from "./../src/image/hairall.png"
import {DayPicker} from "react-day-picker";
import 'react-day-picker/dist/style.css';

class HairRemovalPage extends React.Component {
    render() {
        return (
            <div>
                <div className="font-face-gm3">
                    <h3>When you want to get your hair removal?</h3>
                    <DayPicker/>
                </div>
            </div>
        )
    }
}
export default HairRemovalPage;
