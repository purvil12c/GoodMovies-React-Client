import React from 'react';
import ReviewComponent from "./ReviewComponent";
import UserService from '../services/UserService'

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
        let reviews = this.state.reviews.filter(review => review._id !== reviewId);
        this.setState({
                          reviews: reviews
                      })
        this.userService.deleteReview(reviewId);

    };

    render() {
        return (
            <div className={"container"}>
                {
                    this.state.reviews.map(review => {
                        console.log(review);
                        return (
                            <ReviewComponent review={review}
                                             deleteReview={this.deleteReview}/>
                        )
                    })
                }
            </div>
        );
    }

}

export default UserReviews;
