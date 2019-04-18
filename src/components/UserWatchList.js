import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class UserWatchList extends React.Component {
    constructor(props) {
        super(props);
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
        this.props.deleteFromWatchlist(movieId);
    };

    render() {
        return (
            <div className="row card-group">
                {
                    this.state.watchlist.map(movie => {
                        return (
                            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mt-2'>
                                <div className='card'>
                                    <Link to={{pathname: `/movie/${movie.movieId}`, source: 'profile'}}>
                                        <img style={{width: '185px', height: 'auto'}}
                                             className='card-img-top' src={movie.imageUrl}
                                             alt='Card image cap'/>
                                    </Link>
                                    <div className='card-body'>
                                        <h5 className='bold-text'>{movie.movieName}</h5>
                                        {
                                            this.props.loggedInUser._id
                                            === this.props.currentUser._id &&
                                            <div className="col-auto">
                                                <button className="btn btn-danger"
                                                        onClick={() => this.deleteFromWatchlist(
                                                            movie.movieId)}>Delete
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        );
    }

}

export default UserWatchList;
