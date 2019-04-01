import React from 'react';
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent';
import './MovieDetailsComponent.css';
import MovieCastComponent from '../MovieCastComponent/MovieCastComponent';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class MovieDetailsComponent extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundImage: "url("+this.props.movie.background+")", backgroundSize: 'cover'}}>
              <div className="container">
                <div className="row">
                  <SearchBarComponent/>
                </div>
                <div className="row">
                  <div className="col-md-3 col-xs-1">
                    <img src={this.props.movie.poster} className="col-12"/>
                    <button className="btn btn-default watchlist-btn col-12">Add to Watchlist</button>
                  </div>
                  <div className="col-md-6 col-xs-6">
                      <h1>{this.props.movie.title}</h1>
                      <h6>{this.props.movie.synopsis}</h6>
                      <h6>Director: {this.props.movie.director}</h6>
                      <h6>Writers: {this.props.movie.writer}</h6>
                      <h6>Rating: </h6>
                  </div>
                  <div className="col-md-3 col-xs-5">
                    <h1>Twitter Feed</h1>
                  </div>
                </div>
                <br/>
                <div className="row">
                  <h3>Cast</h3>
                </div>
                <div className="row card-group">
                  {
                    this.props.movie.cast.map(castMember=>
                      <MovieCastComponent cast={castMember}/>
                    )
                  }
                </div>
                <br/>
                <div className="row">
                  <h3>Reviews</h3>
                </div>
                <div className="row card-columns">
                  {
                    this.props.movie.reviews.map(review=>
                      <ReviewComponent review={review}/>
                    )
                  }
                </div>
              </div>
            </div>
        );
    }

}

export default MovieDetailsComponent;
