import { GiMusicSpell } from 'react-icons/gi';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Headers, SearchInput } from './component/Headers';
import Lyric from './component/Lyric'
import Player from './component/Player';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import { Layout } from 'antd';
import counter from './reducers'
import { createStore } from 'redux'
const store = createStore(counter)



class App extends Component {
    
    render() {
        const { Header, Footer, Sider, Content } = Layout;
        return (
            <div>
                <Layout>
                        
                    <Layout>
                        <Header>
                            <GiMusicSpell className='giMusicSpell' />
                            <div className='appTitle'>
                                NeteaseCloudMusicApi
                            </div>
                            <SearchInput getResult={()=> store.dispatch({type:'?'})}/>
                            <Login className="loginButton"/>
                        </Header>
                        <Layout>
                            <Sider>Sider</Sider>
                            <Content>
                                <Headers  />
                                <Lyric />
                            </Content>
                        </Layout>
                        <Footer>
                            <Player/>
                        </Footer>
                    </Layout>

                </Layout>
                {/* <Login/> */}
               
                {/* <div className='header'>
                    <Search />
                </div> */}
            </div>
        )
    }
}




ReactDOM.render(
    <App />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
