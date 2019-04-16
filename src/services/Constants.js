export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
export const TMDB_BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';
export const API_KEY = 'c5caca19c541b3bea74c471a0a6adf98';

export const HEROKU_BASE_URL = 'https://express-goodmovies-server.herokuapp.com';


export const POPULAR_MOVIES_URL = TMDB_BASE_URL + '/discover/movie?api_key=' + API_KEY + '&&sort_by=popularity.desc';
export const NOW_PLAYING_MOVIES_URL = TMDB_BASE_URL + '/movie/now_playing?api_key=' + API_KEY;
export const MOVIE_DETAIL_URL = TMDB_BASE_URL + '/movie/MOVIE_ID?api_key=' + API_KEY;
export const MOVIE_CAST_URL = TMDB_BASE_URL + '/movie/MOVIE_ID/credits?api_key=' + API_KEY;
export const MOVIE_SEARCH_URL = TMDB_BASE_URL + '/search/movie?api_key=' + API_KEY + '&query=QUERY';
export const GET_REVIEWS_FOR_MOVIE_URL = HEROKU_BASE_URL + '/reviews?movieId=MOVIE_ID';
export const ADD_REVIEW_FOR_MOVIE_URL = HEROKU_BASE_URL + '/reviews';
export const ADD_MOVIE_TO_WATCHLIST_URL = HEROKU_BASE_URL + '/users/USER_ID/watchlist/MOVIE_ID';
export const REMOVE_MOVIE_FROM_WATCHLIST_URL = HEROKU_BASE_URL + '/users/USER_ID/unwatchlist/MOVIE_ID';
export const TWITTER_SEARCH_BY_MOVIE_NAME_URL = HEROKU_BASE_URL + '/twitter/MOVIE_NAME';
