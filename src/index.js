import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//create Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Apple() {
  return (
    <div>
    <Welcome name="Nitin"/>
    <Welcome name="Kumar"/>
    </div>
  );

}

const element = <Welcome name="Nitin" />;

  //put component into html page

  ReactDOM.render(
    <Apple/>,
    document.getElementById('root')
  );
