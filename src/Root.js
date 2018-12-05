import React from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import Home from './containers/Home/Home';
import Project from './components/Project/Project';
import './index.scss';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Home path="/" />
      <Project path="/projects/:projectId" />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
