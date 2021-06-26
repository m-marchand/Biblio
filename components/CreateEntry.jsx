//import { response } from 'express';
import React, { Component } from 'react';
import '../styles.css';

class UserEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      composer: '',
      date: '',
      style: '',
      misc: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    /*
      When the text values change in the input fields, 
      they will be sent here and they will be stored in state

      ! Each property value in state needs to be unique for each
      item so that they don't get overwritten when setState merges the new items
      with what is already there
    */
    let name = e.target.getAttribute('name');
    let value = e.target.value;
    const fieldItem = {};
    fieldItem[name] = value;
    this.setState(fieldItem);
  }

  handleClick() {
    /*
      when this function is called, 
      collect values stored in state and send as a POST 
      via fetch to /api to store in DB
      ALSO: send this information to Container via
      stateHandler passed through props to update the Library
     */
  
    const data = this.state;
    fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(newItem => {
      this.props.updateLibrary(newItem)
    })
    .catch(err => console.log('Error creating new item',err))
  }

  render() {
    return (
      <div>
        <h2 className='userentry'>Create resource<br/>
          <input type='text' name ='title' placeholder='Title' onChange={this.handleChange}></input><br/>
          <input type='text' name ='composer' placeholder='Composer/Publisher' onChange={this.handleChange}></input><br/>
          <input type='text' name ='date' placeholder='Date' onChange={this.handleChange}></input><br/>
          <input type='text' name ='style' placeholder='Style' onChange={this.handleChange}></input><br/>
          <input type='text' name ='misc' placeholder='Miscellaneous' onChange={this.handleChange}></input><br/>
          <button type='button' className='sendButton' onClick={this.handleClick}>Save Resource</button>
        </h2>
        
      </div>
    )
  }
}



export default UserEntry;