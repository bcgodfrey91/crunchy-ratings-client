import React from 'react';
import './ShowTile.css';
import star from './star.svg';

const ShowTile = ({ title, description, image, rating, href }) => {
  return (
    <div className='show-tile'>
      <div className="image-container">
        <img
          className="show-image"
          src={image}
          alt={`${title} Poster`}
        />
      </div>
      <div className="show-tile-content-container">
        <div className="show-tile-content">
          <h3 className="show-title">{title}</h3>
          <p className="show-description">{description}</p>
        </div>
        <div className="rating-container">
          <div className="rating-border">
            <img
              className="star-icon"
              src={star}
              alt="Star Rating Icon"
            />
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
    </div>
  );
}

export default ShowTile;
