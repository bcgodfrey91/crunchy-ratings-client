import React from 'react';
import './ShowTile.css';

const ShowTile = ({ title, description, image, rating, href }) => {
  return (
    <div className="show-tile">
      <img className="show-image" src={image} alt={`${title} Poster`} />
      <span className="show-tile-content">
        <h1 className="show-title">{title}</h1>
        <p className="show-description">
          {description}
          {' '}
          <a className="show-link" href={href}>Watch {title} on Crunchyroll</a>
        </p>
      </span>
      <div className="rating-container">
        <h1>Rating:</h1>
        <h2 className="show-rating">{rating}/5</h2>
      </div>
    </div>
  );
}

export default ShowTile;
