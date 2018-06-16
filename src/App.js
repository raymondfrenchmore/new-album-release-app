import React, { Component } from 'react';
import logo from './logo_black.png';
import './App.css';
import Search from './Search/Search';
import Results from './Results/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releases: []
    };
  } 

  getNewReleases = (artistName) => {
    // console.log("getNewReleases called");
    fetch(`https://api.discogs.com/database/search?type=release&year=${new Date().getFullYear()}&artist=${artistName}&per_page=3&page=1`, {
      method: "GET",
      headers:
        {
          "Authorization": "Discogs token=RbvwWnsEnRskVDRIDcrTukupSbgovHnfxIbFPEgZ"
        }
    })
    .then(response => response.json())
/*     .then(json => {
      console.log(json.results);
      return json;
     }) */
    .then(json => this.setState((prevState, props) => { 
     return {
       releases: json.results
     }
    }));
  }

  render() {
    return (
      <div className="App">
          <div className="container">
            <div className="jumbotron">
                <h1>New Releases</h1>          
                <Search getNewReleases={this.getNewReleases} />
                <Results releases={this.state.releases} />
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
