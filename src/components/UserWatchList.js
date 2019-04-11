import React from 'react'

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
                                    Movie Title would be displayed here -> {movie.movieId}
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