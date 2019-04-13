import React from 'react'
import UserService from '../services/UserService'
import ProfileNavBar from "./ProfileNavBar";
import UserReviews from "./UserReviews";

class OthersProfile extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        const id = props.match.params.id;
        this.state = ({
            id: id,
            tabInfo: 'watchList',
            loggedInUser: ''
        })
    }

    componentDidMount() {
        this.userService.findUserById(this.state.id).then(
            user => this.setState({
                                      user: user,
                                      username: user.username,
                                      followers: user.followers,
                                      following: user.following,
                                      reviews: user.reviews,
                                      watchlist: user.watchlist,
                                      type: user.type
                                  })
        );

        this.userService.getProfile().then(
            response => this.setState({
                                          loggedInUser: response
                                      })
        );
    }

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

    followUser = (userId, followId) =>
        this.userService.followUser(userId, followId).then(
            alert('Followed this user')
        );

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
                            </ul>
                        </div>
                        <div className="card-body">
                            {
                                this.state.tabInfo == 'watchList' &&
                                this.state.watchlist !== undefined &&
                                <div>
                                    <h1>
                                        {this.state.watchlist.length}
                                    </h1>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'userReviews' &&
                                this.state.reviews !== undefined &&
                                <div>
                                    <h1>{this.state.reviews.length}</h1>
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

export default OthersProfile;
