import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from "./components/Register";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route path="/" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
