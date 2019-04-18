import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../assets/goodmovies_logo.png";

class ProfileNavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <Link to="/home">
                    <button type='btn' className="text-white btn">
                        <img src={logo}/>
                    </button>
                </Link>
            </nav>
        );
    }

}

export default ProfileNavBar;
