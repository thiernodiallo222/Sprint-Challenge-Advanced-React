import React, { Component } from 'react'
import './Style.css';

class PlayerCard extends React.Component {
     constructor(){
            super();
            this.state = [];
        }

    render() {
       
        return (
            <div>
                <p>Name: {this.props.whatever.name}</p>
                <p>Country: {this.props.whatever.country}</p>
                <p>ID: {this.props.whatever.id}</p>        
            </div>
        )
    }
}

export default PlayerCard;


