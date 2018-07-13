import React, { Component } from 'react';
import { ApolloProvider, Subscription } from 'react-apollo';
import gql from 'graphql-tag';

import { client } from './client';

// Components
import Artwork from './components/artwork';
import PlaybackBar from './components/playback-bar';
import Typography from './components/typography';
import Header from './components/header';
// import UpNext from './components/up-next';
import SongMeta from './components/song-meta';

import './app.css';

const SONG_UPDATED = gql`
  subscription {
    onSongUpdated {
      title
      artist
      artworkUrl
      duration
      elapsed
    }
  }
`;

class App extends Component {
  state = {
    dark: false,
    online: true,
  };

  componentDidMount() {
    if (this.state.dark) document.body.classList.add('dark');
  }

  render() {
    const { online } = this.state;
    return (
      <ApolloProvider client={client}>
        <Subscription subscription={SONG_UPDATED}>
          {({ data, error, loading }) => {
            if (loading || error) return null;
            const {
              title,
              artist,
              artworkUrl,
              duration,
              elapsed,
            } = data.onSongUpdated;
            return (
              <div className="app">
                <Header online={online} />

                <Typography variant="sub-header" component="h4" margin="mb30">
                  Stink Studios
                </Typography>
                <Typography variant="header" component="h3" margin="mb80">
                  {online ? 'Currently Playing' : 'Offline'}
                </Typography>

                <Artwork imgSrc={artworkUrl} />

                <PlaybackBar totalTime={duration} elapsedTime={elapsed} />

                <SongMeta song={title} artist={artist} />

                {/* <UpNext song={next.song} artist={next.artist} /> */}
              </div>
            );
          }}
        </Subscription>
      </ApolloProvider>
    );
  }
}

export default App;
