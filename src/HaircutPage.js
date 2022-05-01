import './App.css';
import * as React from "react";
import 'react-day-picker/dist/style.css';
import DayPickerComponent from "./DayPickerComponent";
import {format} from "date-fns";

function HaircutPage (){

    const [date, setDate] = React.useState(1)

    return (
        <div>
            <div className="font-face-gm3">
                <h3>When you want to get your haircut?</h3>
            </div>

            <DayPickerComponent set = {setDate} value = {date}>
                <div>you picked {DayPickerComponent.selected}</div>

                </DayPickerComponent>
            <button>submit</button>



        </div>

    )

}
export default HaircutPage;