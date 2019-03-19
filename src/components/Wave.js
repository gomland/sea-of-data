import React, {Component} from 'react';
import ToggleValue from "./ToggleValue";
import { getRandomNumber } from "./RandomTool";


const DEFAULT_INTERVAL = 35;

export class Wave extends Component {
    constructor(props) {
        super(props);

        const {cnt, width} = this.props;

        const data = [];
        let waveX = 0;
        for (let i = 0; i < (cnt ? cnt : 0); i++) {
            data.push({
                width: i < cnt - 1 ? Math.min(Math.max(getRandomNumber(width - waveX), width * 0.2), width / cnt) : width - waveX
            });
            waveX += data[i].width;
        }

        this.state = {
            toggleValue: new ToggleValue(getRandomNumber(50, 20)),
            data: data
        }
    }

    componentDidMount() {
        const timer = setInterval(() => {
            this.setState({})
        }, this.props.interval ? this.props.interval : DEFAULT_INTERVAL);

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
        const {cnt, width, height, color, opacity} = this.props;
        const {data, toggleValue} = this.state;

        if (data.length === 0) {
            return <div></div>;
        }

        const waveHeight = height / 2;

        let waveX = 0;
        let path = [`M ${waveX},${waveHeight} `];

        for (let i = 0; i < cnt; i++) {
            const waveWidth = data[i].width / 4;
            path.push(`Q ${waveX += waveWidth},${waveHeight + toggleValue.getNext()}`);
            path.push(`${waveX += waveWidth},${waveHeight}`);
            path.push(`Q ${waveX += waveWidth},${waveHeight - toggleValue.getNext()}`);
            path.push(`${waveX += waveWidth},${waveHeight}`);
        }

        path.push(`L ${width},${height}`);
        path.push(`L ${0},${height}`);
        path.push(`L ${0},${waveHeight}`);

        return (
            <svg width={width} height={height}
                 style={{position: "absolute", opacity: opacity ? opacity : 0.2, zIndex: 0}}>
                <g>
                    <path
                        d={path.join(" ")}
                        stroke="none"
                        fill={color}
                    />
                </g>
            </svg>
        )
    }
}