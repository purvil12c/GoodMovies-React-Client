import React from 'react';
import UserService from "../../services/UserService";
import MovieServiceClient from "../../services/MovieService";
import * as constants from "../../services/Constants";

import Lottie from 'react-lottie';
import animationData from '../../assets/love.json';

const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
  };

export default class AddWatchlistComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userProfile: '',
            watchlistIds: []
        }

        this.userService = new UserService();

        this.addToWatchlist = this.addToWatchlist.bind(this);
        this.removeFromWatchlist = this.removeFromWatchlist.bind(this);
    }

    componentDidMount() {
        this.userService.findUserById(this.props.userId).then(response => {

            let idArray = [];
            for (let movie in response.watchlist) {
                idArray.push(response.watchlist[movie].movieId);
            }
            this.setState({
                userProfile: response,
                watchlistIds: idArray
            })

            }
        )
    }

    addToWatchlist() {
        MovieServiceClient.instance.addMovieToWatchlist(this.props.userId, this.props.movie.id, this.props.movie.title, constants.TMDB_IMAGE_BASE_URL + '/w185' + this.props.movie.poster_path).then(response => {

            this.userService.findUserById(this.props.userId).then(response => {

                var idArray = [];
                for (let movie in response.watchlist) {
                    idArray.push(response.watchlist[movie].movieId);
                }
                this.setState({
                    userProfile: response,
                    watchlistIds: idArray
                })
                }
            )
        })
    }

    removeFromWatchlist() {

        MovieServiceClient.instance.removeMovieFromWatchlist(this.props.userId, this.props.movie.id).then(response => {
            console.log(response);
            this.userService.findUserById(this.props.userId).then(response => {

                let idArray = [];
                for (let movie in response.watchlist) {
                    idArray.push(response.watchlist[movie].id);
                }
                this.setState({
                    userProfile: response,
                    watchlistIds: idArray
                })

                }
            )
        })
    }


    render() {

        // If movie already exists in the watchlist
        if (this.state.watchlistIds !== undefined && this.state.watchlistIds.indexOf(String(this.props.movie.id)) > -1) {
            return (
                    <button className="btn btn-outline-danger col-12 mt-4" onClick={this.removeFromWatchlist}>Remove from watchlist</button>
            );
        }
        else if (this.state.watchlistIds !== undefined && this.state.watchlistIds.indexOf(String(this.props.movie.id)) <= -1) {
            return (
                <div className="btn btn-outline-success col-12 mt-4" onClick={this.addToWatchlist}>
                  Add to watchlist
                </div>
            );
        }
    }
}
