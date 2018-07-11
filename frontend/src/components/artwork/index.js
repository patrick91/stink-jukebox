import React from 'react';
import { string } from 'prop-types';

import classes from './style.module.css';

const Artwork = ({ imgSrc }) => (
  <img className={classes.artwork} src={imgSrc} alt="" />
);

Artwork.propTypes = {
  imgSrc: string.isRequired,
};

export default Artwork;
