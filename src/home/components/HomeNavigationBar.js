import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/goodmovies_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const HomeNavigationBar = ({loggedIn, userId, username, logout}) => {
    return (
        <nav className="navbar navbar-inverse">
            <Link to="/home">
                <button type='btn' className="text-white btn">
                    <img src={logo}/>
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
                          className="navbar-nav" to='/profile'>
                        <FontAwesomeIcon icon={ faUser }/>
                        <button type='btn' className="text-white btn">{username}</button>
                    </Link>
                </div>
                <div hidden={!loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to='/login'>
                        <FontAwesomeIcon icon={ faSignOutAlt }/>
                        <button type='btn' className="text-white btn" onClick={logout}>
                            Logout
                        </button>
                    </Link>
                </div>
            </form>
        </nav>
    )
};
