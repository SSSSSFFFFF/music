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
    secondsFormat(sec){
        let hour = Math.floor(sec / 3600);
        let minute = Math.floor((sec - hour * 3600) / 60);
        let second = Math.floor(sec - hour * 3600 - minute * 60);
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + Math.floor(second);
        }
        return minute + ":" + second;
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
                   let lrcArr = lrc.match(new RegExp(/\[.+?\]/, "g"))
                   console.log(lrcArr);
                //    console.log(lrc.replace(new RegExp('\n'), '<br>['));
                    that.setState({
                        lyrics: lrc.replace(new RegExp(/\[.+?\]/, "g"), '')
                    })
                   let audio = document.querySelector("#music")
                   let length = 0
                    setInterval(() => {
                       for (let i = 0; i < lrcArr.length; i++) {
                           const e = lrcArr[i];
                           if (e.slice(1, 6) === that.secondsFormat(audio.currentTime) ){
                               console.log(e.slice(1, 6));
                               document.querySelector(".musicLyricPre").style.transform = 'translateY(' + length + 'px)'
                               length = length - 24.1;
                           }
                       }
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