import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from './components/pages/Home';
import Splash from './components/pages/Splash';
import Create from './components/pages/Create';
import Media from './components/pages/Media';
import axios from 'axios';

import socketIOClient from "socket.io-client";
const URL = "http://10.10.11.51:5000";

function App() {

  const [response, setResponse] = useState("");
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);


  window.ethereum.on("accountsChanged", accounts => {
    if (accounts.length > 0) {
      console.log('Account connected: ${accounts[0]}');
      sessionStorage['account'] = accounts[0]
    } else {
      axios.post("https://10.10.11.51:5000/delete",
      ).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });
      sessionStorage['account'] = ''
      console.log("Account disconnected");
    }
  });

=======
function App() {
>>>>>>> parent of 753a129 (finish)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
