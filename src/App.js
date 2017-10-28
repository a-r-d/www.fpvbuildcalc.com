import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

import Homepage from './container/Homepage'
import About from './container/About'
import Disqus from './components/lib/disqus'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Toolbar style={{height: '7em', backgroundColor: '#222'}}>
              <ToolbarGroup firstChild={true}>
                <img src="/images/cyclone.png" className="App-logo" alt="logo" />
                <ToolbarSeparator style={{margin: '1em'}}  />
                <h1 className="App-title">FPV Build Calculator</h1>
              </ToolbarGroup>
              <ToolbarGroup firstChild={true}>
                <Link className='HeaderLink' to="/">Home</Link>
                <ToolbarSeparator style={{margin: '1em'}} />
                <Link className='HeaderLink' to="/about">About</Link>
              </ToolbarGroup>
            </Toolbar>
          </header>
          <div className="MainContentContainer">
            <Route exact path="/" component={Homepage}/>
            <Route path="/about" component={About}/>
          </div>
          <footer>
            <Disqus />
            <div>
              &copy; Aaron Decker 2017 - Contributors welcome, Suggestions Sought | info@fpvbuildcalc.com
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App
