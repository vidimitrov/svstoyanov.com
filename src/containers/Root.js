import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../components/App/App';
import GridContainer from '../components/Grid/GridContainer';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <GridContainer className="wrapper" justify="space-between">
        <Route exact={true} path="/" component={App} />
      </GridContainer>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
