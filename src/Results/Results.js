import React, { Component } from 'react';

import Release from '../Release/Release';
import './Results.css';

class Results extends Component {
  render() {
    return (
        <div>          
          <Release />
          <ul id="results-pager" className="pager">
            <li><a id="previous" href="#">Previous</a></li>
            <li><span id="page-indicator">1 of 3</span></li>
            <li><a id="next" href="#">Next</a></li>
          </ul>
      </div>
    );
  }
}

export default Results;