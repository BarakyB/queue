import './App.css';
import * as React from "react";
import 'react-day-picker/dist/style.css';
import DayPickerComponent from "./DayPickerComponent";

function HaircutPage (){

        const [date, setDate] = React.useState(null)

        return (
            <div>
                <div className="font-face-gm3">
                    <h3>When you want to get your haircut?</h3>
                </div>

                <DayPickerComponent  set = {setDate} value = {date}/>

                
                
            </div>

        )

}
export default HaircutPage;
