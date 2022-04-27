import './App.css';
import * as React from "react";
import 'react-day-picker/dist/style.css';
import DatePick from "./DatePick";


class HaircutPage extends React.Component {
    render() {
        return (
            <div>
                <div className="font-face-gm3">
                    <h3>When you want to get your haircutAAAA?</h3>
                </div>
                <DatePick/>


            </div>

        )
    }
}
export default HaircutPage;