import React, { Component } from 'react';
import cover_image from './my-folder/images/cover-image-env.jpg';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
        <img src={cover_image} alt="Cover" />
      </div>
    );
  }
}

export default App;