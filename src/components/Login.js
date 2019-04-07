import React from 'react';
import "./LoginRegister.css"
import {Link} from 'react-router-dom'
import UserService from '../services/UserService'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            username: '',
            password: ''
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

    login = () => {
        var user = {
            username: this.state.username,
            password: this.state.password
        };

        this.userService.login(user)
            .then(response => {
                if (response.username != null) {
                    this.props.history.push('/home')
                } else if (response.message) {
                    alert("Username and Password does not match with our records. Try again!");
                    this.resetFields();
                }
            })
    };

    resetFields = () =>
        this.setState({
                          username: '',
                          password: ''
                      })

    render() {
        return (
            <div className={"background"}>
                <div className={"box"}>
                    <form className={"box-elements"}>
                        <h1>Sign In</h1>
                        <input className={"form-control my-2"} type={"text"}
                               placeholder={"Username"} value={this.state.username}
                               onChange={this.usernameChanged}/>
                        <input className={"form-control my-2"} type={"password"}
                               placeholder={"Password"} value={this.state.password}
                               onChange={this.passwordChanged}/>
                        <button className={"red-button my-2"} type={"button"} onClick={this.login}>
                            Sign In
                        </button>
                        <p>
                            Not a member?
                        </p>
                        <Link to={"/register"}>Sign Up here!</Link>
                    </form>
                </div>
            </div>
        );
    }

}

export default Login;
