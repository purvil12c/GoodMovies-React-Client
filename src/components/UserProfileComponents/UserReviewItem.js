import React from 'react';

export default class UserReviewItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            review: this.props.review,
            updatedReviewTitle: this.props.review.title,
            updatedReviewBody: this.props.review.body
        }

        this.reviewTitleUpdated = this.reviewTitleUpdated.bind(this);
        this.reviewBodyUpdated = this.reviewBodyUpdated.bind(this);
    }

    reviewTitleUpdated(event) {
        this.setState({
            updatedReviewTitle: event.target.value
        })
    }

    reviewBodyUpdated(event) {
        this.setState({
            updatedReviewBody: event.target.value
        })
    }


    render() {
        if (this.props.loggedInUser._id === this.props.currentUser._id) {
            return (
                this.state.review !== undefined &&
                <div className="card mb-2 shadow">
                    <div className="card-header">
                        {this.state.review.movieName}
                        <i className="fa fa-trash float-right ml-4"
                           onClick={() => this.props.deleteReview(this.state.review._id)}
                        />
                        <i className="fa fa-check-circle float-right"
                           onClick={() => this.props.updateReview(this.state.review._id, this.state.updatedReviewTitle, this.state.updatedReviewBody)}
                        />
                    </div>
                    <div className="card-body">
                        <input className="card mb-2 mt-2 p-3" style={{width:'100%'}} name="title" value={this.state.updatedReviewTitle} onChange={this.reviewTitleUpdated}
                               placeholder="Review Title"/>
                        <textarea className="card mb-2 p-3" style={{width:'100%'}} name="body" value={this.state.updatedReviewBody} onChange={this.reviewBodyUpdated}
                                  placeholder="Review Body"/>
                    </div>
                </div>
            )
        }
        else {
            return(
                this.state.review !== undefined &&
                <div className="card mb-2 shadow">
                    <div className="card-header">
                        {this.state.review.movieName}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.updatedReviewTitle}</h5>
                        <p className="card-text">
                            {this.state.updatedReviewBody}
                        </p>
                    </div>
                </div>
            )
        }
    }
}
