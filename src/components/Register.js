import React from 'react';
import {Link} from 'react-router-dom'
import UserService from '../services/UserService'

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            username: '',
            password: '',
            verifyPassword: ''
        }
    }

    usernameChanged = (event) => {
        this.setState({
                          username: event.target.value
                      })
    };

    passwordChanged = (event) => {
        this.setState({
                          password: event.target.value
                      })
    };

    verifyPasswordChanged = (event) => {
        this.setState({
                          verifyPassword: event.target.value
                      })
    };

    registerUser = () => {
        var user = {
            username: this.state.username,
            password: this.state.password
        };
        if (this.state.username == '' || this.state.password == '') {
            alert('Cannot leave the username or password blank')
            this.setState({
                              username: '',
                              password: '',
                              verifyPassword: ''
                          })
        }
        else if (this.state.password !== this.state.verifyPassword) {
            alert('Password does not match. Try again!');
            this.setState({
                              password: '',
                              verifyPassword: ''
                          })
        } else {
            this.userService.register(user).then(response => {
                if (response.username != null) {
                    this.props.history.push('/profile')
                } else if (response.username == null) {
                    alert("This username is already taken. Try some other username.")
                    this.setState({
                                      username: '',
                                      password: '',
                                      verifyPassword: ''
                                  })
                }
            })
        }
    };

    render() {
        return (
            <div className={"background"}>
                <div className={"box"}>
                    <form className={"box-elements"}>
                        <h1>Sign Up</h1>
                        <input className={"form-control my-2"} type={"text"} placeholder={"Username"}
                        onChange={this.usernameChanged}/>
                        <input className={"form-control my-2"} type={"password"} placeholder={"Password"}
                        onChange={this.passwordChanged}/>
                        <input className={"form-control my-2"} type={"password"} placeholder={"Verify Password"}
                        onChange={this.verifyPasswordChanged}/>
                        <button className={"red-button my-2"} onClick={this.registerUser}>
                            Sign Up
                        </button>
                        <p>
                            Already a member?
                        </p>
                        <Link to={"/"}>Sign in here!</Link>
                    </form>
                </div>
            </div>
        );
    }

}

export default Register;
