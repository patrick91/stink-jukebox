import React, { Component } from 'react';

// Components
import Artwork from './components/artwork';

import './app.css';
import tempArtwork from './components/artwork/temp@2x.jpg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Artwork imgSrc={tempArtwork} />
      </div>
    );
  }
}

export default App;
