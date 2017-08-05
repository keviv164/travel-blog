import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Header from './src/components/Header/Header.js';
require('./src/components/Header/styles.header.scss');
require('./src/components/styles/base.scss');

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Header />, document.getElementById('header'));