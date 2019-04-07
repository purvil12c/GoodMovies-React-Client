import * as constants from '../services/Constants'

let _singleton = Symbol();

class MovieServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new MovieServiceClient(_singleton);
        return this[_singleton]
    }

    getPopularMovies() {
        return fetch(constants.POPULAR_MOVIES_URL, {
            method: 'GET'
        }).then(function (response) {
            if(response.headers.get("content-type")!=null)
                return response.json();
            else return null;
        });
    }

    getNowPlayingMovies() {
        return fetch(constants.NOW_PLAYING_MOVIES_URL, {
            method: 'GET'
        }).then(function (response) {
            if(response.headers.get("content-type")!=null)
                return response.json();
            else return null;
        });
    }

    getMovieDetails(movieId) {
        return fetch(constants.MOVIE_DETAIL_URL.replace('MOVIE_ID', movieId), {
            method: 'GET'
        }).then(function (response) {
            if(response.headers.get("content-type")!=null)
                return response.json();
            else return null;
        });
    }

    getMovieCast(movieId) {
        return fetch(constants.MOVIE_CAST_URL.replace('MOVIE_ID', movieId), {
            method: 'GET'
        }).then(function (response) {
            if(response.headers.get("content-type")!=null)
                return response.json();
            else return null;
        });
    }

    searchMovieForQuery(searchQuery) {
        return fetch(constants.MOVIE_SEARCH_URL.replace('QUERY', searchQuery), {
            method: 'GET'
        }).then(function (response) {
            if(response.headers.get("content-type")!=null)
                return response.json();
            else return null;
        });
    }
}

export default MovieServiceClient;