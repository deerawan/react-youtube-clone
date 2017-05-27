import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
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

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });

    this.setVideo = this.setVideo.bind(this);
  }

  setVideo(video) {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.setVideo}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
