import React from 'react';
import ReviewComponent from "./ReviewComponent";

class UserReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            reviews: this.props.reviews
        })
    }

    render() {
        return (
            <div className={"container"}>
                {
                    this.state.reviews.map(review => {
                        console.log(review);
                        return (
                            <ReviewComponent review={review}/>
                        )
                    })
                }
            </div>
        );
    }

}

export default UserReviews;
