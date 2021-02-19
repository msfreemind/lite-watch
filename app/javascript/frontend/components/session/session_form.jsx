import React from 'react';
import { Link } from 'react-router-dom';

const FORM_ACTIONS = ['login', 'signup'];

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formAction = this.formAction.bind(this);
    this.altAction = this.altAction.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();    
    
    this.props.processForm(this.state).then(
      () => this.props.history.push('/')
    );
  }

  formAction() {
    if (this.props.formType === 'login') {
      return "Log in";
    } else {
      return "Sign up";
    }
  }

  altAction() {
    if (this.props.formType === 'login') {
      return "/signup";
    } else {
      return "/login";
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.formAction()}</h1>

        <Link to={this.altAction}>{this.altAction()}</Link>

        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        <input type="text" placeholder="Username" onChange={this.handleInput} name="username" value={this.state.username}/>

        <br/>

        <input type="password" placeholder="Password" onChange={this.handleInput} name="password" value={this.state.password}/>

        <br/>

        <button>{this.formAction()}</button>
      </form>
    );  
  }
}

export default SessionForm;