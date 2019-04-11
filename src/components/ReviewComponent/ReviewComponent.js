import React from 'react';

const ReviewComponent = ({review}) => {
    return (
        <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
                <h5>{review.title}</h5>
                <p>{review.body}</p>
            </div>
        </div>
    )
}

export default ReviewComponent;