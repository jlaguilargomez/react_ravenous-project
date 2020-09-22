import React from 'react';
import './SearchBar.css'

// const SORT_BY_OPTIONS = {
 
// };

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.sortByOptions = { bestMatch: 'best_match', highestRated: 'rating', mostReviewed: 'review_count' };
  }

  getSortByClass(shortByOption) {
    return this.state.sortBy === shortByOption ? 'active' : '';
  }

  handleSortByChange(shortByOption) {
    this.setState({
      sortBy: shortByOption,
    });
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <section className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className='SearchBar-fields'>
          <input placeholder='Search Businesses' />
          <input placeholder='Where?' />
        </div>
        <div className='SearchBar-submit'>
          <a href='#'>Let's Go</a>
        </div>
      </section>
    );
  }
}

export default SearchBar;