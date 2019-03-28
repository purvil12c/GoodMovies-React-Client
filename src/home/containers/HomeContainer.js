import React from 'react';

import {HomeNavigationBar} from '../components/HomeNavigationBar';



export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
            return (
                <div>
                    <HomeNavigationBar loggedIn = {true}/>
                </div>
            );
    }
}