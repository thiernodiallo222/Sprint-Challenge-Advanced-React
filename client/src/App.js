import React from 'react';
import './App.css';
import PlayerList from './Components/PlayerList';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  
  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res);
        const data = res.data;
        this.setState({players: data});
      })
      .catch(err => {
        console.log("Outch !!! an error occurred !", err);
      });
  }


  render() {
      
    return (
      <div className="App">
        <h1>Players</h1>
        {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
        <div>
          
        </div>
        {this.state.players.map((player, index) =>  <PlayerList id ={index} item={player} />
    )}
      
      </div>
    )
  }
}

export default App;

