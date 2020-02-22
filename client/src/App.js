import React from 'react';
import './App.css';
import PlayerList from './Components/PlayerList';
import './index.css';
// import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
    <PlayerList />
      </div>
     
  )

  }
}

export default App;

