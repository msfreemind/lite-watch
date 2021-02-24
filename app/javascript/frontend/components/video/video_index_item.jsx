import React from 'react';
import { Link } from 'react-router-dom'

const VideoIndexItem = ({ video }) => {
  return (
    <li>
      <Link to={`/videos/${video.id}`}>
        {video.thumbnailUrl}
        {video.title}
      </Link>

      {video.author}
    </li>
  );
};

export default VideoIndexItem;