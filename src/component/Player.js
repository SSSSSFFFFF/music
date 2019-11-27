import React, { Component } from 'react';
import './Player.css';
import {store}  from './Headers'

// const request = require('request');
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'src': '',
        };
    }
    componentDidMount() {
        store.subscribe(listener);
        var that = this;
        function listener(){
            if (store.getState().type === "musicUrl"){
                console.log(store.getState().musicUrl);
                that.setState({
                    src: store.getState().musicUrl
                })
            }
        }
    }
    render() {
        return (
             <div>
                <audio controls="controls">
                    <source src={this.state.src} />1
                </audio>
             </div>
        );
    }
}

export default Player