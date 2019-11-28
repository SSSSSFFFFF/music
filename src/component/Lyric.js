import React, { Component } from 'react';
import '../index.css';
import './Lyric.css';
import { store } from './Headers'

class Lyric extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mvUrl: '',
        };
    }
    componentDidMount(){
        console.log(store.getState());
        store.subscribe(listener);
        // var that = this;
        function listener() {
            if (store.getState().type === "musicUrl"){
                let id = store.getState().musicId
            }
        }
    }
    render() {
        return (
            <div className="musicLyric">1</div>
        );
    }
}
export default Lyric