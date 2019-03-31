import React from 'react';
import {Link} from 'react-router-dom'

class Register extends React.Component{
    render() {
        return (
            <div className={"background"}>
                <div className={"box"}>
                    <form className={"box-elements"}>
                        <h1>Sign Up</h1>
                        <input className={"form-control my-2"} type={"text"} placeholder={"Username"}/>
                        <input className={"form-control my-2"} type={"password"} placeholder={"Password"}/>
                        <input className={"form-control my-2"} type={"password"} placeholder={"Verify Password"}/>
                        <button className={"red-button my-2"}>Sign Up</button>
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
