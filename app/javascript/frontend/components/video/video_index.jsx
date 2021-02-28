import React from 'react';
import VideoIndexItem from './video_index_item.jsx';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return (
      <ul className="thumbnails">
        {this.props.videos.map( (video, idx) => <VideoIndexItem key={idx} video={video}/> )}
      </ul>
    );
  }
}

export default VideoIndex;