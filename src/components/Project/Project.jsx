import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

import GridContainer from '../Grid/GridContainer';
import ItemGrid from '../Grid/ItemGrid';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

import style from './styles.jsx';
import bgImage from '../../assets/img/bg.png';

class App extends React.Component {
  render() {
    const {classes, match} = this.props;

    return (
      <div className={classes.app}
        style={{backgroundImage: 'url(' + bgImage + ')'}}>
        <GridContainer justify="space-between">
          <Preloader />
          <ItemGrid xs={12} sm={12} md={8} lg={8}>
            <h1>Project {match.params.projectId}</h1>
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
  match: PropTypes.object,
};


export default withStyles(style)(App);
