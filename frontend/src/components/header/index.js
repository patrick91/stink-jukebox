import React from 'react';

import classes from './style.module.css';

const Header = () => (
  <header className={classes.header}>
    <span className={classes.logo} />
    <span className={classes.icon}>
      <span className={classes.iconInner} />
    </span>
  </header>
);

export default Header;
