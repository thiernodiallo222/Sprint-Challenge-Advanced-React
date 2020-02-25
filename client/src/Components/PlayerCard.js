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
                <p className="paragraph" >ID: {this.props.whatever.id}</p> 
                <p className="paragraph" >Name: {this.props.whatever.name}</p>
                <p className="paragraph" >Country: {this.props.whatever.country}</p>
                     
            </div>
        )
    }
}

export default PlayerCard;


