import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';

import classes from './style.module.css';

const Header = ({ online }) => (
  <header
    className={cx(classes.header, {
      [classes.online]: online,
    })}
  >
    <span className={classes.logo} />
    <span className={classes.icon}>
      <span className={classes.iconInner} />
    </span>
  </header>
);

Header.propTypes = {
  online: bool.isRequired,
};

export default Header;
