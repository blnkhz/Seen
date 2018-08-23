import React from 'react';

class PostDzseszonForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      gender: '',
      socialHandle: '',
      hairColor:'',
      hairStyle:'',
      glasses:'',
      message:''
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
      socialHandle: this.state.socialHandle,
      hairColor: this.state.hairColor,
      hairStyle: this.state.hairStyle,
      glasses: this.state.glasses,
      message: this.state.message
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
      <form method="post" onSubmit={this.handleSubmit} className="formchild">
        <input type="text" name="gender" placeholder="ird ide a gendert" onChange={this.handleChange}/>
        <input type="text" name="socialHandle" placeholder="ird ide a szósölhendlit" onChange={this.handleChange}/>
        <input type="text" name="hairColor" placeholder="írjá hairsColorst" onChange={this.handleChange}/>
        <input type="text" name="hairStyle" placeholder="írj sztájlszokszot" onChange={this.handleChange}/>
        <input type="text" name="glasses" placeholder="grassesü?" onChange={this.handleChange}/>
        <input type="text" name="message" placeholder="SZPESÖL MASSZÁZS" onChange={this.handleChange}/>
        <a href="/itsamatch">
              <button
                type="submit"
                className="submit-button"
              >
                FIND THEM
              </button>
            </a>
      </form>
    );
  }
}

export default PostDzseszonForm;