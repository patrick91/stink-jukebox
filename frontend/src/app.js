import React, { Component } from 'react';

// Components
import Artwork from './components/artwork';
import PlaybackBar from './components/playback-bar';
import Typography from './components/typography';

import './app.css';
import tempArtwork from './components/artwork/temp@2x.jpg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Typography variant="sub-header" component="h4" margin="mb30">
          Stink Studios
        </Typography>
        <Typography variant="header" component="h3" margin="mb130">
          Currently Playing
        </Typography>
        <Artwork imgSrc={tempArtwork} />
        <PlaybackBar totalTime={120} elapsedTime={60} />
        <Typography variant="header" component="h1" margin="mb30">
          Time to Dance - Sebatian Remix
        </Typography>
        <Typography component="h2" margin="mb200">
          The Shoes
        </Typography>
        <Typography variant="sub-header" component="h5" margin="mb80">
          Up Next
        </Typography>
        <Typography component="h3" margin="mb10">
          Genesis
        </Typography>
        <Typography variant="alt-body" component="h4">
          Justice
        </Typography>
      </div>
    );
  }
}

export default App;
