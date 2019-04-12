import React from 'react'
import {Link} from 'react-router-dom'

class UserWatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            watchlist: this.props.watchlist
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.watchlist.map(movie => {
                            return (
                                <li className="list-group-item">
                                    <Link to={'/movie/' + movie.movieId}>
                                        {movie.movieName}
                                    </Link>
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