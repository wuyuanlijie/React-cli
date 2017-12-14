// // main.js
// const greeter = require('./Greeter.js');

// document.querySelector('#root').appendChild(greeter());

import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter.jsx'
import './main.css'

ReactDOM.render(<Greeter />, document.getElementById('root'));
