import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.updateFilter([event.target.name], event.target.value);
  }
  
  render() {
    return (
      <div className="header-search">        
        <input onChange={this.handleInput} placeholder="Search" type="text" name="title" value={this.state.title}/>
      </div>       
    ); 
  }
}

export default FilterForm;