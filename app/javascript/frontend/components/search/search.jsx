import React from 'react';
import VideoIndex from '../video/video_index.jsx';

const Search = ({ videos, fetchVideos }) => {
  return (
    <div>
      <VideoIndex videos={videos} fetchVideos={fetchVideos}/>
    </div>
  );
}

export default Search;