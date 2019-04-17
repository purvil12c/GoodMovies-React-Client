const user_login_url = 'https://express-goodmovies-server.herokuapp.com/users/login';
const user_get_profile = 'https://express-goodmovies-server.herokuapp.com/users/profile';
const user_signup_url = 'https://express-goodmovies-server.herokuapp.com/users/signup';
const user_logout = 'https://express-goodmovies-server.herokuapp.com/users/logout';
const user_findById = 'https://express-goodmovies-server.herokuapp.com/users/';
const user_deleteReview = 'https://express-goodmovies-server.herokuapp.com/reviews/';
const user_search_url = 'https://express-goodmovies-server.herokuapp.com/users/search/';
const user_updateReview = 'https://express-goodmovies-server.herokuapp.com/reviews/';

export default class UserService {
    login = (user) =>
        fetch(user_login_url, {
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

    signUp = (user) =>
        fetch(user_signup_url, {
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

    updateUser = (user, userId) =>
        fetch(user_findById + userId, {
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response => response.json())

    getProfile = () =>
        fetch(user_get_profile, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

    findUserById = (userId) =>
        fetch(user_findById + userId, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

    logout = () =>
        fetch(user_logout, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

    followUser = (userId, followId) =>
        fetch('https://express-goodmovies-server.herokuapp.com/users/' + userId +
              '/follow/' + followId, {
                  credentials: "include",
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  method: 'POST'
              }).then(response => response.json());

    unfollowUser = (userId, followId) =>
        fetch('https://express-goodmovies-server.herokuapp.com/users/' + userId +
              '/unfollow/' + followId, {
                  credentials: "include",
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  method: 'POST'
              }).then(response => response.json());

    deleteFromWatchList = (userId, movieId) =>
        fetch(user_findById + userId + '/unwatchlist/' + movieId, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json())

    findReviewsByUserId = (userId) =>
        fetch(user_findById + userId + '/reviews', {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())

    search = (searchQuery) =>
        fetch(user_search_url + searchQuery, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

    deleteReview = (reviewId) =>
        fetch(user_deleteReview + reviewId, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
    updateReview = (reviewId, reviewTitle, reviewBody) =>
        fetch(user_updateReview + reviewId, {
            body: JSON.stringify({'body': reviewBody, 'title': reviewTitle}),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response => response.json())

}
