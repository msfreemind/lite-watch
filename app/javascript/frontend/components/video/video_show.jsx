import React from 'react';
import NotFound from '../not_found.jsx'
import CommentIndex from '../comments/comment_index.jsx'

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0, dislikes: 0, noVideo: false, sentPlay: false }

    this.toggleReaction = this.toggleReaction.bind(this);
    this.sendPlay = this.sendPlay.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId).then(
      () => this.updateReactionCounts(),
      () => this.setState({ noVideo: true })
    );
  }

  componentDidUpdate(prevProps) {
    // Ensure that a component update with different video ID fetches the new video
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId).then(
        () => this.updateReactionCounts(),
        () => this.setState({ noVideo: true })
      );
    }
  }

  updateReactionCounts() {
    this.setState({ likes: this.props.video.likes, dislikes: this.props.video.dislikes });
  }

  // Ensures that backend and frontend state (re: reaction counts) remains synchronized and correct
  toggleReaction(likeValue, event) {
    if (this.props.currentUser) {
      const { currentUser, video, createReaction, reaction } = this.props;
      const newReaction = { like: likeValue, user_id: currentUser.id, video_id: video.id };

      createReaction(newReaction).then(
        () => {
          if (reaction && reaction.like === likeValue) {
            this.setState({ [event.target.id]: this.state[event.target.id] -= 1 })
          } else if (event.target.id === "likes") {
            if (reaction && reaction.like === false) {
              this.setState({ likes: this.state.likes += 1, dislikes: this.state.dislikes -= 1 })
            } else {
              this.setState({ likes: this.state.likes += 1 })
            }   
          } else {
            if (reaction && reaction.like === true) {
              this.setState({ dislikes: this.state.dislikes += 1, likes: this.state.likes -= 1 })
            } else {
              this.setState({ dislikes: this.state.dislikes += 1 })
            }
          }
        }
      );
    }
  }

  sendPlay() {
    if (!this.state.sentPlay) {
      this.props.updateVideo(this.props.video.id, { play_count: this.props.video.playCount + 1 });
      this.setState({ sentPlay: true });
    }
  }

  render() {
    const { currentUser, video, reaction, comments, createComment, history } = this.props;
    let likedByUser = null;
    let viewText = "views";
  
    if (video && video.playCount === 1) {
      viewText = "view"
    }

    if (reaction) {
      likedByUser = reaction.like;
    }

    if (video) {
      return (
        <div className="video-container">
          <div className="real-video-container">
            <video onPlay={this.sendPlay} controls controlsList="nodownload" poster={video.thumbnailUrl} width="960" height="540">
              <source src={video.videoUrl} type="video/mp4"/>
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
  
          <div className="video-details">
            <h2>{video.title}</h2>
            
            <ul className="video-reactions">
              <li>
                <i 
                  onClick={e => this.toggleReaction(true, e)}
                  id="likes"
                  className={likedByUser === true ? "fas fa-thumbs-up" : "far fa-thumbs-up"}
                /> 
                {this.state.likes}
              </li>

              <li>
                <i 
                  onClick={e => this.toggleReaction(false, e)}
                  id="dislikes"
                  className={likedByUser === false ? "fas fa-thumbs-down" : "far fa-thumbs-down"}
                /> 
                {this.state.dislikes}
              </li>
            </ul>
          </div>

          <small className="play-count">{video.playCount} {viewText}</small>

          <div className="video-description">
            <h3>{video.author}</h3>
            <p>{video.description}</p>
          </div>
                   
          <CommentIndex history={history} comments={comments} user={currentUser} videoId={video.id} createComment={createComment}/>
        </div>
      );
    } else if (this.state.noVideo) {
      return <NotFound/>;
    } else {
      return (
        <div></div>
      );
    }   
  }
}

export default VideoShow;