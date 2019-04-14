import React from 'react'
import {Link} from 'react-router-dom'

class UserFollowing extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            following: this.props.following
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.following.map(user => {
                            return (
                                <li className="list-group-item">
                                    <Link to={`/profile/${user.userId}`}>
                                        {user.username}
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

export default UserFollowing