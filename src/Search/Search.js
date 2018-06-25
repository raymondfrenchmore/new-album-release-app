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
		
		const artistName = this.artistNameRef.current.value;
		if (artistName === "") {
			alert("Search cannot be empty.");
		}
		else {
			const endpoint = `https://api.discogs.com/database/search?type=release&year=${new Date().getFullYear()}&artist=${artistName}&per_page=3&page=1`;
			this.props.getNewReleases(endpoint);
		}
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