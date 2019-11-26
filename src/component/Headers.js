import { Input, Icon, Pagination   } from 'antd';
import React, { Component } from 'react';
import '../index.css';
import './Headers.css';
import counter from '../reducers'
import { createStore } from 'redux'
const store = createStore(counter)

// const request = require('request');
class MV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mvUrl: '',
            
        };
    }
    componentDidMount(){
        fetch('http://139.196.102.62:3000/mv/URl?id=' + this.props.mvid).then(res => {
                return res.json()
            }).then(res => {
                this.setState({
                    mvUrl: res.data.url,
                })
            })
           
    }
    render(){
        return (
            <div className='mv'>
                <a href={this.state.mvUrl}><Icon type="video-camera" /></a>
            </div>
        )
    }
}
class SearchInput extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            search: '',
            inputValue: '',
        };
    }
    inputChange(e) {
       
        this.setState({
            inputValue: e.target.value,
        })

    }
    fetchApi(inputValue) {
        fetch('http://139.196.102.62:3000/search?keywords=' + inputValue+'&offset=0&limit=25').then(res => {
            return res.json()
        }).then(res => {
            console.log(res.result)
            store.dispatch({ 
                type: res.result,
                inputValue: inputValue
            })
            this.setState({
                search: res.result,
            })
        })
    }
    toSearch(words) {
        console.log(words);
        if (words) {
            this.fetchApi(words)
        } 
    }
    render() {
        const { Search } = Input;
        return (
            <div>
                <Search
                    placeholder="五月天"
                    onSearch={value => this.toSearch(value)}
                    style={{ width: 200 }}
                />
            </div>
        );
    }
}


class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            inputValue: '五月天',
            total:0
        };
    }
   
    fetchApi(inputValue,page){
        console.log(inputValue, page);
        fetch('http://139.196.102.62:3000/search?keywords=' + inputValue + '&offset=' + page+'&limit=25').then(res => {
            return res.json()
        }).then(res => {
            console.log(res.result);
            this.setState({
                search: res.result,
                total: res.result.songCount
            })
        })
    }
    toSearch(words){
         this.fetchApi(words,0)
    }
    componentDidMount() {
        this.toSearch('五月天')
        store.subscribe(listener);
        var that = this;
        function listener() {
            console.log(store.getState());
            that.setState({
                search: store.getState().type,
                total: store.getState().type.songCount,
                inputValue: store.getState().inputValue
            })
        }
        
    }
    pageChange(page, pageSize){
        console.log(page, pageSize);
        this.fetchApi(this.state.inputValue, 25*(page-1))
    }
    render() {
        let result = [
            <div className='flex musicHeader' key='1'>
                <div className='musicName'>
                    音乐标题
                </div>
                <div className='mv'></div>
                <div className='artistsName '>
                    歌手
                </div>
                <div className='album'>
                    专辑
                </div>
            </div>
        ]
        
        if (this.state.search) {
            console.log(this.state.search.songs)
            this.state.search.songs.forEach(i => {
                result.push(
                    <div className='flex' key={i.id}>
                        <div className='musicName'>
                            <a href={'https://music.163.com/song/media/outer/url?id=' + i.id + '.mp3'} title={i.name}>{i.name}</a>
                            
                        </div>
                        {i.mvid !== 0 ? <MV mvid={i.mvid} /> : <div className='mv'></div>}
                        <div className='artistsName' title={i.artists[0].name}>
                            {i.artists[0].name}
                        </div>
                        <div className='album' title={i.album.name}>
                            {i.album.name}
                        </div>
                    </div>
                )
            });

        }


        return (
            <div>
                {/* <div>
                    <input type="text" onChange={this.inputChange.bind(this)} placeholder='五月天' />
                    <button onClick={this.toSearch.bind(this)}>搜索</button>
                </div> */}
                {result}
                <Pagination className='searchPag' defaultCurrent={1} total={this.state.total} pageSize={25} onChange={(page, pageSize)=>this.pageChange(page, pageSize)} />
            </div>
        )
    }
}
export { Headers, SearchInput}