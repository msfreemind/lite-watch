import React from 'react';

const VideoIndexItem = ({ video }) => {
  return (
    <li>
      {video.thumbnailUrl}
      {video.title}
      {video.author}
    </li>
  );
};

export default VideoIndexItem;