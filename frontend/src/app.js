import React, { Component } from 'react';

// Components
import Artwork from './components/artwork';
import PlaybackBar from './components/playback-bar';
import Typography from './components/typography';

import './app.css';
import tempArtwork from './components/artwork/temp@2x.jpg';

const data = {
  current: {
    artwork: tempArtwork,
    artist: 'The Shoes',
    song: 'Time to Dance - Sebatian Remix',
  },
  next: {
    artist: 'Justice',
    song: 'Genesis',
  },
};
class App extends Component {
  render() {
    const { current, next } = data;
    return (
      <div className="app">
        <Typography variant="sub-header" component="h4" margin="mb30">
          Stink Studios
        </Typography>
        <Typography variant="header" component="h3" margin="mb80">
          Currently Playing
        </Typography>
        <Artwork imgSrc={current.artwork} />
        <PlaybackBar totalTime={130} elapsedTime={62} />
        <Typography variant="header" component="h1" margin="mb30">
          {current.song}
        </Typography>
        <Typography component="h2" margin="mb130">
          {current.artist}
        </Typography>
        <Typography variant="sub-header" component="h5" margin="mb60">
          Up Next
        </Typography>
        <Typography component="h3" margin="mb10">
          {next.song}
        </Typography>
        <Typography variant="alt-body" component="h4">
          {next.artist}
        </Typography>
      </div>
    );
  }
}

export default App;
