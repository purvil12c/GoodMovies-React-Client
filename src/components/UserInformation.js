import React from 'react';
import UserService from '../services/UserService'

class UserInformation extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = ({
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname
        })

    }

    firstNameChanged = (event) => {
        this.setState({
                          firstname: event.target.value
                      })
    };

    lastNameChanged = (event) => {
        this.setState({
                          lastname: event.target.value
                      })
    };

    updateUser = () => {
        var userId = this.props.user._id;
        var user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname
        };
        this.props.updateUser(user, userId);
        alert('User Updated');
    };

    render() {
        return (
            <div>
                <div className={"form-group row"}>
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Firstname</label>
                    <div className={"col sm-10"}>
                        <input className="form-control" id="email"
                               placeholder="Firstname"
                               value={this.state.firstname}
                               onChange={this.firstNameChanged}/>
                    </div>
                </div>
                <div className={"form-group row"}>
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Lastname</label>
                    <div className={"col sm-10"}>
                        <input className="form-control" id="email"
                               placeholder="Lastname"
                               value={this.state.lastname}
                               onChange={this.lastNameChanged}/>
                    </div>
                </div>
                <div className={"form-group row"}>
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email</label>
                    <div className={"col sm-10"}>
                        <input className="form-control" id="email"
                               placeholder="xyz@goodmovies.com"/>
                    </div>
                </div>
                <div className={"form-group row"}>
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Phone</label>
                    <div className={"col sm-10"}>
                        <input type={"number"} className="form-control" id="email"
                               placeholder="(470) 290-9905"/>
                    </div>
                </div>
                <div>
                    <button className={'btn btn-primary'} type={'button'} onClick={this.updateUser}>
                        Update
                    </button>
                </div>
            </div>
        );
    }
}

export default UserInformation;
