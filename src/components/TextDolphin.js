import React, {Component} from 'react';
import ToggleValue from "./ToggleValue";
import { getRandomColor } from "./RandomTool";

const DEFAULT_INTERVAL = 15;
const DIRECTION_LEFT = 0;
const DIRECTION_RIGHT = 1;

export default class TextDolphin extends Component {
    constructor(props) {
        super(props);

        const {x, width, direction} = this.props;

        this.state = {
            animateFrame: false,
            color: getRandomColor(1),
            posX: x,
            direction: DIRECTION_LEFT,
            toggleValue: new ToggleValue(width, direction ? direction === "right" : false)
        }
    }

    componentDidMount() {
        const timer = setInterval(() => {
            const {x, width} = this.props;
            const offset = this.state.toggleValue.getNext();
            const left = x + (width / 2 + offset);

            this.setState({
                animateFrame: offset % 15 === 0 ? !this.state.animateFrame : this.state.animateFrame,
                posX: left,
                direction: this.state.toggleValue.getState() ? DIRECTION_RIGHT : DIRECTION_LEFT
            })
        }, this.props.interval || DEFAULT_INTERVAL);

        this.setState({
            timer: timer
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
        this.setState({
            timer: null
        })
    }

    render() {
        const {size, x, y, width} = this.props;
        const {posX, direction, color, animateFrame} = this.state;
        const fy = size ? size : 8;
        const fx = fy / 2;

        return (
            <svg width={250} height={150} style={{position: "absolute", bottom: 0}}
                 transform={`translate(${posX + (direction === DIRECTION_LEFT ? -width / 2 - x / 2 : 0)}, ${y || 0}) ${direction === DIRECTION_LEFT ? "scale(-1, 1)" : ""}`}>
                {
                    animateFrame &&
                    <g>
                        <text x={fx * 3} y={fy} fill={color} fontSize={fy}>oooooooooo</text>
                        <text x={fx} y={fy * 2} fill={color} fontSize={fy}>ooooooooooooooo</text>
                        <text x={0} y={fy * 3} fill={color} fontSize={fy}>ooooooooooooooooo</text>
                        <text x={0} y={fy * 4} fill={color} fontSize={fy}>ooooooooooooooooooooooooooo</text>
                        <text x={0} y={fy * 5} fill={color} fontSize={fy}>oooooooooooooooooooooo</text>
                        <text x={fx * 3} y={fy * 6} fill={color} fontSize={fy}>oooooooooooooooo</text>
                        <text x={fx * 7} y={fy * 7} fill={color} fontSize={fy}>oooooooo</text>
                        <text x={fx * 24} y={fy} fill={color} fontSize={fy}>o</text>
                        <text x={fx * 23} y={fy * 2} fill={color} fontSize={fy}>ooo</text>
                        <text x={fx * 23} y={fy * 3} fill={color} fontSize={fy}>ooooo</text>
                    </g>
                }
                {
                    !animateFrame &&
                    <g>
                        <text x={fx * 4} y={fy} fill={color} fontSize={fy}>oooooooooo</text>
                        <text x={fx} y={fy * 2} fill={color} fontSize={fy}>ooooooooooooooo</text>
                        <text x={0} y={fy * 3} fill={color} fontSize={fy}>ooooooooooooooooo</text>
                        <text x={0} y={fy * 4} fill={color} fontSize={fy}>oooooooooooooooooooooo</text>
                        <text x={0} y={fy * 5} fill={color} fontSize={fy}>ooooooooooooooooooooooo</text>
                        <text x={fx * 2} y={fy * 6} fill={color} fontSize={fy}>ooooooooooooooo</text>
                        <text x={fx * 5} y={fy * 7} fill={color} fontSize={fy}>oooooooo</text>
                        <text x={fx * 27} y={fy * 2} fill={color} fontSize={fy}>o</text>
                        <text x={fx * 25} y={fy * 3} fill={color} fontSize={fy}>oo</text>
                        <text x={fx * 28} y={fy * 6} fill={color} fontSize={fy}>oo</text>
                    </g>
                }
            </svg>
        );
    }
}