import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/app';
import ChatBot from '../../lib/ChatBot';
import 'firebase/functions';

import Preloader from '../../components/Preloader/Preloader';
import Footer from '../../components/Footer/Footer';
import NavigationButton from '../../components/Buttons/NavigationButton';

import styles from './styles';
import chatTheme from '../Chat/styles/theme';
import avatar from '../../assets/img/sto-avatar.png';
import logo from '../../assets/img/logo.png';
import mp4Video from '../../assets/video/bg-spin.mp4';
import webmVideo from '../../assets/video/bg-spin.webm';
import backgroundMusic from '../../assets/audio/background-sound.mp3';

firebase.initializeApp({
  apiKey: 'AIzaSyA7pJMXQS-7h3xYDiUF5Uz5kSiodXZSVCw',
  projectId: 'svstoyanov-com',
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: false,
      activeStep: null,
    };
    this.togglePlayer = this.togglePlayer.bind(this);
    this.getChatComponent = this.getChatComponent.bind(this);
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
    const { classes, steps, navigate } = this.props;
    const { activeStep, muted } = this.state;

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
          <img src={logo} className={classes.logo} alt="" />
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
                  fontSize: '24px',
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
                handleStepChange={(step) => {
                  this.setState({
                    activeStep: step,
                  });
                }}
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
              justify="space-between"
              className={classes.navigation}
            >
              <NavigationButton
                active={activeStep && activeStep.id === 'my-work-options'}
                onClick={() => {
                  const chat = this.getChatComponent();
                  chat.triggerNextStep({ stepId: 'about-me', externalTrigger: true });
                }}
              >
                ABOUT_ME
              </NavigationButton>
              <NavigationButton
                active={activeStep && activeStep.id === 'projects-slider'}
                onClick={() => {
                  const chat = this.getChatComponent();
                  chat.triggerNextStep({ stepId: 'my-work', externalTrigger: true });
                }}
              >
                MY_WORK
              </NavigationButton>
              <NavigationButton
                active={activeStep && activeStep.id === 'contact-me-request-options'}
                onClick={() => {
                  const chat = this.getChatComponent();
                  chat.triggerNextStep({ stepId: 'contact-me-request', externalTrigger: true });
                  window.open('https://linkedin.com', '_blank');
                }}
              >
                CONTACT_ME
              </NavigationButton>
            </Grid>
          )}
        />
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.array,
  projects: PropTypes.array,
  navigate: PropTypes.func,
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
