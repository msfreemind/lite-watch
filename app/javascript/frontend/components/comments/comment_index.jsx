import React from 'react';
import CommentIndexItem from './comment_index_item.jsx'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.handleInput = this.handleInput.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  handleInput(event) {
    this.setState({ text: event.target.value });
  }

  submitComment(event) {
    event.preventDefault();

    if (this.props.user) {
      const comment = { text: this.state.text, user_id: this.props.user.id, video_id: this.props.videoId };

      this.props.createComment(comment).then(
        () => this.setState({ text: "" })
      );
    } else {
      this.props.history.push("/login");
    }    
  }

  render() {
    return (
      <div className="video-comments">
        <h3>Comments</h3> 

        <form onSubmit={this.submitComment}>
          <textarea 
            onChange={this.handleInput} 
            placeholder="Leave a comment..." 
            cols="50" 
            rows="1" 
            value={this.state.text}
          />

          <br/>

          <button>Comment</button>
        </form>
  
        <ul className="comments-list">
          {this.props.comments.map((comment, idx) => <CommentIndexItem key={idx} comment={comment}/>)}
        </ul>
      </div>    
    );
  }
}

export default CommentIndex;