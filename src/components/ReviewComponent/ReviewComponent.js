import React from 'react';

const ReviewComponent = (review) =>
  <div className="card col-md-3 col-xs-1" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{review.review.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{review.review.user}</h6>
    <p className="card-text">{review.review.body}</p>
  </div>
  </div>

export default ReviewComponent;
