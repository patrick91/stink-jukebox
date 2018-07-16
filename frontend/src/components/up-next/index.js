import React, { Fragment } from 'react';
import { shape, string } from 'prop-types';

// Components
import Typography from '../typography';

const UpNext = ({ song }) => (
  <Fragment>
    <Typography variant="sub-header" component="h5" margin="mb60">
      Up Next
    </Typography>
    {song ? (
      <Fragment>
        <Typography component="h3" margin="mb10">
          {song.title}
        </Typography>
        <Typography variant="alt-body" component="h4">
          {song.artist}
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
  song: shape({
    title: string.isRequired,
    artist: string.isRequired,
  }),
};

UpNext.defaultProps = {
  song: null,
};

export default UpNext;
