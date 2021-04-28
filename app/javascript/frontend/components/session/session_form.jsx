import React from 'react';

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
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();    
    
    this.props.processForm(this.state).then(
      () => {
        if (!this.props.errors) {
          this.props.history.push('/feed')
        }        
      }
    );
  }

  componentWillUnmount() {
    this.props.flushErrors();
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
      <div className="form-container">
        <h1>{this.formAction()}</h1>

        <form onSubmit={this.handleSubmit}>
          <ul className="session-errors">
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>

          <input type="text" placeholder="Username" onChange={this.handleInput} id="username" value={this.state.username}/>

          <br/>

          <input type="password" placeholder="Password" onChange={this.handleInput} id="password" value={this.state.password}/>

          <br/>

          <button>{this.formAction()}</button>
        </form>
      </div>
    );  
  }
}

export default SessionForm;