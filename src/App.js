import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePageContainer from './home/containers/HomeContainer'
import {HomeNavigationBar} from "./home/components/HomeNavigationBar";
export default class App extends Component {
    render() {
        return (
            <div>
                    <Router>
                        <div>
                            <div className="container-fluid">
                                <Route path='/home' exact
                                       render={() => <HomeNavigationBar loggedIn={true}/>}/>
                            </div>
                            <div className="m-0">
                                <Route exact path='/' component={HomePageContainer}/>
                            </div>
                        </div>
                    </Router>
            </div>
        )
    }
}