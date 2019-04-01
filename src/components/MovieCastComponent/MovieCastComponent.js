import React from 'react';

const MovieCastComponent = (cast) =>
  <div className="card" style={{width: '18rem'}}>
    <img className="card-img-top" src={cast.cast.image} alt={cast.cast.title}/>
    <div className="card-body">
      <p className="card-text">{cast.cast.title}</p>
    </div>
  </div>

export default MovieCastComponent;
