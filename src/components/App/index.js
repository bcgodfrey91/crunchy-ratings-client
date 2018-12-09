import React, { Component } from 'react';
import Hero from '../Hero';
import ShowList from '../ShowList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shows: [],
    };
  }

  componentDidMount() {
    this.fetchShows()
    .then(res => this.setState({ shows: res, isLoading: false }))
    .catch(err => console.log(err));
  }

  fetchShows = async () => {
    const response = await fetch("https://crunchy-rank-api.herokuapp.com/shows");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="App">
          <Hero />
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <Hero />
        <ShowList
          shows={this.state.shows}
        />
      </div>
    );
  }
}

export default App;
