import './App.css';
import * as React from "react";
import 'react-day-picker/dist/style.css';
import DayPickerComponent from './Component/DayPickerComponent';
import * as addTurn from "date-fns";


function HairRemovalPage () {


    const [date, setDate] = React.useState(null)


        return (
            <div>
                <div className="font-face-gm3">
                    <h3>When you want to get your hair removalaaa?</h3>
                </div>

                <DayPickerComponent  set = {addTurn.setDate} value = {date}/>

            </div>
        )

}
export default HairRemovalPage;
