import React from 'react';
import './App.css';
import PlayerList from './Components/PlayerList';
import './index.css';
import NavBar from './Components/NavBar';
// import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar/>
      <div className="wrapper">
    <PlayerList />
        </div>
        </>
     
  )

  }
}

export default App;

