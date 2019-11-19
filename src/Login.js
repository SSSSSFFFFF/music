import React, { Component } from 'react';
import axios from 'axios';
import host from './global'
import { Button } from 'antd';
// const request = require('request');
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mvUrl: '',

        };
    }
    loginApi(){
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
                <Button onClick={this.loginApi} type="primary">登录</Button>
             </div>
        );
    }
}

export default Login