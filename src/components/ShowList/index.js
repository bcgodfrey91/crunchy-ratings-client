import React, { Component } from 'react';
import ShowTile from '../ShowTile';

class ShowList extends Component {
  render() {
    const renderShows = () => {
      return this.props.shows.map(show => {
        return (
          <ShowTile
            key={show.id}
            title={show.title}
            description={show.description}
            rating={show.rating}
            image={show.image}
            href={show.url}
          />
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
