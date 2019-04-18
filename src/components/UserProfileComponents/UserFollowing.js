import React from 'react'
import {Link} from 'react-router-dom'

class UserFollowing extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            following: this.props.following
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
                          following: nextProps.following
                      })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.following.map(user => {
                            return (
                                <Link className='col-12 mb-2' style={{textDecoration: 'none'}}
                                      to={`/profile/${user.userId}`}>
                                    <li className='card shadow bg-white rounded'>
                                        <div className="row no-gutters">
                                            <div className="col-auto m-4">
                                                <img src={"https://picsum.photos/90/90"}
                                                     className={"rounded-circle"}/>
                                            </div>
                                            <h4 className="m-4 black-title">{user.username}</h4>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default UserFollowing