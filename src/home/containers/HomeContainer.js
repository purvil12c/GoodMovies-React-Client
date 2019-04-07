import React from 'react';

import {HomeNavigationBar} from '../components/HomeNavigationBar';
import MovieSlider from "../components/MovieSlider";
import UserService from "../../services/UserService"

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = ({});
        this.userService.getProfile().then(
            user => this.setState({
                                      username: user.username,
                                      type: user.type,
                                      ratings: user.ratings,
                                      reviews: user.reviews,
                                      watchlist: user.watchlist,
                                      followers: user.followers,
                                      following: user.following,
                                      firstname: user.firstname,
                                      lastname: user.lastname
                                  })
        )
    }

    componentDidMount() {
        // Load popular movies and in theatre movies from API here and use them below
    }

    render() {
        return (
            <div>
                {
                    this.state.username !== undefined &&
                    <HomeNavigationBar loggedIn={true}
                                       username={this.state.username}/>
                }

                <div className={"row"}>
                    <div className="md-form m-4 col-9">
                        <input className="form-control" type="text" placeholder="Search"
                               aria-label="Search"></input>
                    </div>
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

                <h3 className="ml-4 mt-4"> Popular Movies </h3>
                <MovieSlider movies={[{name: 'Avengers', id: 123}, {name: 'Avengers', id: 234},
                    {name: 'Avengers', id: 345}, {name: 'Avengers', id: 456},
                    {name: 'Avengers', id: 567}, {name: 'Avengers', id: 678}]}/>

                <h3 className="ml-4 mt-4"> In Theatres </h3>
                <MovieSlider movies={[{name: 'Avengers', id: 123}, {name: 'Avengers', id: 234},
                    {name: 'Avengers', id: 345}]}/>
            </div>
        );
    }
}