import './App.css';
import * as React from "react";
import womenCut from "./../src/image/womencut.png"
import womenPen from "./../src/image/womenpen.png"
import womenWedding from "./../src/image/womenwedding.png"

class HairdressingSalon extends React.Component {


    render() {
        return (
            <div>
                <view style={{flex:2,flexDirection:"column",justifyContent: 'space-around', marginBottom: 10}}>
                <a href="./Example.js">
                    <tooltip title="WOMEN CUT" enterDelay={500} leaveDelay={200}>
                        <iconButton>
                             <img
                        src={womenCut} alt="womenCut"
                        width={150}
                        height={150}

                    />
                        <deleteIcon />
                    </iconButton>
                </tooltip>
                </a>
                    <a href="https://github.com/Joeyryanbridges">
                        <img
                            src={womenPen} alt="womenPen"
                            width={150}
                            height={150}

                        />
                    </a>
                        <a href="https://github.com/Joeyryanbridges">
                            <img
                                src={womenWedding} alt="womenWedding"
                                width={150}
                                height={150}
                            />

                </a>
                </view>
            </div>
        )
    }
}
export default HairdressingSalon;
