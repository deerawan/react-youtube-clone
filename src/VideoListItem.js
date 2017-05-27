import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({video}) => {
  const thumbnailUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={thumbnailUrl} alt="" className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;