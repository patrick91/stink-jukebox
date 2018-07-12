import React, { Component } from 'react';
import { number } from 'prop-types';

// Components
import Typography from '../typography';

import classes from './style.module.css';

class PlaybackBar extends Component {
  progress() {
    const { elapsedTime, totalTime } = this.props;
    return Math.floor((elapsedTime / totalTime) * 100);
  }

  render() {
    const { elapsedTime, totalTime } = this.props;
    return (
      <div className={classes.playback}>
        <Typography variant="accent" component="span">
          {elapsedTime}
        </Typography>
        <span className={classes.bar}>
          <span
            className={classes.progress}
            style={{ width: `${this.progress()}%` }}
          />
        </span>
        <Typography variant="accent" component="span">
          {totalTime}
        </Typography>
      </div>
    );
  }
}

PlaybackBar.propTypes = {
  elapsedTime: number.isRequired,
  totalTime: number.isRequired,
};

export default PlaybackBar;
