import React from 'react';

const ReviewComponent = ({review}) =>
    review !== null &&
    <div className="card my-2">
        <div className="card-header">
            Movie title here
        </div>
        <div className="card-body">
            <h5 className="card-title">Review Title : {review.reviewId}</h5>
            <p className="card-text">
                Review Body would be here
            </p>
            <a href="#" className="btn btn-primary">Delete button here maybe?</a>
        </div>
    </div>

export default ReviewComponent