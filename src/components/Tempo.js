import React, {Component} from 'react';
import Controls from './Controls';
import Progress from './Progress';

class Tempo extends Component{

    constructor(props){
        super(props);
        this.state = {
            time: {},
            minutesInitial: props.minutos,
            minutes: props.minutos,
            secondsInitial: props.minutos*60+props.segundos,
            seconds: props.minutos*60+props.segundos,
            vueltasInitial: props.vueltas,
            vueltas: props.vueltas,
            add: false
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
 
    secondsToTime(secs, mins){ 
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
 
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
 
        let obj = {
            "m": minutes,
            "s": seconds
        };
        return obj;
    }
 
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds, this.state.minutes);
        this.setState({ time: timeLeftVar });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
 
    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }
 
    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        
        if (seconds === 0) {
            let beepbeep = document.getElementById('beep');
            beepbeep.play();
            let vueltas = this.state.vueltas-1;
            let reinicia = this.state.secondsInitial;
            this.setState({seconds: reinicia, vueltas: vueltas});
        }

        if(this.state.vueltas===0){
            let beeepbeep = document.getElementById('beeep');
            beeepbeep.play();
            clearInterval(this.timer);
        }
    }
 
    render() {
        if (this.state.vueltas===0)
        {
            return(
                <div>
                    <h2>¡¡¡Has Finalizado!!!</h2>
                    <audio id='beeep'>
                        <source src='./sounds/beepLong.mp3'></source>
                    </audio>
                </div>
            );
        }else{
            return(
                <div>
                    <button onClick={this.startTimer}>Start</button>
                    <h1>m: {this.state.time.m} s: {this.state.time.s}</h1>
                    <br/>
                    <h2>Vuelta: {this.state.vueltas} </h2>
                    <br/>
                    <audio id='beep'>
                        <source src='./sounds/beepShort.mp3'></source>
                    </audio>
                    <button>
                        <source></source>
                        <img src='./icon/add.svg' alt='Sumar'></img>
                    </button>
                    <Controls />
                    <Progress sumar={this.state.add}/>
                </div>
            );
        }
    }
};

export default Tempo;