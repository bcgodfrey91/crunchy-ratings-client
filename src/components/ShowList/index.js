import React, { Component } from 'react';
import ShowTile from '../ShowTile';
import './ShowList.css';

class ShowList extends Component {
  render() {
    const renderShows = () => {
      return this.props.shows.map((show, index) => {
        return (
          <div className='show-tile-container' key={show._id}>
            <ShowTile
              title={show.title}
              description={show.description}
              rating={show.rating}
              image={show.image}
              href={show.url}
              trait={show.trait}
            />
          </div>
        );
      })
    }
    return (
      <div className="show-list">
        {renderShows()}
      </div>
    );
  }
}

export default ShowList;
