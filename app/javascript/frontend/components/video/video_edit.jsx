import React from 'react';

class VideoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId).then(
      () => this.setState({
        title: this.props.video.title,
        description: this.props.video.description
      })
    );
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();  

    this.props.updateVideo(this.props.video.id, this.state).then(
      () => this.props.history.push("/")
    );   
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} type="text" name="title" value={this.state.title}/>

        <br/>

        <textarea 
          onChange={this.handleInput} 
          placeholder="Description" 
          name="description" 
          cols="30" 
          rows="10" 
          value={this.state.description}
        />

        <br/>

        <button>Edit Video</button>
      </form>
    ); 
  }
}

export default VideoEdit;