import React from 'react';
import './ShowTile.css';

const ShowTile = ({ title, description, image, rating, href, trait }) => {
  return (
    <div className={`show-tile ${trait}`}>
      <div className="image-container">
        <img
          className="show-image"
          src={image}
          alt={`${title} Poster`}
        />
      </div>
      <span className="show-tile-content">
        <h1 className="show-title">{title}</h1>
        <p className="show-description">{description}</p>
      </span>
      <div className="rating-container">
        <div className="rating-border">
          <h3 className="show-rating">{rating}</h3>
        </div>
          <a
            className="show-link"
            href={href}
            target="_blank"
          >
          <button className="watch-button">
            Watch
          </button>
        </a>
      </div>
    </div>
  );
}

export default ShowTile;
