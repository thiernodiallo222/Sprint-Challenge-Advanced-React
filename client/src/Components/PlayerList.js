import React, { Component } from 'react'
import PlayerCard from './PlayerCard';
import axios from 'axios';

export class PlayerList extends React.Component {

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
       
            {this.state.players.map((player, index) =>
                <div className="player-card" >
                    <PlayerCard id={index} whatever={player} />
                </div>
    )}
      
      </div>
    )
  }
   
            
}

export default PlayerList;


//  constructor() {
//         super();
//         this.state = [];
//     }

//     render() {
//         return (
//             <div className ='player-card'>

//                 <PlayerCard element={this.props.item} />
//                 
//             </div>
//         )
//     }