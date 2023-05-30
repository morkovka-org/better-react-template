import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Comment this if you don't need 'reportWebVitals()'. Hey! An shortcut available in VSCode! 'Cmd + /' to instantly comment selected text!
import reportWebVitals from './reportWebVitals';
// Comment this if you don't need 'reportWebVitals()'. Hey! An shortcut available in VSCode! 'Cmd + /' to instantly comment selected text!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
