import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Header from './my-folder/header'

import reportWebVitals from './reportWebVitals';

const myTable = (
  <table>
    <tr>
      <th>Name</th>
      <th>Address</th>
    </tr>
    <tr>
      <td>Saiful Islam</td>
      <td>Rajshahi, Bangladesh</td>
    </tr>
    <tr>
      <td>Saiful Islam 1</td>
      <td>Rajshahi, Bangladesh</td>
    </tr>
    <tr>
      <td>Saiful Islam 2</td>
      <td>Rajshahi, Bangladesh</td>
    </tr>
    <tr>
      <td>Saiful Islam 3</td>
      <td>Rajshahi, Bangladesh</td>
    </tr>
    
  </table>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Header />
//     <App name="Saiful"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <p>Welcome To you. How are u.</p>
    <App name="Saiful Islam"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
