import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img
            className="media-object"
            src={video.snippet.thumbnails.default.url}
            alt='video'
          />
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
