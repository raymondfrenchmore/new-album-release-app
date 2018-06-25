import React, { Component } from 'react';
import Release from '../Release/Release';
import Pagination from '../Pagination/Pagination';
import './Results.css';

class Results extends Component {
	render() {
		// console.log("Results.render is called")
		return (
			<div>
				<div className="resultsContainer">
					{this.props.releases.map((release, index) =>
						<Release key={release.id} id={release.id} />
					)}
				</div>
				<Pagination getNewReleases={this.props.getNewReleases} pagination={this.props.pagination} />			
			</div>
		);
	}
}

export default Results;