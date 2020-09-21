import React from 'react';
import './Business.css';

const BUSINESS = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

class Business extends React.Component {
  render() {
    return (
      <div className='Business'>
        <div className='image-container'>
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt='' />
        </div>
        <h2>{BUSINESS.name}</h2>
        <div className='Business-information'>
          <div className='Business-address'>
            <p>{BUSINESS.address}</p>
            <p>{BUSINESS.city}</p>
            <p>
              {BUSINESS.state} {BUSINESS.zipCode}
            </p>
          </div>
          <div className='Business-reviews'>
            <h3>{BUSINESS.category}</h3>
            <h3 className='rating'>{BUSINESS.rating}</h3>
            <p>{BUSINESS.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;