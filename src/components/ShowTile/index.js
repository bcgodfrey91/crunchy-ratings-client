import React from 'react';
import './ShowTile.css';
import star from './star.svg';

const ShowTile = ({ title, description, image, ranking, rating, href }) => {
  return (
    <div className='show-tile'>
      <div className="show-tile-content-container">
        <div className="image-container">
          <img
            className="show-image"
            src={image}
            alt={`${title} Poster`}
          />
        </div>
          <div className="show-tile-content">
            <p className="show-title"><span>{ranking}. </span>{title}</p>
            <div className="mobile-rating-border">
              <img
                className="star-icon"
                src={star}
                alt="Star Rating Icon"
              />
              <p className="show-rating">{rating}</p>
            </div>
            <p className="show-description">{description}</p>
          </div>
          <div className="rating-container">
            <div className="rating-border">
              <img
                className="star-icon"
                src={star}
                alt="Star Rating Icon"
              />
              <p className="show-rating">{rating}</p>
            </div>
            <a
              className="show-link"
              href={href}
              target="_blank"
            >
            <button className="watch-button">
              <span>Watch</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShowTile;
