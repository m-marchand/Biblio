import React, { Component } from 'react';
import '../styles.css';

class Entry extends Component {

  constructor(props) {
    super(props)
  }
  // data from the DB will be passed down as props from state above
  // each rendering of this component will be a single entry from the library

  render() {
    // iterate through the array passed from this.props.items
    // use each object in the array to make an entry 
    // push these JSX entries to an array and pass these below to be rendered

    const items = [];
    this.props.items.items.forEach(item => {

      items.push(
        <div key={item.title}>
          <strong id='libraryTitle'>{item.title}</strong><br/>
          <em id='libraryData'>
            Composer: {item.composer}— Era/Date: {item.date}—  Style: {item.style}—  Other: {item.misc}<br/>
          </em><br/>
        </div>
      )
    })

    return (
      <div>
        <h5>{items}</h5>
      </div>
    )
  }
}



export default Entry;