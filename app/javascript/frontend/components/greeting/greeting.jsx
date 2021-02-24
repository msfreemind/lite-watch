import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.loggedIn = this.loggedIn.bind(this);
    this.uploadVideo = this.uploadVideo.bind(this);
  }

  uploadVideo() {
    this.props.history.push("/videos/new");
  }

  loggedIn() {
    return (this.props.currentUser !== undefined);
  }
  
  render() {
    const { currentUser } = this.props;

    if (this.loggedIn()) {
      return (
        <div>
          <h1>Welcome, {currentUser.username}!</h1>
          <button onClick={this.uploadVideo}>Upload Video</button>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }    
  }
}

export default withRouter(Greeting);