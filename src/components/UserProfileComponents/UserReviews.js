import React from 'react';
import UserService from '../../services/UserService'
import UserReviewItem from "./UserReviewItem";

class UserReviews extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = ({
            reviews: this.props.reviews
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
                          reviews: nextProps.reviews
                      })
    }

    deleteReview = (reviewId) => {
        this.props.deleteReview(reviewId);
    };

    updateReview = (reviewId, reviewTitle, reviewBody) => {
        let review = this.state.reviews.find(function (review) {
            return review._id === reviewId
        });
        review.title = reviewTitle
        review.body = reviewBody
        this.setState({
            reviews: this.state.reviews
        })
        this.userService.updateReview(reviewId, reviewTitle, reviewBody).then(alert("Review updated."));
    }

    render() {
        return (
            <div>
                {
                    this.state.reviews.map(review => {
                        return (
                            <UserReviewItem review={review}
                                            deleteReview={this.deleteReview}
                                            updateReview={this.updateReview}
                                            loggedInUser={this.props.loggedInUser}
                                            currentUser={this.props.currentUser}/>
                        )
                    })
                }
            </div>
        );
    }

}

export default UserReviews;
