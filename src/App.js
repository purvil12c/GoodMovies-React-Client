import React, {Component} from 'react';
import Login from "./components/Login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from "./components/Register";
import Profile from "./components/Profile";
import MovieDetailsComponent from "./components/MovieDetailsComponent/MovieDetailsComponent";
import HomeContainer from "./home/containers/HomeContainer";
import MovieSearchComponent from "./components/MovieSearchComponent/MovieSearchComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route path="/" exact component={HomeContainer}/>
                        <Route path="/home" exact component={HomeContainer}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/profile/:id" exact component={Profile}/>
                        <Route path='/movie/:movieId' exact component={MovieDetailsComponent}/>
                        <Route path='/search/:query' exact component={MovieSearchComponent}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
