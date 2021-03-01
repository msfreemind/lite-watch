import React from 'react';
import VideoIndex from '../video/video_index.jsx';

const Search = ({ titleFilter, videos, updateFilter, titleParam }) => {
  return (
    <div className="videos-index">
      <h1>{titleFilter === "" ? "" : `Search Results: "${titleFilter}"`}</h1>
      <VideoIndex videos={videos} updateFilter={updateFilter} titleParam={titleParam}/>
    </div>
  );
}

export default Search;