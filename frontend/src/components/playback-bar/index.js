import React from 'react';
import { string } from 'prop-types';

// Components
import Typography from '../typography';

import classes from './style.module.css';

const PlaybackBar = ({ elapsedTime, totalTime }) => (
  <div className={classes.playback}>
    <Typography variant="accent" component="span">
      {elapsedTime}
    </Typography>
    <span className={classes.bar} />
    <Typography variant="accent" component="span">
      {totalTime}
    </Typography>
  </div>
);

PlaybackBar.propTypes = {
  elapsedTime: string.isRequired,
  totalTime: string.isRequired,
};

export default PlaybackBar;
