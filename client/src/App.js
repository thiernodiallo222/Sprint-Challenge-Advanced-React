import React from 'react';
import './App.css';
import PlayerList from './Components/PlayerList';
// import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <div>
    <h1>Players:</h1>
    <PlayerList />
      </div>
     
  )

  }
}

export default App;

