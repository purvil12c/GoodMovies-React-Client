import React from 'react';
import {Link} from "react-router-dom";
import * as constants from '../../services/Constants'
export const MovieSearchResultItem = ({searchResult}) => {
    return (
        <Link className='col-2' to={`/movie/${searchResult.id}`}>
        <li className='card shadow p-3 bg-white rounded'>
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={constants.TMDB_IMAGE_BASE_URL + '/w92' + searchResult.poster_path} className="img-fluid m-2" alt=""/>
                </div>
                <div className="col">
                    <div className="card-block">
                        <h6 className="card-title m-4">{searchResult.title}</h6>
                    </div>
                </div>
            </div>
        </li>
        </Link>
)
}