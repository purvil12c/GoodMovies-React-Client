import * as constants from '../services/Constants'

class TwitterService {

  searchTweetsByMovie = (movieName) =>
    fetch(constants.TWITTER_SEARCH_BY_MOVIE_NAME_URL.replace('MOVIE_NAME', movieName), {
        method: 'GET'
    })

}

export default TwitterService;
