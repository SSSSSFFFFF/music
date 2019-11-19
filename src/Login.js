import React, { Component } from 'react';
import axios from 'axios';
import host from './global'
console.log(host);
// const request = require('request');
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mvUrl: '',

        };
    }
    loginApi(){
        console.log(1);
        axios.get(host + '/login/cellphone', {
            params: {
                phone: "18701701106",
                password: "Sf960928"
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }
    render() {
        return (
             <div>
                 <div onClick={this.loginApi}>
                    登录
                 </div>
                 
             </div>
        );
    }
}

export default Login