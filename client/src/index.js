import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var oldConsole = window.console.log;
var console = {};
console.log = function(e){
    oldConsole("I'm here " + e);
};


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
