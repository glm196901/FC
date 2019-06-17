import React from 'react';
import ReactDOM from 'react-dom';
import '../../style/index.scss'
import './index.css';
import App from './App';
import initReactFastclick from 'react-fastclick';
initReactFastclick();

ReactDOM.render(<App />, document.getElementById('root'));
