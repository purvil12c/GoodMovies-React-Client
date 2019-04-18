import React from 'react';
import {HomeNavigationBar} from "../HomeComponent/HomeNavigationBar";
import MovieServiceClient from "../../services/MovieService";
import {MovieSearchResultItem} from "./MovieSearchResultItem";
import UserService from "../../services/UserService";

export default class MovieSearchComponent extends React.Component {
    constructor(props) {
        super(props);

        this.userService = new UserService();

        this.state = {
            searchResults: [],
            userProfile: ''
        }
    }

    componentDidMount() {
        MovieServiceClient.instance.searchMovieForQuery(this.props.match.params.query).then(response => {
            console.log(response.results);
            this.setState({
                searchResults: response.results
            })
        })

        this.userService.getProfile().then(
            response => this.setState({
                userProfile: response
            })
        )
    }

    renderSearchResults() {
        if(this.state.searchResults) {
            if (this.state.searchResults.length === 0) {
                return <h4 className="white-title ml-4">No results found</h4>
            }
            else {
                let items = this.state.searchResults
                    .map(function (result) {
                        return <MovieSearchResultItem searchResult={result}/>;
                    });
                return (items);
            }
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.userProfile.message === 'You are not logged in' &&
                    <HomeNavigationBar loggedIn={false}/>

                }
                {
                    this.state.userProfile.username !== undefined &&
                    <div>
                        <HomeNavigationBar loggedIn={true}
                                           username={this.state.userProfile.username}
                                           logout={this.logout}/>
                    </div>
                }
                <h6 className={'m-4 col-12 white-title'}> Search results for "{this.props.match.params.query}" </h6>
                <div className={"col-12 mt-4"}>
                    <ul className="list-group">
                        {this.renderSearchResults()}
                    </ul>
                </div>
            </div>
        );
    }
}