import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.updateFilter([event.target.name], event.target.value);
  }
  
  render() {
    return (
      <div>        
        <label>
          Title: 
          <input onChange={this.handleInput} type="text" name="title" value={this.state.title}/>
        </label>
      </div>       
    ); 
  }
}

export default FilterForm;