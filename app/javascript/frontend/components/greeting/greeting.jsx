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
          <i onClick={this.uploadVideo} className="fas fa-cloud-upload-alt"/>
          <i id="sign-out" onClick={this.props.logout} className="fas fa-sign-out-alt"/>
          <li><button onClick={this.uploadVideo}>Upload Video</button></li>
          <li><button onClick={this.props.logout}>Log Out</button></li>
        </ul>
      );
    } else {
      return (
        <ul className="header-nav">
          <Link to="/signup"><i className="fas fa-user-plus"/></Link>
          <Link to="/login"><i id="sign-in" className="fas fa-sign-in-alt"/></Link>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      );
    }    
  }
}

export default withRouter(Greeting);