import React from 'react';
import {Link} from "react-router-dom";

const ReviewComponent = ({review}) => {
    return (
        <Link className='col-lg-4 col-sm-12' to={`/profile/${review.userId}`}>
        <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
                <h5 className="black-title">{review.title}</h5>
                <p className="black-title">{review.body}</p>
                <br/>
                <p className="black-title">Written by {review.username}</p>
            </div>
        </div>
        </Link>
    )
}

export default ReviewComponent;