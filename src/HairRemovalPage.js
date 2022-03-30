import './App.css';
import * as React from "react";
import hairall from "./../src/image/hairall.png"

class HairRemovalPage extends React.Component {
    render() {
        return (
            <div>
                <img
                    src={hairall} alt="hairall"
                    width={200}
                    height={200}
                />
            </div>
        )
    }
}
export default HairRemovalPage;
