import React, { Component } from 'react';
import './../App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Home.js';
import About from './About.js';
import NoMatch from './NoMatch.js';
import TodoApp from './TodoApp';



class Nav extends Component {
  render() {
    return (
      <div className="Nav">
      <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="/">TodoApp</a>
    <ul className="nav navbar-nav  ml-auto ">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
        </li>
    </ul>
</nav>

        <Switch>
  <Route exact path='/' component={TodoApp}/>
  <Route path='/about' component={About}/>
  <Route path='/contact' component={Home}/>
  {/* when none of the above match, <NoMatch> will be rendered */}
  <Route component={NoMatch}/>
</Switch>

      </div>
    );
  }
}

export default Nav;
