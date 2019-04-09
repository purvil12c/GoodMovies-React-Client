import React from 'react';
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent';
import './MovieDetailsComponent.css';
import * as constants from '../../services/Constants'
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import MovieServiceClient from "../../services/MovieService";

class MovieDetailsComponent extends React.Component {
    constructor(props){
      super(props);
        this.state = {
            movie: '',
            cast: []
        }
    }

    componentDidMount() {

        MovieServiceClient.instance.getMovieDetails(this.props.match.params.movieId).then(response => {
            this.setState({
                movie: response
            })
        })

        MovieServiceClient.instance.getMovieCast(this.props.match.params.movieId).then(response => {
            this.setState({
                cast: response.cast
            })
        })
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

    render() {
        return (
            <div className="container-fluid background">
              <div className="container">
                <div className="row">
                  <SearchBarComponent/>
                </div>
                <div className="row">
                  <div className="col-md-3 col-xs-1">
                    <img src={constants.TMDB_IMAGE_BASE_URL + '/w500' + this.state.movie.poster_path} className="col-12"/>
                    <button className="btn btn-default watchlist-btn col-12">Add to Watchlist</button>
                  </div>
                  <div className="col-md-6 col-xs-6">
                      <h1 className="white-title">{this.state.movie.title}</h1>
                      <h6 className="white-title">{this.state.movie.overview}</h6>
                      <br/>
                      <h6 className="white-title">Release Date: {this.state.movie.release_date}</h6>
                      <h6 className="white-title">Runtime: {this.state.movie.runtime} minutes</h6>
                      <h6 className="white-title">Rating: </h6>
                  </div>
                  <div className="col-md-3 col-xs-5">
                    <h1 className="white-title">Twitter Feed
                        <i className="fa fa-twitter"></i>
                    </h1>
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
                  <h3 className="white-title">Reviews</h3>
                </div>
                {/*<div className="row card-columns">*/}
                  {/*{*/}
                    {/*this.props.movie.reviews.map(review=>*/}
                      {/*<ReviewComponent review={review}/>*/}
                    {/*)*/}
                  {/*}*/}
                {/*</div>*/}
              </div>
            </div>
        );
    }

}

export default MovieDetailsComponent;
