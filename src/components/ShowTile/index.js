import React from 'react';
import './ShowTile.css';

const ShowTile = ({ title, description, image, rating, href }) => {
  return (
    <div className="show-tile">
      <div className="image-container">
        <img
          className="show-image"
          src={image}
          alt={`${title} Poster`}
        />
      </div>
      <span className="show-tile-content">
        <h1 className="show-title">{title}</h1>
        <p className="show-description">
          {description}
          {' '}
          <a
            className="show-link"
            href={href}
            target="_blank"
          >
            Watch {title} on Crunchyroll
          </a>
        </p>
      </span>
      <div className="rating-container">
        <div className="rating-boarder">
          <h3 className="show-rating">{rating}</h3>
        </div>
      </div>
    </div>
  );
}

export default ShowTile;
