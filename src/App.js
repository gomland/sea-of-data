import React, {Component} from 'react';
import "./App.css";
import WavePool from "./components/WavePool";
import TextRain from "./components/TextRain";
import {Card, Typography, Input, Button} from "antd";

const WORDS = ["Test", "User Interface", "Keyword", "React", "Gomland", "Management", "Ant.Design", "BigData"];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            measureFinished: false
        }
    }

    refCallback = element => {
        if (element) {
            this.setState({
                width: element.getBoundingClientRect().width,
                height: element.getBoundingClientRect().height,
                measureFinished: true
            });
        }
    }

    render() {
        const {width, height, measureFinished} = this.state;

        return (
            <div style={{position: "absolute", width: "100%", height: "100%", background: "#01021e"}}
                 ref={this.refCallback}>
                <div style={{position: "absolute"}}>
                    {
                        measureFinished && <TextRain width={width} height={height} words={WORDS}/>
                    }
                </div>

                <div style={{display: "grid", gridTemplateColumns: "60% 40%"}}>
                    <div style={{marginTop: "25%", textAlign: "center"}}>
                        <Typography style={{color: "#fff", fontSize: "5em", fontWeight: "bold"}}>React UI Test</Typography>
                        <Typography style={{color: "#fff", fontSize: "2em",paddingTop:50}}>Created by gomland</Typography>
                    </div>
                    <div>
                        <Card style={{width: "60%", marginTop: "30%"}}>
                            <Typography>
                                <p>안녕하세요. 데이터 갬성 UI를 만들어 보았습니다.</p>
                                <p>이 부분은 antd의 Card를 사용한 부분입니다.</p>
                            </Typography>
                            <Typography style={{marginTop: 30}}>
                                아이디
                            </Typography>
                            <Input placeholder={"Enter your name"}/>
                            <Typography style={{marginTop: 30}}>
                                패스워드
                            </Typography>
                            <Input placeholder={"Enter your password"}/>
                            <Button type="primary" style={{width: "100%", height: 50, marginTop: 30}}>로그인</Button>
                        </Card>
                    </div>
                </div>

                <div style={{position: "absolute", width: "100%", height: 350, bottom: 0}}>
                    {
                        measureFinished && <WavePool width={width} height={350}/>
                    }
                </div>
            </div>
        );
    }
}
