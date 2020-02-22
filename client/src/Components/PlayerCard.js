import React, { Component } from 'react'
import './Style.css';

class PlayerCard extends React.Component {
     constructor(){
            super();
            this.state = [];
        }

    render() {
       
        return (
            <div className ="player-card">
                <p>Name: {this.props.element.name}</p>
                <p>Country: {this.props.element.country}</p>
                <p>ID: {this.props.element.id}</p>        
            </div>
        )
    }
}

export default PlayerCard;


