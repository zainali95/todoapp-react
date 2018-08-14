import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav.js" 
import {  Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Route>
      <div className="App">
          <Nav/>
      </div>
      
      </Route>
      </Provider>
    );
  }
}

export default App;
