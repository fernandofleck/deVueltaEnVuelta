import React, {Component} from 'react';
import Controls from './Controls';
import Progress from './Progress';

class Tempo extends Component{

    constructor(props){
        super(props);
        this.state = {
            time: {},
            secondsInitial: props.minutos*60,
            seconds: props.minutos*60,
            vueltas: props.vueltas - 1
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
 
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
 
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
 
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
 
        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }
 
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }
 
    startTimer() {
        if (this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }
 
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) {
            if (this.state.vueltas===0)
            {
                clearInterval(this.timer);
            }else{
                let vueltas = this.state.vueltas-1;
                let reinicia = this.state.secondsInitial;
                this.setState({seconds: reinicia, vueltas: vueltas});
                this.timer=0;
            }
        }
    }
 
    render() {
        return(
            <div>
                <button onClick={this.startTimer}>Start</button>
                m: {this.state.time.m} s: {this.state.time.s}
                <br/>
                <br/>
                <Controls />
                <Progress />
            </div>
        );
    }
};

export default Tempo;