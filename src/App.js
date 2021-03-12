import './App.css';
import React, { Component } from 'react';
import Left from './Left.js';
import Right from './Right.js';
import Middle from './Middle.js';
import Header from './components/Header.js';
import ChatButton from './ChatButton.js';

export class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* This is the header */}
        <Header />

        {/* This is the left side of the page */}
        <Left />

        {/* This is the middle side of the page */}
        <Middle />

        {/* This is the right side of the page */}
        <Right />

        {/* this is the chat button */}
        <ChatButton />
      </div>
    )
  }
}

export default App
