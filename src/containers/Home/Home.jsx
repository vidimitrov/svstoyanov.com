import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import Grid from '@material-ui/core/Grid';

import { wakeUp } from '../../api';
import ChatBot from '../../lib/ChatBot';

import Preloader from '../../components/Preloader/Preloader';
import Footer from '../../components/Footer/Footer';
import styles from './styles';
import chatTheme from '../Chat/styles/theme';
import avatar from '../../assets/img/sto-avatar.png';
import logo from '../../assets/img/logo.png';
import mp4Video from '../../assets/video/bg-spin.mp4';
import webmVideo from '../../assets/video/bg-spin.webm';
import backgroundMusic from '../../assets/audio/background-sound.mp3';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: false,
      // activeStep: null,
    };
    this.togglePlayer = this.togglePlayer.bind(this);
    this.getChatComponent = this.getChatComponent.bind(this);
  }

  componentDidMount() {
    const chat = this.getChatComponent();
    const { renderedSteps } = chat.state;
    if (renderedSteps && renderedSteps.length > 1) {
      // TODO: Add the final id and uncomment when ready with the rest
      //       of the features, otherwise it would be extremely annoying while working
      //
      //  chat.triggerNextStep({
      //   stepId: 'some-id-here',
      //   externalTrigger: true
      //  });
    }

    wakeUp();
  }

  getChatComponent() {
    return this.chat;
  }

  togglePlayer() {
    const { muted } = this.state;
    this.setState({
      muted: !muted,
    });
  }

  render() {
    const { classes, steps } = this.props;
    const { muted } = this.state;

    return (
      <Grid
        container
        justify="flex-end"
        className={classes.container}
      >
        <video autoPlay muted loop className={classes.videoBackground}>
          <source src={mp4Video} type="video/mp4" />
          <source src={webmVideo} type="video/webm" />
        </video>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio src={backgroundMusic} muted={muted} autoPlay loop />
        <iframe title="audio" allow="autoplay" id="audio" style={{ display: 'none' }} />
        <Preloader />
        <Grid item xs={12} className={classes.mainSection}>
          <div className={`${classes.chatContainer} chat-container`}>
            <ThemeProvider theme={chatTheme}>
              <ChatBot
                ref={(element) => {
                  window.chat = element;
                  this.chat = element;
                }}
                steps={steps}
                botAvatar={avatar}
                hideHeader
                hideUserAvatar
                hideBotAvatar={false}
                hideSubmitButton
                className="chat-bot"
                cache
                contentStyle={{
                  overflowX: 'hidden',
                  maxHeight: '100%',
                  height: 'auto',
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                }}
                stepContainerStyle={{
                  backgroundColor: 'transparent',
                  padding: 0,
                  width: '60%',
                  margin: '0 auto',
                }}
                avatarStyle={{
                  borderRadius: 0,
                  minWidth: '38px',
                }}
                bubbleStyle={{
                  fontFamily: 'Space Mono',
                  fontSize: '20px',
                  lineHeight: 1.5,
                  letterSpacing: '2px',
                  maxWidth: '100%',
                }}
                bubbleOptionStyle={{
                  fontFamily: 'Space Mono',
                  border: '1px solid #02A0A7',
                  borderRadius: '0px',
                }}
                inputStyle={{
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid #fff',
                  borderRadius: 0,
                  borderTop: 0,
                  color: '#fff',
                }}
                placeholder="Enter your message here..."
                handleEnd={() => {
                  // { renderedSteps, steps, values }
                  // TODO: Handle the end of the flow
                }}
                handleStepChange={
                  // (step) => {
                  //   this.setState({
                  //     activeStep: step,
                  //   });
                  // }
                  () => { }
                }
              />
            </ThemeProvider>
          </div>
        </Grid>
        <Footer
          muted={muted}
          togglePlayer={this.togglePlayer}
          content={(
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.navigation}
            >
              <img src={logo} className={classes.logo} alt="" />
            </Grid>
          )}
        />
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  steps: state.conversation.steps,
  projects: state.projects,
  routing: state.routing,
});

const mapDispatchToProps = () => ({});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
