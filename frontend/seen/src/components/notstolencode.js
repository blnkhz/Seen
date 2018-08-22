import React from 'react';

class PostDzseszonForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      gender: '',
      socialHandle: ''
    };
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      gender: this.state.gender,
      socialHandle: this.state.socialHandle

    };
    console.log(data);

    fetch('http://localhost:52210/haveseen', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .catch(error => `Error: ${error}`);
  }
  
  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input type="text" name="gender" placeholder="ird ide a gendert" onChange={this.handleChange}/>
        <input type="text" name="socialHandle" placeholder="ird ide a szósölhendlit" onChange={this.handleChange}/>
        <button type="submit">adjad neki tess</button>
      </form>
    );
  }
}

export default PostDzseszonForm;