import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.loggedIn = this.loggedIn.bind(this);
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

export default Greeting;