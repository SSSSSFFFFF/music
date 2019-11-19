import React, { Component } from 'react';
import './index.css';
import './Headers.css';

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
            <div>
               <a href={this.state.mvUrl}>MV</a>
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
        fetch('http://139.196.102.62:3000/search?keywords=' + inputValue).then(res => {
            return res.json()
        }).then(res => {
            console.log(res.result)
            this.setState({
                search: res.result,
            })
        })
    }
    toSearch(words) {
        if (this.state.inputValue && typeof (words) !== 'string') {
            this.fetchApi(this.state.inputValue)
        } else if (typeof (words) == 'string') {
            this.fetchApi(words)
        }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.inputChange.bind(this)} placeholder='五月天' />
                <button onClick={this.toSearch.bind(this)}>搜索</button>
            </div>
        );
    }
}
class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            inputValue: '',
        };
    }
    
    fetchApi(inputValue){
        fetch('http://139.196.102.62:3000/search?keywords=' + inputValue).then(res => {
            return res.json()
        }).then(res => {
            this.setState({
                search: res.result,
            })
        })
    }
    toSearch(words){
        if (this.state.inputValue && typeof (words) !== 'string'){
            this.fetchApi(this.state.inputValue)
        } else if (typeof (words) == 'string'){
            this.fetchApi(words)
        }
    }
    componentDidMount() {
        this.toSearch('五月天')
    }
    render() {
        let result = []
        if (this.state.search) {
            console.log(this.state.search.songs)
            this.state.search.songs.forEach(i => {
                result.push(
                    <div className='flex' key={i.id}>
                        <div>
                            <a href={'https://music.163.com/song/media/outer/url?id=' + i.id + '.mp3'}>{i.name}</a>
                        </div>
                        <div>
                            {i.artists[0].name}
                        </div>
                        {i.mvid !== 0 ? <MV mvid={i.mvid}/> : ''}
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
            </div>
        )
    }
}
export { Headers, SearchInput}