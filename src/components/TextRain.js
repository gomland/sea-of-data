import React, {Component} from 'react';
import { getRandomNumber, getRandomColor } from "./RandomTool";


export default class TextRain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        const timer = setInterval(() => {
            if (Math.floor(Math.random() * 100) < 10) {
                this.setState({
                    items: this.state.items.concat(this.createItem())
                });
            }
            this.moveItem();
        }, 50);

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

    createItem = () => {
        const {words, width} = this.props;
        const word = words[getRandomNumber(words.length)];
        const x = getRandomNumber(width);
        const fontSize = getRandomNumber(20) + 6;
        const color = getRandomColor(0.35);
        return [{x: x, y: -30, word: word, fontSize: fontSize, color: color}];
    }

    moveItem = () => {
        const {height} = this.props;
        const items = this.state.items
            .filter(item => (height * 0.8 > item.y))
            .map((item) => (
                Object.assign(item, {y: item.y + 2})
            ));

        this.setState({
            items: items
        });
    }

    getRandomNumber = (range) => {
        return Math.floor(Math.random() * range);
    }

    render() {
        const {width, height} = this.props;

        return (
            <svg width={width} height={height}>
                {
                    this.state.items.map((item, index) => (
                        <g transform={`translate(${item.x},${item.y}) rotate(90)`} key={index}>
                            <text x={0} y={0} fontSize={item.fontSize} fill={item.color}>{item.word}</text>
                        </g>
                    ))
                }
            </svg>
        );
    }
}