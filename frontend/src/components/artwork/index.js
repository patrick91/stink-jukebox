import React from 'react';
import { string } from 'prop-types';

import classes from './style.module.css';

const Artwork = ({ imgSrc }) => {
  if (imgSrc) {
    return <img className={classes.artwork} src={imgSrc} alt="" />;
  }
  return <span className={classes.disabled} />;
};

Artwork.propTypes = {
  imgSrc: string,
};

Artwork.defaultProps = {
  imgSrc: null,
};

export default Artwork;
