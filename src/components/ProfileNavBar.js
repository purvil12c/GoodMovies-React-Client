import React from 'react'
import {Link} from 'react-router-dom'

class ProfileNavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <Link className={"navbar-brand"} to={"/home"}>GoodMovies</Link>
                </nav>
            </div>
        );
    }

}

export default ProfileNavBar;
