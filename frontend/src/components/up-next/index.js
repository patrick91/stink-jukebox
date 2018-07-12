import React, { Fragment } from 'react';
import { string } from 'prop-types';

// Components
import Typography from '../typography';

const UpNext = ({ song, artist }) => (
  <Fragment>
    <Typography variant="sub-header" component="h5" margin="mb60">
      Up Next
    </Typography>
    {song ? (
      <Fragment>
        <Typography component="h3" margin="mb10">
          {song}
        </Typography>
        <Typography variant="alt-body" component="h4">
          {artist}
        </Typography>
      </Fragment>
    ) : (
      <Typography component="h3" color="grey">
        No track in queue
      </Typography>
    )}
  </Fragment>
);

UpNext.propTypes = {
  song: string,
  artist: string,
};

UpNext.defaultProps = {
  song: null,
  artist: null,
};

export default UpNext;
