import React from 'react'
import ProfileNavBar from "./ProfileNavBar";
import './Profile.css'
import UserInformation from "./UserInformation";
import UserReviews from "./UserReviews";
import UserService from "../../services/UserService";
import UserWatchList from "./UserWatchList";
import UserFollowers from "./UserFollowers";
import UserFollowing from './UserFollowing';

import posed from 'react-pose';

const AnimatedDiv = posed.div({
                                  hidden: {opacity: 0},
                                  visible: {opacity: 1}
                              });

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        const id = props.match.params.id;
        this.state = {
            id: id,
            tabInfo: 'watchList',
            loggedInUser: '',
            isVisible: false,
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        var id = nextProps.match.params.id;
        console.log(id);
        if (id !== undefined) {
            this.userService.findUserById(id).then(user =>
                                                       this.setState({
                                                                         user: user,
                                                                         username: user.username,
                                                                         type: user.type,
                                                                         ratings: user.ratings,
                                                                         watchlist: user.watchlist,
                                                                         followers: user.followers,
                                                                         following: user.following,
                                                                         firstname: user.firstname,
                                                                         lastname: user.lastname,
                                                                         email: user.email
                                                                     })
            )
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({isVisible: !this.state.isVisible});
        }, 500);

        if (this.state.id === undefined) {
            this.userService.getProfile().then(
                response => this.userService.findUserById(response._id)
            ).then(user => this.setState({
                                             user: user,
                                             username: user.username,
                                             type: user.type,
                                             ratings: user.ratings,
                                             watchlist: user.watchlist,
                                             followers: user.followers,
                                             following: user.following,
                                             firstname: user.firstname,
                                             lastname: user.lastname,
                                             email: user.email
                                         }
            ));

            this.userService.getProfile().then(
                response => this.userService.findReviewsByUserId(response._id)).then(
                reviews => this.setState({
                                             reviews: reviews
                                         })
            )

        } else {
            this.userService.findUserById(this.state.id)
                .then(
                    user => this.setState({
                                              user: user,
                                              username: user.username,
                                              type: user.type,
                                              ratings: user.ratings,
                                              watchlist: user.watchlist,
                                              followers: user.followers,
                                              following: user.following,
                                              firstname: user.firstname,
                                              lastname: user.lastname,
                                              email: user.email
                                          })
                );

            this.userService.findReviewsByUserId(this.state.id).then(
                reviews => this.setState({
                                             reviews: reviews
                                         })
            )

        }

        this.userService.getProfile().then(
            response => this.setState({
                                          loggedInUser: response
                                      })
        );

    }

    updateUser = (user, userId) => {
        this.userService.updateUser(user, userId).then(
            user =>
                this.setState({
                                  firstname: user.firstname,
                                  lastname: user.lastname != undefined ? user.lastname
                                                                       : this.state.lastname,
                                  email: user.email != undefined ? user.email : this.state.email
                              })
        )
    };

    deleteReview = (reviewId) => {
        let reviews = this.state.reviews.filter(review => review._id !== reviewId);
        this.setState({
                          reviews: reviews
                      });
        this.userService.deleteReview(reviewId);
    };

    deleteFromWatchlist = (movieId) => {
        let watchlist = this.state.watchlist.filter(movie => movie.movieId !== movieId);
        this.setState({
                          watchlist: watchlist
                      });
        this.userService.deleteFromWatchList(this.state.user._id, movieId)
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
        this.userService.followUser(userId, followId).then(
            response => this.userService.findUserById(this.state.id)
        ).then(user => this.setState({
                                         followers: user.followers
                                     }))
    };

    unfollowUser = (userId, followId) =>
        this.userService.unfollowUser(userId, followId).then(
            response => this.userService.findUserById(this.state.id)
        ).then(user => this.setState({
                                         followers: user.followers
                                     }))

    render() {
        if (this.state.user != undefined &&
            this.state.loggedInUser.username !== undefined &&
            this.state.loggedInUser._id !== this.state.user._id) {
            var followers = [];
            this.state.followers.map(user => followers.push(user.username))
        }
        return (
            <AnimatedDiv pose={this.state.isVisible ? 'visible' : 'hidden'}>
                <div>
                    <ProfileNavBar/>
                </div>

                <div className={"container mt-4 mb-4"}>
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
                                                {
                                                    this.state.loggedInUser._id !== undefined &&
                                                    <h4>{this.state.firstname} {this.state.lastname}</h4>
                                                }
                                                {
                                                    this.state.user.type === 'critic' &&
                                                    <h6>CERTIFIED CRITIC</h6>
                                                }
                                            </div>
                                        }
                                    </div>
                                    <div className={"col-sm-12 col-md-6 col-lg-8"}>
                                        <div className={"float-right"}>
                                            {
                                                this.state.user !== undefined &&
                                                this.state.loggedInUser.username !== undefined &&
                                                this.state.loggedInUser._id !== this.state.user._id
                                                &&
                                                followers.includes(this.state.loggedInUser.username)
                                                == false &&
                                                <button className={"btn btn-primary my-2"}
                                                        type={"button"}
                                                        onClick={() => this.followUser(
                                                            this.state.loggedInUser._id,
                                                            this.state.id)}>
                                                    Follow
                                                </button>
                                            }
                                            {
                                                this.state.user != undefined &&
                                                this.state.loggedInUser.username !== undefined &&
                                                this.state.loggedInUser._id !== this.state.user._id
                                                &&
                                                followers.includes(this.state.loggedInUser.username)
                                                &&
                                                <button className={"btn btn-primary my-2"}
                                                        type={"button"}
                                                        onClick={() => this.unfollowUser(
                                                            this.state.loggedInUser._id,
                                                            this.state.id)}>
                                                    Unfollow
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a href="#" className={this.state.tabInfo == 'watchList'
                                                           ? "nav-link active" : "nav-link"}
                                       onClick={this.showWatchList}>WatchList</a>
                                </li>
                                {
                                    this.state.user !== undefined &&
                                    this.state.user.type === 'critic' &&
                                    <li className="nav-item">
                                        <a href="#" className={this.state.tabInfo == 'userReviews'
                                                               ? "nav-link active" : "nav-link"}
                                           onClick={this.showUserReviews}>Reviews</a>
                                    </li>
                                }
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
                                this.state.watchlist.length > 0 &&
                                <div>
                                    <UserWatchList watchlist={this.state.watchlist}
                                                   loggedInUser={this.state.loggedInUser}
                                                   currentUser={this.state.user}
                                                   deleteFromWatchlist={this.deleteFromWatchlist}/>
                                </div>
                            }
                            {
                                this.state.user !== undefined &&
                                (this.state.loggedInUser._id !== undefined
                                 || this.state.loggedInUser.message != undefined) &&
                                this.state.tabInfo == 'watchList' &&
                                this.state.watchlist !== undefined &&
                                this.state.watchlist.length === 0 &&
                                <div>
                                    <h4>Nothing on watchlist</h4>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'userReviews' &&
                                this.state.reviews !== undefined &&
                                this.state.reviews.length > 0 &&
                                <div>
                                    <UserReviews reviews={this.state.reviews}
                                                 deleteReview={this.deleteReview}
                                                 currentUser={this.state.user}
                                                 loggedInUser={this.state.loggedInUser}/>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'userReviews' &&
                                this.state.reviews !== undefined &&
                                this.state.reviews.length === 0 &&
                                <div>
                                    <h4>No reviews</h4>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'followers' &&
                                this.state.followers != undefined &&
                                this.state.followers.length > 0 &&
                                <div>
                                    <UserFollowers followers={this.state.followers}/>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'followers' &&
                                this.state.followers != undefined &&
                                this.state.followers.length === 0 &&
                                <div>
                                    <h4>No followers</h4>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'following' &&
                                this.state.following != undefined &&
                                this.state.following.length > 0 &&
                                <div>
                                    <UserFollowing following={this.state.following}/>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'following' &&
                                this.state.following != undefined &&
                                this.state.following.length === 0 &&
                                <div>
                                    <h4>Not following anyone</h4>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </AnimatedDiv>
        );
    }

}

export default Profile;
