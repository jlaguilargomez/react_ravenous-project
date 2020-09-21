import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className='BusinessList'>
        {this.props.businesses.map((business, i) => {
          return <Business key={i} business={business}></Business>;
        })}
      </div>
    );
  }
}

export default BusinessList