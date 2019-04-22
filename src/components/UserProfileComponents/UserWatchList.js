import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class UserWatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            watchlist: this.props.watchlist
        });
    }

    componentWillReceiveProps(nextProps) {
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
                            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch'>
                                <div className='card mb-2 shadow'>
                                    <img className='card-img-top'
                                         src={movie.imageUrl}
                                         style={{width: '185px'}}
                                         alt='https://picsum.photos/100/100'/>
                                    <div className="card-footer">
                                        {
                                            this.props.loggedInUser._id
                                            === this.props.currentUser._id &&
                                                <button className="btn btn-danger"
                                                        onClick={() => this.deleteFromWatchlist(
                                                            movie.movieId)}>Remove
                                                </button>
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
