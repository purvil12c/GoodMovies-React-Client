import React from 'react';
import "./LoginRegister.css"
import {Link} from 'react-router-dom'
import UserService from '../../services/UserService'
import logo from '../../assets/goodmovies_logo.png';

import posed from 'react-pose';

const AnimatedDiv = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1}
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 500);
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
            <AnimatedDiv pose={this.state.isVisible ? 'visible' : 'hidden'} className={"background"}>
              <div className="row col-12 justify-content-center" style={{backgroundColor: 'transparent', margin: 0}}>
                <img src={logo}/>
              </div>
                <div className={"box"}>
                    <form className={"box-elements"}>
                        <h1>Sign In&nbsp;<i class="fa fa-sign-in-alt"></i></h1>
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
                            <Link to={"/register"} style={{color: 'white'}}>Not a member?&nbsp;Sign Up here!</Link>
                        </p>
                        <br/>
                        <Link to={"/home"} style={{color: 'white'}}>Continue as Guest</Link>
                    </form>
                </div>
            </AnimatedDiv>
        );
    }

}

export default Login;
