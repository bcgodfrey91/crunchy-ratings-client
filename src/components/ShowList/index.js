import React, { Component } from 'react';
import ShowTile from '../ShowTile';
import './ShowList.css';

class ShowList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: 25,
    }
  };

  loadMore = () => {
    if (this.state.visible <= this.props.shows.length) {
      this.setState((prev) => {
        return { visible: prev.visible + 25 }
      })
    }
  };

  render() {
    const renderShows = () => {
      return this.props.shows.slice(0, this.state.visible).map((show, index) => {
        return (
          <div className='show-tile-container' key={show._id}>
            <ShowTile
              title={show.title}
              description={show.description}
              ranking={index + 1}
              rating={show.rating}
              image={show.image}
              href={show.url}
              trait={show.trait}
            />
          </div>
        );
      })
    };

    const showButton = () => {
      if (this.state.visible >= this.props.shows.length) {
        return;
      }

      return(
        <button
          onClick={this.loadMore}
          className="load-more"
        >
          Load More
        </button>
      )
    }
    return (
      <div className="show-list">
        {renderShows()}
        {showButton()}
      </div>
    );
  }
}

export default ShowList;
