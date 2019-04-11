import React from 'react'
import ProfileNavBar from "./ProfileNavBar";
import './Profile.css'
import UserInformation from "./UserInformation";
import UserReviews from "./UserReviews";
import UserService from "../services/UserService";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            tabInfo: 'userInfo'
        };
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

    showUserInformation = () =>
        this.setState({
                          tabInfo: 'userInfo'
                      });

    showWatchList = () =>
        this.setState({
                          tabInfo: 'watchList'
                      });

    showUserReviews = () =>
        this.setState({
                          tabInfo: 'userReviews'
                      });

    render() {
        return (
            <div>
                <div>
                    <ProfileNavBar/>
                </div>

                <div className={"container my-5"}>
                    <div className="card text-center">
                        <div className="card-header text-left">
                            <div className={"jumbotron"}>
                                <div className={"row"}>
                                    <div className={"col-sm-12 col-md-4 col-lg-2"}>
                                        <div className={"col-12"}>
                                            <img src={"https://picsum.photos/100/100"}
                                                 className={"rounded-circle"}/>
                                        </div>
                                        <div className={"col-12"}>
                                            <button className={"btn btn-primary my-2"}>
                                                Follow</button>
                                        </div>
                                    </div>
                                    <div className={"col-sm-12 col-md-8 col-lg-10"}>
                                        {
                                            this.state.username !== undefined &&
                                            <h1>{this.state.username}</h1>

                                        }
                                        <div className={"row"}>
                                            <div className={"col-12"}>
                                                <button type="button"
                                                        className="btn btn-primary">Movies
                                                    {
                                                        this.state.watchlist !== undefined &&
                                                        <span className="badge badge-light mx-1">
                                                            {this.state.watchlist.length}
                                                        </span>
                                                    }
                                                </button>
                                            </div>
                                            <div className={"col-12"}>
                                                <button type="button"
                                                        className="btn btn-primary my-2">
                                                    Followers
                                                    {
                                                        this.state.followers !== undefined &&
                                                        <span className="badge badge-light mx-1">
                                                            {this.state.followers.length}
                                                        </span>
                                                    }
                                                </button>
                                            </div>
                                            <div className={"col-12"}>
                                                <button type="button" className="btn btn-primary">
                                                    Following
                                                    {
                                                        this.state.following !== undefined &&
                                                        <span className="badge badge-light mx-1">
                                                            {this.state.following.length}
                                                        </span>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a href="#" className={this.state.tabInfo == 'userInfo'
                                                           ? "nav-link active" : "nav-link"}
                                       onClick={this.showUserInformation}>Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className={this.state.tabInfo == 'watchList'
                                                           ? "nav-link active" : "nav-link"}
                                       onClick={this.showWatchList}>WatchList</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className={this.state.tabInfo == 'userReviews'
                                                           ? "nav-link active" : "nav-link"}
                                       onClick={this.showUserReviews}>Reviews</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            {
                                this.state.tabInfo == 'userInfo' &&
                                this.state.firstname !== undefined &&
                                this.state.lastname !== undefined &&
                                <div>
                                    <UserInformation firstname={this.state.firstname}
                                                     lastname={this.state.lastname}/>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'watchList' &&
                                this.state.watchlist !== undefined &&
                                <div>
                                    <h1>
                                        Watchlist
                                    </h1>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'userReviews' &&
                                this.state.reviews !== undefined &&
                                <div>
                                    <UserReviews reviews={this.state.reviews}/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Profile;
