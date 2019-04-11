import React from 'react'
import UserService from '../services/UserService'

class OthersProfile extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        const id = props.match.params.id;
        this.state = ({
            id: id
        })

    }

    componentDidMount() {
        this.userService.findUserById(this.state.id).then(
            user => this.setState({
                                      username: user.username,
                                      followers: user.followers,
                                      following: user.following,
                                      reviews: user.reviews,
                                      watchlist: user.watchlist,
                                      type: user.type
                                  })
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.username !== undefined &&
                    <h1 className={"white-title"}>{this.state.username}</h1>
                }
            </div>
        );
    }

}

export default OthersProfile;
