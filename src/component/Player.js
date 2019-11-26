import React, { Component } from 'react';
// import '../index.css';
import './Player.css';
// import counter from '../reducers'
// import { createStore } from 'redux'
// const store = createStore(counter)

// const request = require('request');
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'todo': '',
        };
    }
    render() {
        return (
             <div>
                <audio controls="controls">
                    <source src="" />1
                </audio>
             </div>
        );
    }
}

export default Player