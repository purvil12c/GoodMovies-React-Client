import React, {Component} from 'react';
import Login from "./components/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from "./components/Register";
import Profile from "./components/Profile";
import MovieDetailsComponent from "./components/MovieDetailsComponent/MovieDetailsComponent";
import HomeContainer from "./home/containers/HomeContainer";

class App extends Component {
    movie = {
        title: 'Avengers: Endgame',
        director: 'Anthony Russo, Joe Russo',
        writer: 'Christopher Markus, Stephen McFeely',
        synopsis: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe.',
        background: 'https://cdn.guidingtech.com/imager/media/assets/210675/Best-Avengers-Endgame-Avengers-4-Wallpapers-for-Desktop-and-Mobile-5_4d470f76dc99e18ad75087b1b8410ea9.jpg',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        cast: [
            {
                image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
                title: 'Robert Downey Jr.'
            },
            {
                image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
                title: 'Robert Downey Jr.'
            },
            {
                image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
                title: 'Robert Downey Jr.'
            },
            {
                image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
                title: 'Robert Downey Jr.'
            },
            {
                image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
                title: 'Robert Downey Jr.'
            }
        ],
        reviews: [
            {
                title: 'Avengers Infinity War: Marvels crown jewel',
                user: 'Purvil Bambharolia',
                body: 'Let me be clear Infinity War is not flawless, it has its faults but thankfully they are overshadowed by two hours of awesomeness.'
            },
            {
                title: 'Excellent Film',
                user: 'Purvil Bambharolia',
                body: 'I was amazed to see so many negative reviews'
            },
            {
                title: 'Excellent Film',
                user: 'Purvil Bambharolia',
                body: 'I was amazed to see so many negative reviews'
            },
            {
                title: 'Excellent Film',
                user: 'Purvil Bambharolia',
                body: 'I was amazed to see so many negative reviews'
            },
            {
                title: 'Excellent Film',
                user: 'Purvil Bambharolia',
                body: 'I was amazed to see so many negative reviews'
            },
            {
                title: 'Excellent Film',
                user: 'Purvil Bambharolia',
                body: 'I was amazed to see so many negative reviews'
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route path="/" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/movieDetail" exact
                               component={() => <MovieDetailsComponent movie={this.movie}/>}/>
                        <Route path="/home/:id" exact component={HomeContainer}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
