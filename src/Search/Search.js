import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.artistNameRef = React.createRef();
  }

  searchButtonClicked = (event) => {
    console.log("Search.searchButtonClicked called")
    event.preventDefault();
    this.props.getNewReleases(this.artistNameRef.current.value);
  }
  
  render() {
    return (
      <div>
        <form>
          <div className="input-group">
            <input type="text" id="input-artist-name" name="artistname" className="form-control" ref={this.artistNameRef} placeholder="Artist" />
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