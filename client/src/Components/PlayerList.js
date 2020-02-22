import React, { Component } from 'react'
import PlayerCard from './PlayerCard';

export class PlayerList extends React.Component {

    constructor() {
        super();
        this.state = [];
    }

    render() {
        return (
            <div className ='player-card'>

                <PlayerCard element={this.props.item} />
                {/* <p>Name: {this.props.item.name}</p> */}
            </div>
        )
    }
            
}

export default PlayerList;


//  constructor() {
//         super();
//         this.state = {
//            players: []
//         }
//     }


// constructor() {
//     super(); 
//     this.state ={}
//   }

//     render() {
//         return (
//             <div>
//            <Card stuff = {this.props.data}/>
//             </div>
//         )
//     }
