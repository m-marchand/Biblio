import React, { Component } from 'react';
import '../src/styles.css';

import UserEntry from './CreateEntry.jsx';
import Library from './Library.jsx';
import Search from './Search.jsx';

const imageURL = "https://images.squarespace-cdn.com/content/v1/589c16d2725e253c1a559595/1606974721041-HU8HAY2SK9V04N4JXGJQ/ke17ZwdGBToddI8pDm48kADtKI1dYe1MgP0WqFZegetZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFPUIUtPqWqzr-_G2GN8fohU49BtaG1N7yeQDpbip5cOd1lH3P2bFZvTItROhWrBJ0/insta+logo.png?format=300w"
        

class Container extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
    this.createLibrary = this.createLibrary.bind(this);
    this.updateLibrary = this.updateLibrary.bind(this);
  }

  createLibrary(library) {
    this.setState({
      items: library,
    })
  }

  updateLibrary(item) {
    this.setState({
      // when an item is sent from CreateEntry, 
      // I want to add it to this array, not overwrite the whole array
      items: [...this.state.items, item]
    })
  }

  render() {
    return (
      <div>
        <h1 id='header'>Biblio</h1>
        <img id='headerImage' src={imageURL}></img>
          <div id='createSearch'>
            <UserEntry updateLibrary={this.updateLibrary}/>
            <Search updateLibrary={this.updateLibrary}/>
          </div>
        <Library libraryItems={this.state} createLibrary={this.createLibrary}/>
      </div>
    )
  } 
}

export default Container;