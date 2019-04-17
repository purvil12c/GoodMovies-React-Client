import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import UserService from '../services/UserService'
import * as constants from "../services/Constants";

class UserWatchList extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = ({
            watchlist: this.props.watchlist
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
                          watchlist: nextProps.watchlist
                      })
    }

    deleteFromWatchlist = (movieId) => {
        let watchlist = this.state.watchlist.filter(movie => movie.movieId !== movieId);
        this.setState({
                          watchlist: watchlist
                      });
        this.userService.deleteFromWatchList(this.props.currentUser._id, movieId)
    };

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.watchlist.map(movie => {
                            return (
                                <li className='card shadow p-3 bg-white rounded'>
                                    <Link className='col-12 mb-2' style={{textDecoration: 'none'}}
                                          to={`/movie/${movie.movieId}`}>
                                        <div className="row no-gutters">
                                            <div className="col-auto">
                                                <img src={movie.imageUrl} className="img-fluid m-2"
                                                     alt=""/>
                                            </div>
                                            <div className="col">
                                                <div className="card-block">
                                                    <h6 className="card-title m-4 black-title">{movie.movieName}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    {
                                        this.props.loggedInUser._id
                                        === this.props.currentUser._id &&
                                        <div className="col-auto">
                                            <i className="fa fa-times float-right"
                                               onClick={() => this.deleteFromWatchlist(
                                                   movie.movieId)}></i></div>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default UserWatchList;