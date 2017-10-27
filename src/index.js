import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//create Component

const element = ( <h1>Hi there</h1> );

//put component into html page
ReactDOM.render(
  element,
  document.getElementById('root')
);
