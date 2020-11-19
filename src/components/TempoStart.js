import React, {Component} from 'react';
import Tempo from './Tempo';

class TempoStart extends Component{

    constructor(props) {
        super(props);
        this.state = {minutos: '0', segundos:'0', vueltas: '0', start: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    handleSubmit(event) {
        this.setState({start: true});
        event.preventDefault();
    }

    render(){
        if(this.state.start){
            return(
                <div>
                    <Tempo minutos={this.state.minutos} segundos={this.state.segundos} vueltas={this.state.vueltas}/>
                </div>
            );
        }else{
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <label>Minutos por vuelta: </label>
                        <input type='text' name='minutos' placeholder='0' value={this.state.minutos} onChange={this.handleChange}/>
                        <br/>
                        <label>Segundos por vuelta: </label>
                        <input type='text' name='segundos' placeholder='0' value={this.state.segundos} onChange={this.handleChange}/>
                        <br/>
                        <label>Vueltas: </label>
                        <input type='text' name='vueltas' placeholder='0' required value={this.state.vueltas} onChange={this.handleChange}/>
                        <br/>
                        <input type='submit' value='Comenzar'/>
                    </form>
                </div>
            );
        }
    };
};

export default TempoStart;