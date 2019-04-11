import React from 'react';
import {Link} from "react-router-dom";

const ReviewComponent = ({review}) => {
    return (
        <Link className='col-4' to={`/profile/${review.userId}`}>
        <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
                <h5 className="black-title">{review.title}</h5>
                <p className="black-title">{review.body}</p>
            </div>
        </div>
        </Link>
    )
}

export default ReviewComponent;