import React, { Component } from 'react';
import logo from './logo_black.png';

import Results from '../Results/Results';

class Search extends Component {
  render() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>New Releases</h1>          
                <form>
                    <div className="input-group">
                      <input id="input-artist-name" name="artistname" type="text" className="form-control" placeholder="Artist" />
                      <label id="error-panel">You are making requests too quickly. Please wait 60 seconds.</label>
                      <label id="no-results">No new releases for that artist.</label>
                      <div className="input-group-btn">
                        <button id="btn-search" className="btn btn-default" type="submit">
                          <i className="glyphicon glyphicon-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                <Results />
            </div>
            <ul id="release-pager" className="pager">
                <li><a id="previous" href="#">Previous</a></li>
                <li><span id="page-indicator"></span></li>
                <li><a id="next" href="#">Next</a></li>
            </ul>
            <div id="footer">
                <p>Data provided by <a href="https://www.discogs.com" target="_blank"><img src={logo} alt="logo" /></a></p>
            </div>            
        </div>
    );
  }
}

export default Search;