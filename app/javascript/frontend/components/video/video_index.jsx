import React from 'react';
import VideoIndexItem from './video_index_item.jsx';

const VideoIndex = ({ videos }) => {
  return (
    <ul>
      {videos.map((video, idx) => <VideoIndexItem key={idx} video={video}/>)}
    </ul>
  );
}

export default VideoIndex;