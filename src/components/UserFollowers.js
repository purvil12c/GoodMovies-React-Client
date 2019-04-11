import React from 'react'

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
                        this.state.followers.map(movie => {
                            return (
                                <li className="list-group-item">
                                    Followers info would be shown here
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