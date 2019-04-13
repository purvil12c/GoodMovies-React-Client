import React from 'react';

const ReviewComponent = ({review}) =>
    review !== null &&
    <div className="card my-2">
        <div className="card-header">
            {review.movieId} : Movie title here
            <i className="fa fa-times float-right"></i>
        </div>
        <div className="card-body">
            <h5 className="card-title">{review.title}</h5>
            <p className="card-text">
                Review Body would be here
            </p>
            <div className={'float-right'}>
                Review by : {review.username}
            </div>
        </div>
    </div>

export default ReviewComponent