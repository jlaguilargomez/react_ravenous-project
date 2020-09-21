import React from 'react';
import './SearchBar.css'

const SORT_BY_OPTIONS = {
  bestMatch: 'best_match',
  highestRated: 'rating',
  mostReviewed: 'review_count',
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(SORT_BY_OPTIONS).map((sortByOption) => {
      let sortByOptionValue = SORT_BY_OPTIONS[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>; 
    });
  }

  render() {
    return (
      <section className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="#">Let's Go</a>
        </div>
      </section>
    )
  }
}

export default SearchBar;