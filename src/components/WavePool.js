import React, {Component} from 'react';
import {Wave} from "./Wave";
import TextDolphin from "./TextDolphin";


export default class WavePool extends Component {
    render() {
        const {width, height} = this.props;

        return (
            <div>
                <Wave width={width} height={height} cnt={3} color={"#ff122b"} opacity={0.2} interval={35}/>
                <Wave width={width} height={height} cnt={3} color={"#2dfa0c"} opacity={0.3} interval={60}/>
                <Wave width={width} height={height} cnt={2} color={"#2034ef"} opacity={0.4} interval={45}/>
                <Wave width={width} height={height} cnt={3} color={"#302b6e"} opacity={0.75} interval={80}/>
                <TextDolphin x={0} y={95} width={60} size={2} interval={80} direction={"right"}/>
                <TextDolphin x={width*0.1} y={10} width={600} size={5} interval={35}/>
                <TextDolphin x={width*0.25} y={80} width={600} size={3} interval={50}/>
                <TextDolphin x={width*0.5} y={30} width={600} size={2} interval={50} />
                <TextDolphin x={width} y={45} width={600} size={4} interval={80} direction={"right"}/>
            </div>
        );
    }
}

//
