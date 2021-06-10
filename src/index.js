import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common.css';

// import App from './App';
import Car from './my-folder/car';
import MyEvent from './my-folder/event';


import reportWebVitals from './reportWebVitals';


/**
 * Event Management of Click/Focus Event
 */
 ReactDOM.render(
  <React.StrictMode>
     <MyEvent text="Saiful" />
   </React.StrictMode> 
  ,document.getElementById('event'));


ReactDOM.render(<Car brand="Toyota" />,document.getElementById('another-root'));


const myElement = React.createElement('h1',{},'Hello Bangladesh. How are u?');
ReactDOM.render(myElement,document.getElementById('third'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
