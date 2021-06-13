import React from 'react';
import NotFound from '../not_found.jsx'

class VideoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      noVideo: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.populateFields();
  }

  componentDidUpdate(prevProps) {
    // Ensure that a component update with different video ID repopulates all fields
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.populateFields();
    }
  }

  populateFields() {
    this.props.fetchVideo(this.props.match.params.videoId).then(
      () => this.setState({
        title: this.props.video.title,
        description: this.props.video.description
      }),
      () => this.setState({ noVideo: true })
    );
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title !== "") {
      this.props.updateVideo(this.props.video.id, this.state).then(
        () => this.props.history.push({ pathname: `/videos/${this.props.video.id}` })
      );
    } else {
      const titleError = document.getElementById("no-title");
      titleError.hidden = false;
    }
  }

  handleDelete(event) {
    event.preventDefault();

    this.props.destroyVideo(this.props.video.id).then(
      () => this.props.history.push({ pathname: '/feed' })
    );
  }
  
  render() {
    if (this.props.video) {
      if (this.props.currentUser.username === this.props.video.author) {
        return (
          <div className="form-container">
            <h1>Edit Video Details</h1>
    
            <form>
              Title
              <br/>
              <p id="no-title" className="error" hidden>Please enter a title</p>
              <input onChange={this.handleInput} type="text" name="title" value={this.state.title}/>
    
              <br/>
    
              Description
              <br/>
              <textarea 
                onChange={this.handleInput}
                name="description" 
                cols="30" 
                rows="10" 
                value={this.state.description}
              />
    
              <br/>
    
              <div className="form-submit">
                <button onClick={this.handleSubmit}>Submit Changes</button>
                <button className="red" onClick={this.handleDelete}>Delete Video</button>
              </div>   
            </form>
          </div>
        );
      } else {
        return (          
          <div className="access-denied">
            <h1>Access Denied</h1>
            <p>Only the video author can edit a video</p>
          </div>
        );
      }      
    } else if (this.state.noVideo) {
      return <NotFound/>
    } else {
      return (
        <div></div>
      );
    }     
  }
}

export default VideoEdit;