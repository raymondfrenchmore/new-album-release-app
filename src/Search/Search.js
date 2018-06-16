import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.artistNameRef = React.createRef();
  }

  searchButtonClicked = (event) => {
    event.preventDefault();
    this.props.getNewReleases(this.artistNameRef.current.value);
  }
  
  render() {
    return (
      <div>
        <form>
          <div className="input-group">
            <input type="text" id="input-artist-name" name="artistname" className="form-control" ref={this.artistNameRef} placeholder="Artist" />
            <label id="error-panel">You are making requests too quickly. Please wait 60 seconds.</label>
            <label id="no-results">No new releases for that artist.</label>
            <div className="input-group-btn">
              <button id="btn-search" className="btn btn-default" type="submit" onClick={this.searchButtonClicked}>
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;