import React from 'react';
import {HomeNavigationBar} from "../../home/components/HomeNavigationBar";
import MovieServiceClient from "../../services/MovieService";
import {MovieSearchResultItem} from "./MovieSearchResultItem";

export default class MovieSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }
    }

    componentDidMount() {
        // Load popular movies and in theatre movies from API here and use them below
        MovieServiceClient.instance.searchMovieForQuery(this.props.match.params.query).then(response => {
            console.log(response.results);
            this.setState({
                searchResults: response.results
            })

        })
    }

    renderSearchResults() {
        if(this.state.searchResults) {
            let items = this.state.searchResults
                .map(function(result) {
                    return <MovieSearchResultItem searchResult={result}/>;
                });
            return (items);
        }
    }

    render() {
        return (
            <div>
                <HomeNavigationBar loggedIn = {true}/>
                <h6 className={'m-4 col-12 white-title'}> Search results for "{this.props.match.params.query}" </h6>
                <div className={"col-12 mt-4"}>
                    <ul>
                        {this.renderSearchResults()}
                    </ul>
                </div>
            </div>
        );
    }
}