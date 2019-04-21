import React from 'react';
import {HomeNavigationBar} from "../HomeComponent/HomeNavigationBar";
import {UserSearchResultItem} from "./UserSearchResultItem";
import UserService from "../../services/UserService";

export default class UserSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            userProfile: ''
        }

        this.userService = new UserService();
    }

    componentDidMount() {
        this.userService.search(this.props.match.params.query).then(response => {
            this.setState({
                searchResults: response
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