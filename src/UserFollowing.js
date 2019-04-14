import React from 'react'

class UserFollowing extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            following: this.props.followers
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.following.map(movie => {
                            return (
                                <li className="list-group-item">
                                    Following users info would be shown here
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