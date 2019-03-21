import React, {Component} from 'react';
import {getRandomNumber} from "./RandomTool";
import "./Space.css";

export default class Space extends Component {
    constructor(props) {
        super(props);

        const {width, height} = this.props;
        const max = this.props.max || 100;

        let stars = [];
        for (let i = 0; i < max; i++) {
            stars.push({
                x: getRandomNumber(width),
                y: getRandomNumber(height)
            });
        }

        this.state = {
            stars: stars
        };
    }


    render() {
        const {width, height, radialGradient, color, size, opacity, animation} = this.props;
        const {stars} = this.state;

        return (
            <svg width={width} height={height} style={{position: "absolute"}}>
                {
                    radialGradient &&
                    <defs>
                        <radialGradient id="starGradient">
                            <stop offset="5%" stop-color="rgba(255,255,200,1)"/>
                            <stop offset="95%" stop-color="rgba(0,0,0,0.1)"/>
                        </radialGradient>
                    </defs>
                }
                {
                    stars && stars.map((star, idx) => (
                        <circle key={idx} className={animation ? "twinkle" + (getRandomNumber(5) + 1) : ""} cx={star.x}
                                cy={star.y} r={size || 1}
                                stroke={"none"}
                                fill={radialGradient ? "url(#starGradient)" : (color || "white")}
                                opacity={opacity || 1}/>
                    ))
                }
            </svg>
        );
    }
}