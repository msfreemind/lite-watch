import React from 'react';
import { withRouter } from 'react-router-dom';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/?title=${this.state.title}`);
    this.setState({ title: "" })
  }
  
  render() {
    return (
      <div className="header-search">
        <i className="fas fa-search"></i>

        <form onSubmit={this.handleSubmit}>        
          <input onChange={this.handleInput} placeholder="Search" type="text" name="title" value={this.state.title}/>
        </form>
      </div>       
    ); 
  }
}

export default withRouter(FilterForm);