import React from 'react';
import CommentIndex from '../comments/comment_index.jsx'

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0, dislikes: 0 }

    this.toggleReaction = this.toggleReaction.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId).then(
      () => this.updateReactionCounts()
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId).then(
        () => this.updateReactionCounts()
      );
    }
  }

  updateReactionCounts() {
    this.setState({ likes: this.props.video.likes, dislikes: this.props.video.dislikes });
  }

  toggleReaction(likeValue, event) {
    if (this.props.currentUser) {
      const { currentUser, video, createReaction, reaction } = this.props;
      const newReaction = { like: likeValue, user_id: currentUser.id, video_id: video.id };

      createReaction(newReaction).then(
        () => {
          if (reaction.like === likeValue) {
            this.setState({ [event.target.id]: this.state[event.target.id] -= 1 })
          } else if (event.target.id === "likes") {
            if (reaction.like === false) {
              this.setState({ likes: this.state.likes += 1, dislikes: this.state.dislikes -= 1 })
            } else {
              this.setState({ likes: this.state.likes += 1 })
            }   
          } else {
            if (reaction.like === true) {
              this.setState({ dislikes: this.state.dislikes += 1, likes: this.state.likes -= 1 })
            } else {
              this.setState({ dislikes: this.state.dislikes += 1 })
            }
          }
        }
      );
    }
  }

  render() {
    const { currentUser, video, reaction, comments, createComment, history } = this.props;
    let likedByUser = null;

    if (reaction) {
      likedByUser = reaction.like;
    }

    if (this.props.video) {
      return (
        <div className="video-container">
          <video controls width="650">
            <source src={video.videoUrl} type="video/mp4"/>
            Sorry, your browser doesn't support embedded videos.
          </video>
  
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

          <div className="video-description">
            <h3>{video.author}</h3>
            <p>{video.description}</p>
          </div>
                   
          <CommentIndex history={history} comments={comments} user={currentUser} videoId={video.id} createComment={createComment}/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }   
  }
}

export default VideoShow;