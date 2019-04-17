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

    getMovieReviews(movieId) {
        return fetch(constants.GET_REVIEWS_FOR_MOVIE_URL.replace('MOVIE_ID', movieId), {
            method: 'GET'
        }).then(function (response) {
            if(response.headers.get("content-type")!=null)
                return response.json();
            else return null;
        });
    }

    createMovieReview(reviewBody, reviewTitle, movieId, userId, username, movieName) {
        return fetch(constants.ADD_REVIEW_FOR_MOVIE_URL,
            {
                method : 'POST',
                body : JSON.stringify({'body': reviewBody, 'title': reviewTitle,
                    'movieId': movieId, 'userId': userId, 'username': username, 'movieName': movieName}),
                headers: {
                    'content-type':'application/json'
                }})
            .then(function(response) {
                var contentType = response.headers.get("content-type");
                if(contentType && contentType.includes("application/json")) {
                    return response.json();
                }
                else {
                    return null;
                }
            });
    }

    addMovieToWatchlist(userId, movieId, movieName, moviePosterUrl) {
        return fetch(constants.ADD_MOVIE_TO_WATCHLIST_URL.replace('MOVIE_ID', movieId).replace('USER_ID', userId),
            {
                method : 'POST',
                body : JSON.stringify({'movieName': movieName, 'imageUrl': moviePosterUrl}),
                headers: {
                    'content-type':'application/json'
                }})
            .then(function(response) {
                var contentType = response.headers.get("content-type");
                if(contentType && contentType.includes("application/json")) {
                    return response.json();
                }
                else {
                    return null;
                }
            });
    }

    removeMovieFromWatchlist(userId, movieId) {
        return fetch(constants.REMOVE_MOVIE_FROM_WATCHLIST_URL.replace('MOVIE_ID', movieId).replace('USER_ID', userId),
            {
                method : 'POST',
                headers: {
                    'content-type':'application/json'
                }})
            .then(function(response) {
                var contentType = response.headers.get("content-type");
                if(contentType && contentType.includes("application/json")) {
                    return response.json();
                }
                else {
                    return null;
                }
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