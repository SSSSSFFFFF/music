import React, { Component } from 'react';
import '../index.css';
import './Lyric.css';
import { store } from './Headers'
import {AxiosGet} from './Axios'
class Lyric extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mvUrl: '',
            lyrics:'',
        };
    }
    
    componentDidMount(){
        console.log(store.getState());
        store.subscribe(listener);
        var that = this;
        function listener() {
            if (store.getState().type === "musicUrl"){
                let id = store.getState().musicId
               AxiosGet('/lyric?id=' + id).then(res=>{
                    console.log(res);
                    let lrc = res.lrc.lyric
                    
                //    console.log(lrc.replace(new RegExp('\n'), '<br>['));
                    that.setState({
                        lyrics: lrc
                    })
                   let audio = document.querySelector("#music")
                   setInterval(() => {
                       console.log(audio.currentTime);
                   }, 1000);
                })
            }
        }
    }
    render() {
        return (
            <div className="musicLyric">
                <pre className="musicLyricPre">{this.state.lyrics}</pre>
                
            </div>
        );
    }
}
export default Lyric