import './App.css';
import * as React from "react";
import pedimani from "./../src/image/pedimani.png"

class PediManiPage extends React.Component {
    render() {
        return (
            <div>
                <a href="https://github.com/Joeyryanbridges">
                <img
                    src={pedimani} alt="pedimani"
                    width={200}
                    height={200}
                                    />

            </a>
            </div>
        )
    }
}
export default PediManiPage;
