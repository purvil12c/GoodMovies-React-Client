import React from 'react';
import "./LoginRegister.css"
import {Link} from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div className={"background"}>
                <div className={"box"}>
                    <form className={"box-elements"}>
                        <h1>Sign In</h1>
                        <input className={"form-control my-2"} type={"text"}
                               placeholder={"Username"}/>
                        <input className={"form-control my-2"} type={"password"}
                               placeholder={"Password"}/>
                        <button className={"red-button my-2"}>Sign In</button>
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
