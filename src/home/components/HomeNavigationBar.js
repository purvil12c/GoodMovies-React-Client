import React from 'react'
import {Link} from 'react-router-dom';

export const HomeNavigationBar = ({loggedIn, userId, username, logout}) => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link to="/">
                <button type='btn' className="text-white btn">
                    <h1>Good Movies</h1>
                </button>
            </Link>
            <form className="form-inline">
                <div hidden={loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/login">
                        <button type='btn' className="text-white btn">Login</button>
                    </Link>
                </div>
                <div hidden={!loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to={'/profile'}>
                        <button type='btn' className="text-white btn">{username}</button>
                    </Link>
                </div>
                <div hidden={!loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to='/login'>
                        <button type='btn' className="text-white btn" onClick={logout}>
                            Logout
                        </button>
                    </Link>
                </div>
                <div hidden={loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to='/login'>
                        Login
                    </Link>
                </div>
            </form>
        </nav>
    )
};

