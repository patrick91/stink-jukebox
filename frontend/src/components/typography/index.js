import React from 'react';
import cx from 'classnames';
import { oneOf, oneOfType, node, string, func, shape } from 'prop-types';

import classes from './style.module.css';

const Typography = ({
  children,
  component: componentProp,
  headlineMapping,
  variant,
  margin,
  className: additionalClassses,
  ...other
}) => {
  const className = cx(
    classes.base,
    {
      [classes[variant]]: variant,
      [classes[margin]]: margin,
    },
    additionalClassses
  );
  const Component = componentProp || headlineMapping[variant] || 'span';

  return (
    <Component className={className} {...other}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: node.isRequired,
  margin: oneOf([false, 'mb10', 'mb30', 'mb60', 'mb80', 'mb130']),
  component: oneOfType([string, func]),
  headlineMapping: shape({
    body: string,
    header: string,
    subHeader: string,
  }),
  variant: oneOf(['body', 'alt-body', 'header', 'sub-header', 'accent']),
  className: string,
};

Typography.defaultProps = {
  margin: false,
  component: null,
  headlineMapping: {
    body: 'p',
    header: 'h1',
    'sub-header': 'h2',
  },
  variant: 'body',
  className: '',
};

export default Typography;
