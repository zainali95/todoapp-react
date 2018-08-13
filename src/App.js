import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav.js" 
import {  Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Route>
      <div className="App">
          <Nav/>
      </div>
      
      </Route>
    );
  }
}

export default App;
