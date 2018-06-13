import React, { Component } from 'react';

import Release from '../Release/Release';
import './Results.css';

class Results extends Component {
  render() {
    return (
        <div>
          <div className="resultsContainer"> 
{/*             TODO: Replace hardcoded releases with a map function that receives the releases through props and maps them to the <Release /> component  */}        
            <Release />
            <Release />
            <Release />
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