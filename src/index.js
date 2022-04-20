import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXtSB3I5ZJHv8Gkhm9zcC7uj788sfNDdo",
  authDomain: "baires-sneakers.firebaseapp.com",
  projectId: "baires-sneakers",
  storageBucket: "baires-sneakers.appspot.com",
  messagingSenderId: "676728532410",
  appId: "1:676728532410:web:3a48070bb08ebcc9fbc183"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
