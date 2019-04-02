import React from 'react'
import ProfileNavBar from "./ProfileNavBar";
import './Profile.css'
import UserInformation from "./UserInformation";
import UserReviews from "./UserReviews";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabInfo: 'userInfo'
        }
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
            <div className={"background"}>
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
                                                Follow <i className="fa fa-plus mx-1"></i></button>
                                        </div>
                                    </div>
                                    <div className={"col-sm-12 col-md-8 col-lg-10"}>
                                        <h1>@username</h1>
                                        <div className={"row"}>
                                            <div className={"col-12"}>
                                                <button type="button" className="btn btn-primary">Movies
                                                    <span className="badge badge-light mx-1">9</span>
                                                </button>
                                            </div>
                                            <div className={"col-12"}>
                                                <button type="button" className="btn btn-primary my-2">
                                                    Followers <span className="badge badge-light mx-1">200</span>
                                                </button>
                                            </div>
                                            <div className={"col-12"}>
                                                <button type="button" className="btn btn-primary">
                                                    Extra
                                                    <span className="badge badge-light mx-1">9</span>
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
                                <div>
                                    <UserInformation/>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'watchList' &&
                                <div>
                                    <h1>
                                        Watchlist
                                    </h1>
                                </div>
                            }
                            {
                                this.state.tabInfo == 'userReviews' &&
                                <div>
                                    <UserReviews/>
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
