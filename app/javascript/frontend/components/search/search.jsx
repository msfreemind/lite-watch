import React from 'react';
import VideoIndex from '../video/video_index.jsx';
import FilterForm from './filter_form.jsx';

const Search = ({ videos, title, fetchVideos, updateFilter }) => {
  return (
    <div>
      <FilterForm title={title} updateFilter={updateFilter}/>
      <VideoIndex videos={videos} fetchVideos={fetchVideos}/>
    </div>
  );
}

export default Search;