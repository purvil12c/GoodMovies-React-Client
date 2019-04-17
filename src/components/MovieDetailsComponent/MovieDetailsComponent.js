import React from 'react';
import './MovieDetailsComponent.css';
import * as constants from '../../services/Constants'
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import MovieServiceClient from "../../services/MovieService";
import UserService from "../../services/UserService";
import AddWatchlistComponent from "../AddWatchlistComponent/AddWatchlistComponent";
import TwitterService from "../../services/TwitterService";
import Tweet from 'react-tweet';
import {HomeNavigationBar} from "../../home/components/HomeNavigationBar";
import ProfileNavBar from "../ProfileNavBar";

import posed from 'react-pose';

const AnimatedDiv = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1}
});

class MovieDetailsComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          movie: '',
          cast: [],
          reviews: [],
          userProfile: '',
          newReviewTitle: '',
          newReviewBody: '',
          tweets: '',
          isVisible: false
      }

      this.userService = new UserService();
      this.twitterService = new TwitterService();
      this.writeReview = this.writeReview.bind(this);
      this.reviewBodyEdited = this.reviewBodyEdited.bind(this);
      this.reviewTitleEdited = this.reviewTitleEdited.bind(this);
    }

    componentDidMount() {

        setTimeout(() => {
          this.setState({ isVisible: !this.state.isVisible });
        }, 500);

        MovieServiceClient.instance.getMovieDetails(this.props.match.params.movieId).then(response => {
          console.log(response)
            this.setState({
                movie: response
            })

            this.twitterService.searchTweetsByMovie(this.state.movie.title.replace(' ',''))
              .then(response=>response.json())
              .then(response=>this.setState({tweets: response.statuses}));
        })

        MovieServiceClient.instance.getMovieCast(this.props.match.params.movieId).then(response => {
            this.setState({
                cast: response.cast
            })
        })

        MovieServiceClient.instance.getMovieReviews(this.props.match.params.movieId).then(response => {
            this.setState ({
                reviews: response
            })
        })

        this.userService.getProfile().then(
            response => this.setState({
                userProfile: response
            })
        )
    }

    renderCastCards(actor, index) {
        return (
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch'>
                <div key={index} className='card'>
                    <img className='card-img-top' src={constants.TMDB_IMAGE_BASE_URL + '/w500' + actor.profile_path} alt='Card image cap'/>
                    <div className='card-body'>
                        <h9 className='bold-text'>{actor.name}</h9>
                        <p> as </p>
                        <p>{actor.character}</p>
                    </div>
                </div>
            </div>
        );
    }

    writeReview() {
        if (this.state.newReviewTitle === '' || this.state.newReviewBody === '') {
            alert("A review needs to have both a title and a body.")
        }
        else {
            // Post a review and update the state by fetching new ones
            MovieServiceClient.instance.createMovieReview(this.state.newReviewBody, this.state.newReviewTitle,
                this.state.movie.id, this.state.userProfile._id, this.state.userProfile.username, this.state.movie.title).then(response => {

                MovieServiceClient.instance.getMovieReviews(this.props.match.params.movieId).then(response => {
                    this.setState ({
                        reviews: response
                    })
                })
            })
        }
    }

    reviewBodyEdited(event) {
        this.setState({
            newReviewBody: event.target.value
        })
    }

    reviewTitleEdited(event) {
        this.setState({
            newReviewTitle: event.target.value
        })
    }

    // TODO Show and hide things based on whether user is critic or user
    render() {
       if (this.state.userProfile.message === 'You are not logged in') {
            return (
                <AnimatedDiv style={{ backgroundAttachment: 'fixed', backgroundImage: `url(${constants.TMDB_BACKDROP_BASE_URL+this.state.movie.backdrop_path})`, backgroundSize: 'cover', backgroundColor: '#2d3436', backgroundBlendMode: 'overlay'}} pose={this.state.isVisible ? 'visible' : 'hidden'} className="background mb-4">
                    <HomeNavigationBar loggedIn={false}/>
                    <div className="container mt-2">
                        <div className="row searchbar"/>
                        <div className="row">
                            <div className="col-md-3 col-xs-1">
                                <img src={constants.TMDB_IMAGE_BASE_URL + '/w500' + this.state.movie.poster_path}
                                     className="col-12"/>
                            </div>
                            <div className="col-md-5 col-xs-5">
                                <h1 className="white-title">{this.state.movie.title}</h1>
                                <h6 className="white-title">{this.state.movie.overview}</h6>
                                <br/>
                                <h6 className="white-title">Release Date: {this.state.movie.release_date}</h6>
                                <h6 className="white-title">Runtime: {this.state.movie.runtime} minutes</h6>
                            </div>
                            <div className="col-md-4 col-xs-5">
                                <h3 className="white-title">Twitter Feed
                                    <i className="fa fa-twitter"></i>
                                </h3>
                                <div style={{overflowY: 'scroll', maxHeight: '350px'}}>
                                {
                                  this.state.tweets!='' &&
                                    this.state.tweets.map(tweet=>
                                    <Tweet data={tweet}/>)
                                }
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <h3 className="white-title">Cast</h3>
                        </div>
                        <div className="row card-group">
                            {
                                this.state.cast.slice(0, 4).map((actor, index) =>
                                    this.renderCastCards(actor, index)
                                )
                            }
                        </div>
                    </div>
                </AnimatedDiv>
            );
        }
        else {
            if (this.state.reviews.length !== 0) {
                return (
                    <AnimatedDiv style={{ backgroundAttachment: 'fixed', backgroundImage: `url(${constants.TMDB_BACKDROP_BASE_URL+this.state.movie.backdrop_path})`, backgroundSize: 'cover', backgroundColor: '#2d3436', backgroundBlendMode: 'overlay'}} pose={this.state.isVisible ? 'visible' : 'hidden'} className="background mb-4">
                        <div>
                            <HomeNavigationBar loggedIn={true}
                                               username={this.state.userProfile.username}
                                               logout={this.logout}/>
                        </div>
                        <div className="container mt-4">
                            <div className="row searchbar"/>
                            <div className="row">
                                <div className="col-md-3 col-xs-1">
                                    <img src={constants.TMDB_IMAGE_BASE_URL + '/w500' + this.state.movie.poster_path}
                                         className="col-12"/>
                                    {
                                        this.state.movie !== '' &&
                                        this.state.userProfile._id !== undefined &&
                                        <AddWatchlistComponent movie={this.state.movie} userId={this.state.userProfile._id}/>
                                    }
                                </div>
                                <div className="col-md-5 col-xs-5">
                                    <h1 className="white-title">{this.state.movie.title}</h1>
                                    <h6 className="white-title">{this.state.movie.overview}</h6>
                                    <br/>
                                    <h6 className="white-title">Release Date: {this.state.movie.release_date}</h6>
                                    <h6 className="white-title">Runtime: {this.state.movie.runtime} minutes</h6>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                    <h3 className="white-title">Twitter Feed
                                        <i className="fa fa-twitter"></i>
                                    </h3>
                                    <div style={{overflowY: 'scroll', maxHeight: '350px'}}>
                                    {
                                      this.state.tweets!='' &&
                                        this.state.tweets.map(tweet=>
                                        <Tweet data={tweet}/>)
                                    }
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <h3 className="white-title">Cast</h3>
                            </div>
                            <div className="row card-group">
                                {
                                    this.state.cast.slice(0, 4).map((actor, index) =>
                                        this.renderCastCards(actor, index)
                                    )
                                }
                            </div>
                            <br/>
                            <div className="row">
                                <h3 className="white-title">Critic Reviews</h3>
                            </div>
                            <div className="row card-columns mb-4">
                                {
                                    this.state.reviews.map(review =>
                                        <ReviewComponent review={review}/>
                                    )
                                }
                            </div>
                            <div className="card shadow p-3 bg-white rounded">
                                <h4>ADD A REVIEW</h4>
                                <input className="card mb-2 mt-2 p-3" name="title" onChange={this.reviewTitleEdited} placeholder="Review Title"/>
                                <textarea className="card mb-2 p-3" name="body" onChange={this.reviewBodyEdited} placeholder="Review Body"/>
                                <button className="btn col-12 btn-primary" onClick={this.writeReview}>Add</button>
                            </div>
                        </div>
                    </AnimatedDiv>
                );
            }
            else {
                return (
                    <AnimatedDiv style={{ backgroundAttachment: 'fixed', backgroundImage: `url(${constants.TMDB_BACKDROP_BASE_URL+this.state.movie.backdrop_path})`, backgroundSize: 'cover', backgroundColor: '#2d3436', backgroundBlendMode: 'overlay'}} pose={this.state.isVisible ? 'visible' : 'hidden'} className="background mb-4">
                        <div>
                            <HomeNavigationBar loggedIn={true}
                                               username={this.state.userProfile.username}
                                               logout={this.logout}/>
                        </div>
                        <div className="container mt-4">
                            <div className="row searchbar"/>
                            <div className="row">
                                <div className="col-md-3 col-xs-1">
                                    <img src={constants.TMDB_IMAGE_BASE_URL + '/w500' + this.state.movie.poster_path}
                                         className="col-12"/>
                                    {
                                        this.state.movie !== '' &&
                                        this.state.userProfile._id !== undefined &&
                                        <AddWatchlistComponent movie={this.state.movie} userId={this.state.userProfile._id}/>
                                    }
                                </div>
                                <div className="col-md-5 col-xs-5">
                                    <h1 className="white-title">{this.state.movie.title}</h1>
                                    <h6 className="white-title">{this.state.movie.overview}</h6>
                                    <br/>
                                    <h6 className="white-title">Release Date: {this.state.movie.release_date}</h6>
                                    <h6 className="white-title">Runtime: {this.state.movie.runtime} minutes</h6>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                    <h3 className="white-title">Twitter Feed
                                        <i className="fa fa-twitter"></i>
                                    </h3>
                                    <div style={{overflowY: 'scroll', maxHeight: '350px'}}>
                                    {
                                      this.state.tweets!='' &&
                                        this.state.tweets.map(tweet=>
                                        <Tweet data={tweet}/>)
                                    }
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <h3 className="white-title">Cast</h3>
                            </div>
                            <div className="row card-group">
                                {
                                    this.state.cast.slice(0, 4).map((actor, index) =>
                                        this.renderCastCards(actor, index)
                                    )
                                }
                            </div>
                            <br/>
                            <div className="row">
                                <h3 className="white-title">Critic Reviews</h3>
                            </div>
                            <p className="white-title">No reviews for this movie</p>
                            <div className="card shadow p-3 bg-white rounded">
                                <h5>ADD A REVIEW</h5>
                                <input className="card mb-2 mt-2 p-3" name="title" onChange={this.reviewTitleEdited} placeholder="Review Title"/>
                                <textarea className="card mb-2 p-3" name="body" onChange={this.reviewBodyEdited} placeholder="Review Body"/>
                                <button className="btn col-12 btn-primary" onClick={this.writeReview}>Add</button>
                            </div>
                        </div>
                    </AnimatedDiv>
                );
            }
        }
    }

}

export default MovieDetailsComponent;
