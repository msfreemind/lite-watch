import React from 'react';
import { Link } from 'react-router-dom'

const VideoIndexItem = ({ video }) => {
  let viewText = "views";
  
  if (video.playCount === 1) {
    viewText = "view"
  }

  return (
    <li className="thumbnail">
      <Link to={`/videos/${video.id}`}>
        <img src={video.thumbnailUrl}/>
        <strong className="bold">{video.title}</strong>
      </Link>

      <small>{video.author}</small>
      <small>{video.playCount} {viewText}</small>
    </li>
  );
};

export default VideoIndexItem;