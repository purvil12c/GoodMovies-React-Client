import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles.css'
export const MovieSliderItem = ({movies, posters}) => {
    return (
        <div className="slider-item-background">
            <div className="row">
                <Link className='col-4' to={`/movie/${movies[0].id}`}>
                    <img style={{maxWidth: "350px"}} src={posters[0]}/>
                </Link>
                <Link className='col-4' to={`/movie/${movies[1].id}`}>
                    <img style={{maxWidth: "350px"}} src={posters[1]}/>
                </Link>
                <Link className='col-4' to={`/movie/${movies[2].id}`}>
                    <img style={{maxWidth: "350px"}} src={posters[2]}/>
                </Link>
            </div>
        </div>
    )
}