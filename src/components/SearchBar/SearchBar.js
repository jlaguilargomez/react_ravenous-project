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
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this)
  }

  getSortByClass(shortByOption) {
    return this.state.sortBy === shortByOption ? 'active' : '';
  }

  handleSortByChange(shortByOption) {
    this.setState({
      sortBy: shortByOption,
    });
  }

  handleTermChange(evt) {
    this.setState({
      term: evt.target.value,
    })
  }

  handleLocationChange(evt) {
    this.setState({
      location: evt.target.value
    })
  }

  handleSearch(evt) {
    evt.preventDefault(evt)
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    
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
          <input onChange={this.handleTermChange} placeholder='Search Businesses' />
          <input onChange={this.handleLocationChange} placeholder='Where?' />
        </div>
        <div className='SearchBar-submit'>
          <a onClick={this.handleSearch} href="/" >Let's Go</a>
        </div>
      </section>
    );
  }
}

export default SearchBar;