import React, { Component } from 'react';
import '../styles.css';
import Entry from './Entry.jsx'

class Library extends Component {
  
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
   const url = 'http://localhost:3000/api';
   fetch(url) 
   .then(res => res.json())
   .then(entries => {
      this.props.createLibrary(entries)
   })
   .catch(err => {
     console.log(err);
   })
  }

  componentDidMount() {
    /*
      This is where async calls will be made to 
      the database to fetch current entries.
      These entries will be stored in this component's 
      state using setState
    */
    this.fetchData();
  }

  // componentDidUpdate() {
  //   this.fetchData();
  // }

  render() {
    // iterate through the state objet to create 
    // an array of entry elements to be rendered here
    // passing data down through props
    return (
      <div className='library'>
        <h2>Library</h2>
        <Entry items={this.props.libraryItems} />
      </div>
    )
  }
}


export default Library;