// let config = require('./config.json')

// // Greeter.js  webpack 已经可以内置处理json的文件
// module.exports = function () {
//   let greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// }

import React, { Component } from 'react';
import config from './config.json';
import './style/greeter.css';


class Greeter extends Component {
  render () {
    return (
      <div className="app">
        <h1>搭建平台lijie</h1>
        { config.greetText }
      </div>
    )
  }
}

export default Greeter

