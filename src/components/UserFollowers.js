import React from 'react'
import {Link} from "react-router-dom";

class UserFollowers extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            followers: this.props.followers
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.followers.map(user => {
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

export default UserFollowers