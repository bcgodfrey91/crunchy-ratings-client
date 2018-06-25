import React, { Component } from 'react';
import ShowList from '../ShowList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    };
  }

  componentDidMount() {
    this.fetchShows()
    .then(res => this.setState({ shows: res }))
    .catch(err => console.log(err));
  }

  fetchShows = async () => {
    const response = await fetch('/shows');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <ShowList
          shows={this.state.shows}
        />
      </div>
    );
  }
}

export default App;
