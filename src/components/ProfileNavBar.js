import React from 'react'
import {Link} from 'react-router-dom'

class ProfileNavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar transparent fixed-top navbar-expand-lg">
                    <Link className={"navbar-brand white-title"} to={"/home"}>GoodMovies</Link>
                </nav>
            </div>
        );
    }

}

export default ProfileNavBar;
