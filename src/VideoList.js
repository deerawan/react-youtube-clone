import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
  render() {
    const videos = this.props.videos.map((video) => {
      return <VideoListItem key={video.etag} video={video} />
    });
    return (
      <ul className="col-md-4 list-group">
        {videos}
      </ul>
    );
  }
}

export default VideoList;