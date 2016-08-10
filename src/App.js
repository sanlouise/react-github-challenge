import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">GitHub</h1>
        <main>
           <SearchBar />
        </main>
      </div>
    )
  }
}

export default App;