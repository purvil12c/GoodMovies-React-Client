import React from 'react'
import {Link} from "react-router-dom";

class UserFollowers extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            followers: this.props.followers
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            followers: nextProps.followers
                      })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.followers.map(user => {
                            return (
                                <Link className='col-12 mb-2' style={{ textDecoration: 'none' }} to={`/profile/${user.userId}`}>
                                    <li className='card shadow bg-white rounded'>
                                        <div className="row no-gutters">
                                            <div className="col-auto m-4">
                                                <img src={"https://picsum.photos/90/90"} className={"rounded-circle"}/>
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

export default UserFollowers