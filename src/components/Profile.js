import React from 'react'
import ProfileNavBar from "./ProfileNavBar";
import './Profile.css'
import UserInformation from "./UserInformation";
import UserReviews from "./UserReviews";
import UserService from "../services/UserService";
import UserWatchList from "./UserWatchList";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            tabInfo: 'userInfo'
        };
        this.userService.getProfile().then(
            user => this.setState({
                                      user: user,
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

    showFollowers = () =>
        this.setState({
                          tabInfo: 'followers'
                      });

    showFollowing = () =>
        this.setState({
                          tabInfo: 'following'
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
                                    <div className={"col-sm-12 col-md-6 col-lg-4"}>
                                        <div>
                                            <img src={"https://picsum.photos/100/100"}
                                                 className={"rounded-circle"}/>
                                        </div>
                                        {
                                            this.state.user !== undefined &&
                                            <div>
                                                <h3>
                                                    {this.state.username}
                                                </h3>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a href="#" className={this.state.tabInfo == 'userInfo'
                                                           ? "nav-link active" : "nav-link"}
                                       onClick={this.showUserInformation}>Edit Profile</a>
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
                                <li className="nav-item">
                                    <a href="#" className={this.state.tabInfo == 'followers'
                                                           ? "nav-link active" : "nav-link"}
                                       onClick={this.showFollowers}>Followers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className={this.state.tabInfo == 'following'
                                                           ? "nav-link active" : "nav-link"}
                                       onClick={this.showFollowing}>Following</a>
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
                                    <UserWatchList watchlist={this.state.watchlist}/>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'userReviews' &&
                                this.state.reviews !== undefined &&
                                <div>
                                    <UserReviews reviews={this.state.reviews}/>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'followers' &&
                                this.state.followers != undefined &&
                                <h1>
                                    {this.state.followers.length}
                                </h1>
                            }
                            {
                                this.state.tabInfo == 'following' &&
                                this.state.following != undefined &&
                                <h1>
                                    {this.state.following.length}
                                </h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Profile;
