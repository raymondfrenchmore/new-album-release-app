import React, { Component } from 'react';
import logo from './logo_black.png';
import './App.css';

import Search from './Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
            <div className="jumbotron">
                <h1>New Releases</h1>          
                <Search />
            </div>
            <div id="footer">
                <p>Data provided by <a href="https://www.discogs.com" target="_blank" rel="noopener noreferrer"><img src={logo} alt="logo" /></a></p>
            </div>            
        </div>       
      </div>
    );
  }
}

export default App;
