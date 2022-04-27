import './App.css';
import * as React from "react";
import 'react-day-picker/dist/style.css';
import DateTime from "./DateTime";

class HairRemovalPage extends React.Component {
    render() {
        return (
            <div>
                <div className="font-face-gm3">
                    <h3>When you want to get your hair removal?</h3>
                </div>
            <DateTime/>

            </div>
        )
    }
}
export default HairRemovalPage;
