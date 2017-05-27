import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SearchBar from './SearchBar';

const API_KEY = 'AIzaSyCImIdorYGaR2k3KUIjihza_y_D2zFmnLk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.setVideo = this.setVideo.bind(this);
    this.videoSearch('tukul');
  }

  setVideo(video) {
    this.setState({selectedVideo: video})
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.setVideo}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
