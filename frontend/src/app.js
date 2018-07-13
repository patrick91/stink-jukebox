import React, { Component } from 'react';

// Components
import Artwork from './components/artwork';
import PlaybackBar from './components/playback-bar';
import Typography from './components/typography';
import Header from './components/header';
import UpNext from './components/up-next';
import SongMeta from './components/song-meta';

import './app.css';
import tempArtwork from './components/artwork/temp@2x.jpg';
// import tempArtwork2 from './components/artwork/temp2.jpg';

class App extends Component {
  state = {
    dark: false,
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

  componentDidMount() {
    if (this.state.dark) document.body.classList.add('dark');
    // setTimeout(() => {
    //   const current = { ...this.state.current };
    //   current.artwork = tempArtwork2;
    //   this.setState({ current });
    // }, 4000);
  }

  render() {
    const { online, current, next } = this.state;
    return (
      <div className="app">
        <Header online={online} />

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

        <SongMeta song={current.song} artist={current.artist} />

        <UpNext song={next.song} artist={next.artist} />
      </div>
    );
  }
}

export default App;
