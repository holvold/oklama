import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Copyright from './Copyright'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <div className="Start-page">
      <div className="App-component" >
        <App />
      </div>
      <div className="Copyright-component">
        <Copyright />
      </div>
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
