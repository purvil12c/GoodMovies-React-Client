import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class UserWatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            watchlist: this.props.watchlist
        })
    }

    deleteFromWatchlist = (movieId) => {
        let watchlist = this.state.watchlist.filter(movie => movie.movieId !== movieId);
        this.setState({
                          watchlist: watchlist
                      });

    };

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.watchlist.map(movie => {
                            return (
                                <li className="list-group-item">
                                    <div>
                                        <Link to={'/movie/' + movie.movieId}>
                                            {movie.movieName}
                                        </Link>
                                        <i className="fa fa-times float-right"
                                           onClick={() => this.deleteFromWatchlist(
                                               movie.movieId)}></i>
                                    </div>
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