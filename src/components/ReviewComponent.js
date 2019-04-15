import React from 'react';

const ReviewComponent = ({review, deleteReview}) =>
    review !== null &&
    <div className="card my-2">
        <div className="card-header">
            {review.movieName}
            <i className="fa fa-times float-right"
               onClick={() => deleteReview(review._id)}
            ></i>
        </div>
        <div className="card-body">
            <h5 className="card-title">{review.title}</h5>
            <p className="card-text">
                {review.body}
            </p>
        </div>
    </div>

export default ReviewComponent