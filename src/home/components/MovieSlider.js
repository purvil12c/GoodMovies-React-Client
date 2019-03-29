import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import {MovieSliderItem} from "../components/MovieSliderItem";

export default class MovieSlider extends React.Component {

    renderMovieCarouselItems(movies) {
        let moviesToRender = null;

        if (movies.length !== 0) {

            let movieArray = [];
            let posterArray = [];

            let splicedMovieArray;
            let splicedPosterArray;

            let movieRenderList = [];
            let posterRenderList = [];

            movies.map((movie, index) => {
                let poster = 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/03/D2wo1l0UkAA3Bu7.jpg-large.jpg';
                movieArray.push(movie);
                posterArray.push(poster);
            });

            splicedMovieArray = movieArray.splice(0, Math.floor(movieArray.length / 3) * 3);
            splicedPosterArray = posterArray.splice(0, Math.floor(posterArray.length / 3) * 3);

            let movieSet, posterSet;

            while (splicedMovieArray.length > 0) {
                movieSet = splicedMovieArray.splice(0, 3);
                posterSet = splicedPosterArray.splice(0, 3);

                movieRenderList.push(movieSet);
                posterRenderList.push(posterSet);
            }

            moviesToRender = movieRenderList.map(
                function (movieSet, index) {
                    return <MovieSliderItem key={index} movies={movieSet} posters={posterRenderList[index]}/>
                }, this);

        }
        return (moviesToRender);
    }


    render() {
        let movies = this.props.movies;
        if (movies) {
            return (
                <div>
                    <Carousel showArrows={true}
                              showStatus={false}
                              autoPlay={true}
                              useKeyboardArrows={true}
                              dynamicHeight={true}
                              infiniteLoop={true}
                              showThumbs={false}>
                        {this.renderMovieCarouselItems(movies)}
                    </Carousel>
                </div>
            );
        }
        else {
            return (

                <div className="ml-4">
                    <h5>Fetching...</h5>
                </div>
            );
        }
    }
}
