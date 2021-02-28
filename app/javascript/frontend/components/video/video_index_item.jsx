import React from 'react';
import { Link } from 'react-router-dom'

const VideoIndexItem = ({ video }) => {
  return (
    <li className="thumbnail">
      <Link to={`/videos/${video.id}`}>
        <img src={video.thumbnailUrl}/>
        <strong className="bold">{video.title}</strong>
      </Link>

      <br/>

      {video.author}
    </li>
  );
};

export default VideoIndexItem;