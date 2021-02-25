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
    if (this.loggedIn()) {
      return (
        <ul className="header-nav">
          <li><button onClick={this.uploadVideo}>Upload Video</button></li>
          <li><button onClick={this.props.logout}>Log Out</button></li>
        </ul>
      );
    } else {
      return (
        <ul className="header-nav">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      );
    }    
  }
}

export default withRouter(Greeting);