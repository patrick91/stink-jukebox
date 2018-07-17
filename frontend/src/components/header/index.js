import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';

import classes from './style.module.css';

const Header = ({ paused }) => (
  <header
    className={cx(classes.header, {
      [classes.paused]: paused,
    })}
  >
    <span className={classes.logo} />
    <span className={classes.icon}>
      <span className={classes.iconInner} />
    </span>
  </header>
);

Header.propTypes = {
  paused: bool.isRequired,
};

export default Header;
