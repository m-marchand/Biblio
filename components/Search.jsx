import React, { Component } from 'react';
import '../src/styles.css';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    /*
      Grab user information and save in state 
      to be later sent via fetch to the database
    */
    let name = e.target.getAttribute('name');
    let value = e.target.value;
    const fieldItem = {};
    fieldItem[name] = value;
    this.setState(fieldItem);
  }

  handleClick() {
    /*
      Use data from state to query the DB
      And matching items will be rendered 
      in the search box below
    */
    const data = this.state;

    fetch('http://localhost:3000/search/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    })
    .then(res => {
      res.status(200).send('Library has been filtered')
    })
  }

  render() {
    // create an array of JSX search elements

    return (
      <div className='search'>
        <div>
          <h2>Search for items</h2>
          <em>i.e. Title, Composer, Date...</em><br/>
          <input type='text' name='search' onChange={this.handleChange}></input>
          <button onClick={this.handleClick}>Search</button>
        </div>
        <div id='searchResults'>
          Search Results
        </div>
      </div>
    )
  }
}

export default Search;