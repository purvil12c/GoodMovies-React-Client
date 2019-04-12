import React from 'react';

import {HomeNavigationBar} from '../components/HomeNavigationBar';
import MovieSlider from "../components/MovieSlider";
import UserService from "../../services/UserService"
import MovieServiceClient from "../../services/MovieService";

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();

        this.state = {
            popularMovies: [],
            nowPlayingMovies: [],
            searchQuery: '',
            userProfile: ''
        }

        this.userService.getProfile().then(
            response => this.setState({
                userProfile: response
            })
        )

        this.searchTextUpdated = this.searchTextUpdated.bind(this);
        this.searchButtonClicked = this.searchButtonClicked.bind(this);

    }

    componentDidMount() {
        MovieServiceClient.instance.getPopularMovies().then(response => {
            this.setState({
                popularMovies: response.results
            })
        })

        MovieServiceClient.instance.getNowPlayingMovies().then(response => {
            this.setState({
                nowPlayingMovies: response.results
            })
        })
    }

    searchTextUpdated(event) {
        this.setState({
            searchQuery: event.target.value
        })
    }

    searchButtonClicked() {
        if (this.state.searchQuery !== '') {
            this.props.history.push('/search/' + this.state.searchQuery);
        }
        else {
            alert("Enter a search query first!");
        }
    }

    logout = () => {
        this.userService.logout();
    };

    render() {
        return (
            <div>
                {
                    this.state.userProfile.message === 'You are not logged in' &&
                    <HomeNavigationBar loggedIn={false}/>

                }
                {
                    this.state.userProfile.username !== undefined &&
                    <HomeNavigationBar loggedIn={true}
                                       username={this.state.userProfile.username}
                                       logout={this.logout}/>
                }

                <div className={"row"}>
                    <div className="md-form m-4 col-9">
                        <input className="form-control" type="text" onChange={this.searchTextUpdated}
                               placeholder="Search" value={this.state.searchQuery}
                               aria-label="Search"></input>
                    </div>
                    <button type='btn' className="text-white btn bg-primary" onClick={this.searchButtonClicked}>
                        GO
                    </button>
                    <div className="btn-group btn-group-toggle m-4" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1"
                                   autoComplete="off"/> Movies
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2"
                                   autoComplete="off"/> Users
                        </label>
                    </div>
                </div>

                <h3 className="ml-4 mt-4 white-title"> Popular Movies </h3>
                <MovieSlider movies={this.state.popularMovies}/>

                <h3 className="ml-4 mt-4 white-title"> In Theatres </h3>
                <MovieSlider movies={this.state.nowPlayingMovies}/>

            </div>

        );
    }
}
