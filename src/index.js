import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//create Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Nitin" />;

  //put component into html page

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
