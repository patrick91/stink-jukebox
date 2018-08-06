import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './app';

if (process.env.NODE_ENV === 'production') {
  console.log('BUILD NUM : ', process.env.BUILD_NUM); // eslint-disable-line no-console
}

// Sentry
if (process.env.SENTRY_DSN && process.env.NODE_ENV === 'production') {
  /*global Raven */
  if (Raven != null) {
    Raven.config(process.env.SENTRY_DSN, {
      release: process.env.BUILD_NUM,
      environment: process.env.BRANCH,
    }).install();
  } else {
    console.warn('Raven JS SDK missing'); // eslint-disable-line no-console
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
