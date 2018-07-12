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

  secondsToMinutes(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  render() {
    const { elapsedTime, totalTime } = this.props;
    return (
      <div className={classes.playback}>
        <Typography variant="accent" component="span">
          {this.secondsToMinutes(elapsedTime)}
        </Typography>
        <span className={classes.bar}>
          <span
            className={classes.progress}
            style={{ width: `${this.progress()}%` }}
          />
        </span>
        <Typography variant="accent" component="span">
          {this.secondsToMinutes(totalTime)}
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
