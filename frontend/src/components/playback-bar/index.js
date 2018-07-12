import React, { Component } from 'react';
import cx from 'classnames';
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
    const className = cx(classes.playback, {
      [classes.disabled]: !totalTime,
    });
    return (
      <div className={className}>
        <Typography variant="accent" component="span" className={classes.time}>
          {this.secondsToMinutes(elapsedTime)}
        </Typography>
        <span className={classes.bar}>
          <span
            className={classes.progress}
            style={{ '--progress': this.progress() }}
          />
        </span>
        <Typography variant="accent" component="span" className={classes.time}>
          {this.secondsToMinutes(totalTime)}
        </Typography>
      </div>
    );
  }
}

PlaybackBar.propTypes = {
  elapsedTime: number,
  totalTime: number,
};

PlaybackBar.defaultProps = {
  elapsedTime: 0,
  totalTime: 0,
};

export default PlaybackBar;
