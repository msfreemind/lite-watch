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

  shuffle(videos) {
    for (let i = videos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [videos[i], videos[j]] = [videos[j], videos[i]];
    }
    return videos;
  }

  render() {
    const shuffledVideos = this.shuffle(this.props.videos);

    return (
      <ul className="thumbnails">
        { shuffledVideos.map( (video, idx) => <VideoIndexItem key={idx} video={video}/> ) }
      </ul>
    );
  }
}

export default VideoIndex;