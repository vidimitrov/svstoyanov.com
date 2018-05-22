import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

import GridContainer from '../../components/Grid/GridContainer';
import ItemGrid from '../../components/Grid/ItemGrid';
// import Preloader from '../../components/Preloader/Preloader';
import Footer from '../../components/Footer/Footer';
import Chat from '../Chat/Chat';

import style from './styles.jsx';
import bgImage from '../../assets/img/bg.png';

class Home extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.app}
        style={{backgroundImage: 'url(' + bgImage + ')'}}>
        <GridContainer justify="space-between">
          {/* <Preloader /> */}
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(style)(Home);
