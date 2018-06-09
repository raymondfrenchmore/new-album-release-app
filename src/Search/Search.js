import React, { Component } from 'react';

import Results from '../Results/Results';
import './Search.css';

class Search extends Component {
  render() {
    return (
            <div>
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
    );
  }
}

export default Search;