import React from 'react';
import { withRouter } from 'react-router-dom';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", overlayHidden: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSearchOverlay = this.toggleSearchOverlay.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidUpdate(prevProps) {
    const currentSearchQuery = this.props.location.search;
    const prevSearchQuery = prevProps.location.search;

    if (currentSearchQuery === "" && currentSearchQuery !== prevSearchQuery) {
      this.setState({ title: "" });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.props.history.push(`/?title=${this.state.title}`);
  }

  toggleSearchOverlay() {
    this.setState({ overlayHidden: !this.state.overlayHidden });    
  }
  
  render() {
    return (
      <div className="header-search">    
        <form className="normal-form" onSubmit={this.handleSubmit}>        
          <input onChange={this.handleInput} placeholder="Search" type="text" name="title" value={this.state.title}/>
        </form>

        <i onClick={this.toggleSearchOverlay} className="fas fa-search"/>
        <form hidden={this.state.overlayHidden} className="hidden-form" onSubmit={this.handleSubmit}>        
          <input onChange={this.handleInput} placeholder="Search" type="text" name="title" value={this.state.title}/>
        </form>
        <button hidden={this.state.overlayHidden} className="close-search-overlay" onClick={this.toggleSearchOverlay}>X</button>
      </div>       
    ); 
  }
}

export default withRouter(FilterForm);