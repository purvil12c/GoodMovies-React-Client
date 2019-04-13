import React from 'react'
import ProfileNavBar from "./ProfileNavBar";
import './Profile.css'
import UserInformation from "./UserInformation";
import UserReviews from "./UserReviews";
import UserService from "../services/UserService";
import UserWatchList from "./UserWatchList";
import UserFollowers from "./UserFollowers";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        const id = props.match.params.id;
        this.state = {
            id: id,
            tabInfo: 'watchList',
            loggedInUser: ''
        };
    }

    componentDidMount() {
        this.userService.findUserById(this.state.id)
            .then(
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

        this.userService.getProfile().then(
            response => this.setState({
                                          loggedInUser: response
                                      })
        );
    }

    updateUser = (user, userId) => {
        this.userService.updateUser(user, userId).then(
            user => this.setState({
                                      user: user
                                  })
        )
    };

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

    followUser = (userId, followId) => {
        var followBody = {
            "username": this.state.loggedInUser.username
        }
        this.userService.followUser(userId, followId, followBody).then(
            alert('Followed this user')
        );
    }

    unfollowUser = (userId, followId) =>
        this.userService.unfollowUser(userId, followId).then(
            alert('Unfollowed this user')
        );

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
                                    <div className={"col-sm-12 col-md-6 col-lg-8"}>
                                        {
                                            this.state.user != undefined &&
                                            this.state.loggedInUser.username !== undefined &&
                                            this.state.loggedInUser._id !== this.state.user._id &&
                                            <div className={"float-right"}>
                                                <button className={"btn btn-primary my-2"}
                                                        type={"button"}
                                                        onClick={() => this.followUser(
                                                            this.state.loggedInUser._id,
                                                            this.state.id)}>
                                                    Follow
                                                </button>
                                                <button className={"btn btn-primary my-2"}
                                                        type={"button"}
                                                        onClick={() => this.unfollowUser(
                                                            this.state.loggedInUser._id,
                                                            this.state.id)}>
                                                    Unfollow
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs card-header-tabs">
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
                                {
                                    this.state.user !== undefined &&
                                    this.state.loggedInUser._id === this.state.user._id &&
                                    <li className="nav-item">
                                        <a href="#" className={this.state.tabInfo == 'userInfo'
                                                               ? "nav-link active" : "nav-link"}
                                           onClick={this.showUserInformation}>Edit Profile</a>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className="card-body">
                            {
                                this.state.tabInfo == 'userInfo' &&
                                this.state.user !== undefined &&
                                this.state.loggedInUser._id === this.state.user._id &&
                                <div>
                                    <UserInformation user={this.state.user}
                                                     updateUser={this.updateUser}/>
                                </div>
                            }
                            {
                                this.state.user !== undefined &&
                                (this.state.loggedInUser._id !== undefined
                                 || this.state.loggedInUser.message != undefined) &&
                                this.state.tabInfo == 'watchList' &&
                                this.state.watchlist !== undefined &&
                                <div>
                                    <UserWatchList watchlist={this.state.watchlist}
                                                   loggedInUser={this.state.loggedInUser}
                                                   currentUser={this.state.user}/>
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
                                <div>
                                    <h1>
                                        {this.state.followers.length}
                                    </h1>
                                    <UserFollowers followers={this.state.followers}/>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'following' &&
                                this.state.following != undefined &&
                                <div>
                                    <h1>
                                        {this.state.following.length}
                                    </h1>
                                    <UserFollowers followers={this.state.followers}/>
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
