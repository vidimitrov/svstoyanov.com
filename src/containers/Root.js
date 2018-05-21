import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import Project from '../components/Project/Project';
import GridContainer from '../components/Grid/GridContainer';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <GridContainer className="wrapper" justify="space-between">
        <Route exact={true} path="/" component={Home} />
        <Route path="/projects/:projectId" component={Project} />
      </GridContainer>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
