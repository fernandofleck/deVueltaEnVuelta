import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Tempo from './components/Tempo';
import Controls from './components/Controls';
import Progress from './components/Progress';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Tempo/>
      <Controls/>
      <Progress/>
    </div>
  );
}

export default App;