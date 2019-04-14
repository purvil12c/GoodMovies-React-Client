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
            userProfile: '',
            searchType: 'movie'
        }

        this.userService.getProfile().then(
            response => this.setState({
                userProfile: response
            })
        )

        this.searchTextUpdated = this.searchTextUpdated.bind(this);
        this.searchButtonClicked = this.searchButtonClicked.bind(this);
        this.searchTypeUpdated = this.searchTypeUpdated.bind(this);
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

    searchTypeUpdated(event) {
        this.setState({
            searchType: event.target.value
        })
    }

    searchButtonClicked() {
        if (this.state.searchQuery !== '') {
            if (this.state.searchType === 'movie') {
                this.props.history.push('/movie/search/' + this.state.searchQuery);
            }
            else {
                this.props.history.push('/user/search/' + this.state.searchQuery);
            }
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
                    <div className="md-form mt-4 mb-4 ml-4 mr-1 col-9">
                        <input className="form-control" type="text" onChange={this.searchTextUpdated}
                               placeholder="Search" value={this.state.searchQuery}
                               aria-label="Search"></input>
                    </div>
                    <select className="custom-select col-lg-1 col-sm-12 mr-2 mb-4 mt-4" onChange={this.searchTypeUpdated}>
                        <option value="movie">Movies</option>
                        <option value="user">Users</option>
                    </select>
                    <button type='btn col-sm-12' className="text-white btn bg-primary" onClick={this.searchButtonClicked}>
                        GO
                    </button>

                </div>

                <h3 className="ml-4 mt-4 white-title"> Popular Movies </h3>
                <MovieSlider movies={this.state.popularMovies}/>

                <h3 className="ml-4 mt-4 white-title"> In Theatres </h3>
                <MovieSlider movies={this.state.nowPlayingMovies}/>

            </div>

        );
    }
}