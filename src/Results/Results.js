import React, { Component } from 'react';
import Release from '../Release/Release';
import './Results.css';

class Results extends Component {
  render() {
    return (
        <div>
          <div className="resultsContainer"> 
            {this.props.releases.map((release, index) =>
            <Release key={index} id={release.id} />
            )}
          </div>
          <ul id="results-pager" className="pager">
            <li><a id="previous" href="#">Previous</a></li>
            <li><span id="page-indicator"></span></li>
            <li><a id="next" href="#">Next</a></li>
          </ul>
      </div>
    );
  }
}

export default Results;