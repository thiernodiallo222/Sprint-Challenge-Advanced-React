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
                <p className="paragraph" >Name: {this.props.whatever.name}</p>
                <p className="paragraph" >Country: {this.props.whatever.country}</p>
                <p className="paragraph" >ID: {this.props.whatever.id}</p>        
            </div>
        )
    }
}

export default PlayerCard;


