import React, {Component} from 'react';

class Tempo extends Component{

    

    render(){
        return (
            <div>
                <form>
                    <label>Minutos por vuelta: </label>
                    <input type='text' name='minutos' placeholder='0'/>
                    <label>Vueltas: </label>
                    <input type='text' name='vueltas' placeholder='0'/>
                    <button>Comenzar</button>
                </form>
            </div>
        );
    };
};

export default Tempo;