/* 
Client ID
soQg3AL4oM9p-dVjcDes3w
*/

const APIKey = 'fpyuh-Hh4Hojh6mtZ8CuimOr8WARtBZrTghXwdXB1qhBKu4330tWdstBbEcYOkidAdpUUGMyD4eY_8L7dDNCL56Pj_9PuSLTo1mBh8AaAo5S_-6xBRfCzT3n3F1sX3Yx';

 const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${APIKey}`
      }
    }).then((resp) => {
      
      return resp.json()
    }).then((jsonResponse) => {
      
      if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses)
        return jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.category,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        })
      }
    });
  }
};

export default Yelp
