import React from 'react';
import {HomeNavigationBar} from "../../home/components/HomeNavigationBar";
import {UserSearchResultItem} from "./UserSearchResultItem";
import UserService from "../../services/UserService";

export default class UserSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }

        this.userService = new UserService();
    }

    componentDidMount() {
        this.userService.search(this.props.match.params.query).then(response => {
            this.setState({
                searchResults: response
            })
        })
    }

    renderSearchResults() {
        if(this.state.searchResults) {
            let items = this.state.searchResults
                .map(function(result) {
                    return <UserSearchResultItem searchResult={result}/>;
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