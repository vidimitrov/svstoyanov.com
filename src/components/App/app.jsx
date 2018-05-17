import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

import GridContainer from '../Grid/GridContainer';
import ItemGrid from '../Grid/ItemGrid';
import Preloader from '../Preloader/Preloader';
import Chat from '../Chat/Chat';
import Footer from '../Footer/Footer';

import style from './styles.jsx';

class App extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.app}>
        <GridContainer justify="space-between">
          <Preloader />
          <ItemGrid xs={12} sm={12} md={8} lg={8}>
            <Chat />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12} lg={12}>
            <Footer />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(style)(App);
