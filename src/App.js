import React, {Component} from 'react';
import Login from "./components/Login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from "./components/Register";
import Profile from "./components/Profile";
import MovieDetailsComponent from "./components/MovieDetailsComponent/MovieDetailsComponent";
import {HomeNavigationBar} from "./home/components/HomeNavigationBar";
import HomeContainer from "./home/containers/HomeContainer";
import MovieSearchComponent from "./components/MovieSearchComponent/MovieSearchComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <div className="container-fluid">
                            <Route path='/home' exact
                                   render={() => <HomeNavigationBar loggedIn={true}/>}/>
                        </div>
                        <div className="m-0">
                            <Route exact path='/' component={HomeContainer}/>
                        </div>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path='/movie/:movieId' exact component={MovieDetailsComponent}/>
                        <Route path='/search/:query' exact component={MovieSearchComponent}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
