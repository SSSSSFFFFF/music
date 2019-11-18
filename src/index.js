import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/* <div className='header'>
                    <Search />
                </div> */}
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
