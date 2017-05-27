import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import logo from './logo.svg';
import './App.css';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

const API_KEY = 'AIzaSyCImIdorYGaR2k3KUIjihza_y_D2zFmnLk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      console.log(videos);
      this.setState({videos});
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
