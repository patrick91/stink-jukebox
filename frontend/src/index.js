import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import sentry from './sentry';
import * as serviceWorker from './service-worker';
import App from './app';

sentry();

if (process.env.NODE_ENV === 'production') {
  console.log('BUILD NUM : ', process.env.BUILD_NUM); // eslint-disable-line no-console
}
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
