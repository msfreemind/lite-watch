import React from 'react';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "",
      description: "",
      videoUrl: "", 
      videoFile: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFileInput(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];

    reader.onloadend = () => this.setState({ videoUrl: reader.result, videoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ videoUrl: "", videoFile: null });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.videoFile) {
      const formData = new FormData();

      formData.append('video[title]', this.state.title);
      formData.append('video[description]', this.state.description);
      formData.append('video[author_id]', this.props.currentUser.id);
      formData.append('video[video_data]', this.state.videoFile);     

      this.props.createVideo(formData).then(
        () => this.props.history.push("/")
      ); 
    } else {
      // Handle error
    }    
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} placeholder="Title" type="text" name="title" value={this.state.title}/>

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

        <h2>Add Video</h2>
        <input onChange={this.handleFileInput} type="file" accept="video/avi, video/mp4"/>

        <br/>

        <button>Upload Video</button>
      </form>
    ); 
  }
}

export default VideoForm;