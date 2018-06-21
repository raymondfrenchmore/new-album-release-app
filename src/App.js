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
      console.log("App.getNewReleases called");
      const emptySearch = "Search cannot be empty";
      if (artistName === "") {
        console.log(emptySearch);
        alert(emptySearch);
        return emptySearch;
      } 
      else 
      {
      fetch(`https://api.discogs.com/database/search?type=release&year=${new Date().getFullYear()}&artist=${artistName}&per_page=3&page=1`, {
        method: "GET",
        headers:
          {
            "Authorization": "Discogs token=RbvwWnsEnRskVDRIDcrTukupSbgovHnfxIbFPEgZ"
          }
      })
      .then(response => response.json())
      .then(json => this.setState((prevState, props) => { 
      console.log(json.results);
      return {
        releases: json.results,
        emptyReleases: json.results.length === 0,
        error: ""
      }
      }))
      .catch((error) => {
        this.setState((prevState) => {
          return {
            error: "You are making requests too quickly. Please wait 60 seconds."
          };
        })
      });
    }
  }

  render() {
    console.log("App.render called");
    return (
      <div className="App">
          <div className="container">
            <div className="jumbotron">
                <h1>New Releases</h1>          
                <Search getNewReleases={this.getNewReleases} />
                <label id="error-panel">{this.emptySearch}</label>
                {this.state.error ? <label id="error-panel">{this.state.error}</label> : null}
                {this.state.emptyReleases ? <label id="no-results">No new releases for that artist.</label> : null}
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
