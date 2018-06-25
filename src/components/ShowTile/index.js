import React from 'react';
import './ShowTile.css';

const ShowTile = ({ title, description, image, rating, href }) => {
  return (
    <div className="show-tile">
      <img className="show-tile-image" src={image} alt={`${title} Poster`} />
      <span className="show-tile-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>{rating}/5.0</h2>
        <a href={href}>Watch This Show on Crunchyroll</a>
      </span>
    </div>
  );
}

export default ShowTile;
