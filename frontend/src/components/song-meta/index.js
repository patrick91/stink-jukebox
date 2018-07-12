import React, { Fragment } from 'react';
import { string } from 'prop-types';

// Components
import Typography from '../typography';

const SongMeta = ({ song, artist }) => (
  <Fragment>
    {song ? (
      <Fragment>
        <Typography variant="header" component="h1" margin="mb30">
          {song}
        </Typography>
        <Typography component="h2" margin="mb130">
          {artist}
        </Typography>
      </Fragment>
    ) : (
      <Typography variant="header" component="h3" margin="mb130" color="grey">
        No track added
      </Typography>
    )}
  </Fragment>
);

SongMeta.propTypes = {
  song: string,
  artist: string,
};

SongMeta.defaultProps = {
  song: null,
  artist: null,
};

export default SongMeta;
