import React, { Component, Fragment } from 'react';

// Components
import Artwork from './components/artwork';
import PlaybackBar from './components/playback-bar';
import Typography from './components/typography';
import Header from './components/header';

import './app.css';
import tempArtwork from './components/artwork/temp@2x.jpg';

const data = {
  online: true,
  current: {
    artwork: tempArtwork,
    artist: 'The Shoes',
    song: 'Time to Dance - Sebatian Remix',
    time: {
      total: 240,
      elapsed: 100,
    },
  },
  next: {
    artist: 'Justice',
    song: 'Genesis',
  },
};
class App extends Component {
  render() {
    const { online, current, next } = data;
    return (
      <div className="app">
        <Header />

        <Typography variant="sub-header" component="h4" margin="mb30">
          Stink Studios
        </Typography>
        <Typography variant="header" component="h3" margin="mb80">
          {online ? 'Currently Playing' : 'Offline'}
        </Typography>

        <Artwork imgSrc={current.artwork} />
        <PlaybackBar
          totalTime={current.time.total}
          elapsedTime={current.time.elapsed}
        />

        {current.song ? (
          <Fragment>
            <Typography variant="header" component="h1" margin="mb30">
              {current.song}
            </Typography>
            <Typography component="h2" margin="mb130">
              {current.artist}
            </Typography>
          </Fragment>
        ) : (
          <Typography
            variant="header"
            component="h3"
            margin="mb130"
            color="grey"
          >
            No track added
          </Typography>
        )}

        <Typography variant="sub-header" component="h5" margin="mb60">
          Up Next
        </Typography>
        {next.song ? (
          <Fragment>
            <Typography component="h3" margin="mb10">
              {next.song}
            </Typography>
            <Typography variant="alt-body" component="h4">
              {next.artist}
            </Typography>
          </Fragment>
        ) : (
          <Typography component="h3" color="grey">
            No track in queue
          </Typography>
        )}
      </div>
    );
  }
}

export default App;
