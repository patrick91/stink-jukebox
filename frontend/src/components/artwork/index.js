import React, { Component } from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import classes from './style.module.css';

class Artwork extends Component {
  state = { loading: true };

  componentDidUpdate(prevProps) {
    if (this.props.imgSrc !== prevProps.imgSrc) {
      this.setState({ loading: true }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  handleLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    const { imgSrc } = this.props;

    return (
      <div className={classes.container}>
        <img
          className={cx(classes.artwork, {
            [classes.active]: imgSrc && !loading,
          })}
          src={imgSrc}
          alt=""
          onLoad={this.handleLoad}
        />
      </div>
    );
  }
}

Artwork.propTypes = {
  imgSrc: string,
};

Artwork.defaultProps = {
  imgSrc: null,
};

export default Artwork;
