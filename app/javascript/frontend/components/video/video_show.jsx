import React from 'react';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;

    return (
      <div>
        <video controls width="600">
          <source src={video.videoUrl} type="video/mp4"/>
          Sorry, your browser doesn't support embedded videos.
        </video>

        <h2>{video.title}</h2>
        <p>{video.description}</p>
  
        <h2>Comments</h2>
        Todo
      </div>
    );
  }
}

export default VideoShow;