import React from 'react';
import VideoIndexItem from './video_index_item.jsx';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.titleParam) {
      this.props.updateFilter();
    } else {
      this.props.updateFilter("title", this.props.titleParam);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.titleParam !== this.props.titleParam) {
      if (this.props.titleParam) {
        this.props.updateFilter("title", this.props.titleParam);
      } else {
        this.props.updateFilter("title", "");
      }    
    }
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