import React from 'react';
import {Link} from "react-router-dom";
import * as constants from '../../services/Constants'
export const MovieSearchResultItem = ({searchResult}) => {
    return (
        <Link className='col-12 mb-2' style={{ textDecoration: 'none' }} to={{pathname: `/movie/${searchResult.id}`, source: 'search'}}>
        <li className='card shadow p-3 bg-white rounded'>
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={constants.TMDB_IMAGE_BASE_URL + '/w92' + searchResult.poster_path} className="img-fluid m-2" alt='https://picsum.photos/100/100'/>
                </div>
                <div className="col">
                    <div className="card-block">
                        <h6 className="card-title m-4 black-title">{searchResult.title}</h6>
                    </div>
                    <div className="card-body">
                        <p className="black-title">{searchResult.overview}</p>
                    </div>
                </div>
            </div>
        </li>
        </Link>
)
}