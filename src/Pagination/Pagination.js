import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
    
    render() {
        const noOp = () => {};
        const hasResults = this.props.pagination.items && this.props.pagination.items > 0;
        const hasPreviousPage = this.props.pagination.page > 1;
        const hasNextPage = this.props.pagination.pages > this.props.pagination.page;

        const previousAction = hasPreviousPage ? () => { this.props.getNewReleases(this.props.pagination.urls.prev); } : noOp;
        const nextAction = hasNextPage ? () => { this.props.getNewReleases(this.props.pagination.urls.next); } : noOp;

        return (            
            <div>{hasResults ? 
                <ul id="results-pager" className="pager">
                    <li><button id="previous" type="submit" className={hasPreviousPage ? "" : "disabled"} onClick={previousAction}>Previous</button></li>
                    <li><span id="page-indicator">Page {this.props.pagination.page} of {this.props.pagination.pages}</span></li>
                    <li><button id="next" type="submit" className={hasNextPage ? "" : "disabled"} onClick={nextAction}>Next</button></li>
                </ul> : null}
            </div>
        );
    }
}

export default Pagination;