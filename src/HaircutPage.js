import './App.css';
import * as React from "react";
import sheep from "./../src/image/sheep.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

class HaircutPage extends React.Component {
    render() {
        return (
            <div className="font-face-gm3">
              <h3>When you want to get your haircut?</h3>
            <DayPicker/>
            </div>
        )
    }
}
export default HaircutPage;
