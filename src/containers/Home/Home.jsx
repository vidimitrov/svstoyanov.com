import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import withStyles from 'material-ui/styles/withStyles';

import Grid from 'material-ui/Grid';
// import Preloader from '../../components/Preloader/Preloader';
import Footer from '../../components/Footer/Footer';
import Chat from '../Chat/Chat';
import NavigationButton from '../../components/Buttons/NavigationButton';

import style from './styles.jsx';
import bgImage from '../../assets/img/bg.png';

class Home extends React.Component {
  render() {
    const {classes} = this.props;
    const {steps} = this.props;

    return (
      <Grid container justify='flex-end'
        className={classes.container}
        style={{backgroundImage: 'url(' + bgImage + ')'}}>
        {/* <Preloader /> */}
        <Grid item xs={12}>
          <Chat steps={steps} />
        </Grid>
        <Footer
          content={
            <Grid container justify='space-between'
              className={classes.navigation} >
              <Grid item xs={3} sm={3} md={3}>
                <NavigationButton>
                  ABOUT_ME
                </NavigationButton>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <NavigationButton>
                  MY_WORK
                </NavigationButton>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <NavigationButton>
                  CONTACT_ME
                </NavigationButton>
              </Grid>
            </Grid>
          } />
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.array,
  projects: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  return {
    steps: state.conversation.steps,
    projects: state.projects,
    routing: state.routing,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default compose(
  withRouter,
  withStyles(style),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
