import React from 'react';

class UserReviews extends React.Component {
    render() {
        return (
            <div className={"row"}>
                <div className="review-card col-sm-12 col-md-4 col-lg-2">
                    <img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Stars / Detailed review depnding upon user</p>
                    </div>
                </div>
                <div className="review-card col-sm-12 col-md-4 col-lg-2">
                    <img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Stars / Detailed review depnding upon user</p>
                    </div>
                </div>
                <div className="review-card col-sm-12 col-md-4 col-lg-2">
                    <img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Stars / Detailed review depnding upon user</p>
                    </div>
                </div>
                <div className="review-card col-sm-12 col-md-4 col-lg-2">
                    <img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Stars / Detailed review depnding upon user</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserReviews;
