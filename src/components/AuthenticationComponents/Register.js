import React from 'react';
import {Link} from 'react-router-dom'
import UserService from '../../services/UserService'

import logo from '../../assets/goodmovies_logo.png';

import posed from 'react-pose';

const AnimatedDiv = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1}
});

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            verifyPassword: '',
            type: 'USER'
        }
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 500);
    }

    firstnameChanged = (event) => {
        this.setState({
                          firstname: event.target.value
                      })
    };

    lastnameChanged = (event) => {
        this.setState({
                          lastname: event.target.value
                      })
    };

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

    typeChanged = (event) => {
        console.log(event.target.value)
        this.setState({
                          type: event.target.value
                      })
    };

    registerUser = () => {
        var user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
            type: this.state.type
        };
        //The user object which we pass in backend to create an instance
        console.log(user)
        if (this.state.username == '' || this.state.password == '') {
            alert('Cannot leave the username or password blank')
            this.setState({
                              username: '',
                              password: '',
                              verifyPassword: ''
                          })
        } else if (this.state.password !== this.state.verifyPassword) {
            alert('Password does not match. Try again!');
            this.setState({
                              password: '',
                              verifyPassword: ''
                          })
        } else {
            this.userService.signUp(user).then(response => {
                if (response.username != null) {
                    this.props.history.push('/home')
                } else if (response.message) {
                    alert("Seems like this username is already taken. Try some other username.");
                    this.setState({
                                      firstname: '',
                                      lastname: '',
                                      type: 'USER',
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
            <AnimatedDiv pose={this.state.isVisible ? 'visible' : 'hidden'} className={"background"}>
                <div className="row col-12 justify-content-center" style={{backgroundColor: 'transparent', margin: 0}}>
                  <img src={logo}/>
                </div>
                <div className={"box"}>
                    <form className={"box-elements"}>
                        <h1>Sign Up&nbsp;<i class="fa fa-user-plus"></i></h1>
                        <input className={"form-control my-2"} type={"text"}
                               placeholder={"Firstname"}
                               onChange={this.firstnameChanged}
                               value={this.state.firstname}/>
                        <input className={"form-control my-2"} type={"text"}
                               placeholder={"Lastname"}
                               onChange={this.lastnameChanged}
                               value={this.state.lastname}/>
                        <input className={"form-control my-2"} type={"text"}
                               placeholder={"Username"}
                               onChange={this.usernameChanged}
                               value={this.state.username}/>
                        <input className={"form-control my-2"} type={"password"}
                               placeholder={"Password"}
                               onChange={this.passwordChanged}
                               value={this.state.password}/>
                        <input className={"form-control my-2"} type={"password"}
                               placeholder={"Verify Password"}
                               onChange={this.verifyPasswordChanged}
                               value={this.state.verifyPassword}/>

                        <select id="role" className="form-control" onChange={this.typeChanged}
                                value={this.state.type}>
                            <option value="normal">User</option>
                            <option value="critic">Critic</option>
                        </select>

                        <button className={"red-button my-2"} onClick={this.registerUser}
                                type={"button"}>
                            Sign Up
                        </button>
                        <p>
                          <Link to={"/login"} style={{color: 'white'}}>
                              Already a member?&nbsp;Sign in here!</Link>
                        </p>
                        <Link to={"/home"} style={{color: 'white'}}>Continue as Guest</Link>
                    </form>
                </div>
            </AnimatedDiv>
        );
    }

}

export default Register;
