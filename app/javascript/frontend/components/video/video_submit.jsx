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
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleFileInput(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];

    reader.onloadend = () => this.setState({ videoUrl: reader.result, videoFile: file });

    if (file) {
      const video = document.getElementById("video");
      const thumbSelect = document.getElementById("thumb-select");

      video.hidden = false;
      thumbSelect.hidden = false;

      reader.readAsDataURL(file);
    } else {
      this.setState({ videoUrl: "", videoFile: null });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.videoFile && this.state.title !== "") {
      const formData = new FormData();
      const canvas = document.getElementById("prevImgCanvas");
      this.updateCanvas();

      this.loadSpinner();

      formData.append('video[title]', this.state.title);
      formData.append('video[description]', this.state.description);
      formData.append('video[author_id]', this.props.currentUser.id);
      formData.append('video[video_data]', this.state.videoFile); 

      canvas.toBlob(blob => {
        formData.append('video[thumbnail]', blob)

        this.props.createVideo(formData).then(
          () => this.props.history.push("/feed")
        ); 
      });  
    } else {
      if (this.state.title === "") {
        const titleError = document.getElementById("no-title");
        titleError.hidden = false;
      }

      if (!this.state.videoFile) {
        const videoError = document.getElementById("no-video");
        videoError.hidden = false;
      }     
    }    
  }

  updateCanvas() {
    const video = document.getElementById("video");
    const canvas = document.getElementById("prevImgCanvas");
    let context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, video.videoWidth, Math.floor(video.videoWidth * (9 / 16)), 0, 0, canvas.width, canvas.height)
  }

  loadSpinner() {
    const uploadButton = document.getElementById("upload-video-button");
    uploadButton.innerHTML = "<div class='loader'></div>";
  }
  
  render() {
    return (
      <div className="form-container">
        <h1>Upload Video</h1>

        <form onSubmit={this.handleSubmit}>
          Title
          <br/>
          <p id="no-title" className="error" hidden>Please enter a title</p>
          <input onChange={this.handleInput} type="text" id="title" value={this.state.title}/>

          <br/>
          
          Description
          <br/>
          <textarea 
            onChange={this.handleInput}  
            id="description" 
            cols="30" 
            rows="10" 
            value={this.state.description}
          />
          
          <p id="no-video" className="error" hidden>Please submit a video</p>
          <input onChange={this.handleFileInput} type="file" accept="video/avi, video/mp4"/>

          <strong hidden id="thumb-select" className="bold">Select the frame for the video thumbnail:</strong>
          <video hidden controls id="video" src={this.state.videoUrl}></video>
          <canvas hidden id="prevImgCanvas" width="1920" height="1080"></canvas>

          <br/>

          <button id="upload-video-button">Upload Video</button>
        </form>        
      </div>
    ); 
  }
}

export default VideoForm;