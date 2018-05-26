import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Project from '../components/Project/Project';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/projects/:projectId" component={Project} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
