import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import withStyles from 'material-ui/styles/withStyles';

import ReactAudioPlayer from 'react-audio-player';
import Grid from 'material-ui/Grid';
import Preloader from '../../components/Preloader/Preloader';
import Footer from '../../components/Footer/Footer';
import Chat from '../Chat/Chat';
import NavigationButton from '../../components/Buttons/NavigationButton';

import style from './styles.jsx';
import bgImage from '../../assets/img/bg.png';

const APP_URL = 'http://localhost:3000';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: true, // FIXME: Set to false before releasing
    };
    this.togglePlayer = this.togglePlayer.bind(this);
  }


  togglePlayer() {
    const {muted} = this.state;
    if (!muted) {
      this.setState({
        ...this.state,
        muted: true,
      });
    } else {
      this.setState({
        ...this.state,
        muted: false,
      });
    }
  }

  render() {
    const {classes} = this.props;
    const {steps} = this.props;

    return (
      <Grid container justify='flex-end'
        className={classes.container}
        style={{backgroundImage: 'url(' + bgImage + ')'}}>
        <ReactAudioPlayer
          autoPlay
          src={`${APP_URL}/background-sound.mp3`}
          muted={this.state.muted}
        />
        <Preloader />
        <Grid item xs={12}>
          <Chat steps={steps} cache={true} />
        </Grid>
        <Footer
          muted={this.state.muted}
          togglePlayer={this.togglePlayer}
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
