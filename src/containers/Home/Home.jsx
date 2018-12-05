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
import CustomOptions from '../../components/CustomOptions/CustomOptions';
import Input from '../../components/Inputs/Input';
import TextArea from '../../components/Inputs/TextArea';
import NavigationButton from '../../components/Buttons/NavigationButton';
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider';

import style from './styles';
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
    if (!muted) {
      this.setState({
        muted: true,
      });
    } else {
      this.setState({
        muted: false,
      });
    }
  }

  render() {
    const { classes, projects, navigate } = this.props;
    // const {steps} = this.props;
    const steps = [{
      id: 'intro',
      message: 'Hello. My name is Stoyan. What\'s your name?',
      trigger: 'name-input',
      delay: 4000,
    }, {
      id: 'name-input',
      component: (
        <Input
          trigger="has-name-what-to-do"
          placeholder="Type your name..."
          callback={(value) => {
            localStorage.setItem('username', value);
          }}
        />
      ),
    }, {
      id: 'has-name-what-to-do',
      message: 'Nice to meet you {previousValue}. What can I do for you?',
      trigger: 'what-to-do-options',
    }, {
      id: 'what-to-do-options',
      component: (
        <CustomOptions options={[
          {
            value: 'tell-me-about-you',
            label: 'Tell me about yourself',
            trigger: 'about-me',
          },
          {
            value: 'show-me-your-work',
            label: 'Show me your work',
            trigger: 'my-work',
          },
        ]}
        />
      ),
    }, {
      id: 'about-me',
      message: `I am a product designer, researcher and product
                architect who started his career in the start-up world and
                fell in love with the hard work that you need to put in order
                to succeed in this environment. I also like to experiment with
                new technologies as you can see in my blog.
                For me every problem can be solved with the right design process.
                My favourite movie is HER and now I am working on a voice project
                that you can see in my blog infinite crave, where I am documenting it on the go.
                Sharing with you some of my social presence.`,
      trigger: 'learn-more-about-me',
    }, {
      id: 'learn-more-about-me',
      component: (
        <CustomOptions options={[
          {
            value: 'http://infinitecrave.com',
            label: 'InfiniteCrave.com',
            redirect: 'http://infinitecrave.com',
          },
          {
            value: 'https://linkedin.com/in/svstoyanov',
            label: 'LinkedIn',
            redirect: 'https://linkedin.com/in/svstoyanov',
          },
          {
            value: 'https://drive.google.com/svstoyanov.cv.pdf',
            label: 'Download CV',
            redirect: 'https://drive.google.com/svstoyanov.cv.pdf',
          },
        ]}
        />
      ),
      trigger: 'my-work-after-about-me',
    }, {
      id: 'my-work-after-about-me',
      message: 'Now as you know who am I, would you like me to show you my work?',
      trigger: 'my-work-options',
    }, {
      id: 'my-work-options',
      component: (
        <CustomOptions options={[
          {
            value: true,
            label: 'Yes',
            trigger: 'projects-slider',
          },
          {
            value: false,
            label: 'No',
            trigger: 'here-if-needed',
          },
        ]}
        />
      ),
    }, {
      id: 'my-work',
      message: 'This is my portfolio. Some projects that i have created in the past years.',
      trigger: 'projects-slider',
    }, {
      id: 'projects-slider',
      component: (<ProjectsSlider navigate={navigate} projects={projects} />),
      style: {
        width: '100%',
        backgroundColor: 'transparent',
        padding: 0,
      },
    }, {
      id: 'here-if-needed',
      message: 'Okay, if you need me I am here',
    }, {
      id: 'goodbye-message',
      message: `Okay, it was pleasure talking with you. If you need me just rub the lamp. Just kidding, you can select from the menu what you would like. See you soon  ${localStorage.getItem('username')}!`,
    }, {
      id: 'contact-me-request',
      message: 'It will be great if you want to discuss a project or an idea. Do you want to leave me a message?',
      trigger: 'contact-me-request-options',
    }, {
      id: 'contact-me-request-options',
      component: (
        <CustomOptions options={[
          {
            value: true,
            label: 'Yes',
            trigger: 'email-address',
          },
          {
            value: false,
            label: 'No',
            trigger: 'goodbye-message',
          },
        ]}
        />
      ),
    }, {
      id: 'email-address',
      message: 'Tell me your email address first',
      trigger: 'email-input',
    }, {
      id: 'email-input',
      component: (
        <Input
          trigger="message-content"
          placeholder="Type your email..."
          callback={(value) => {
            localStorage.setItem('cf-email', value);
          }}
        />
      ),
    }, {
      id: 'message-content',
      message: 'Now type your message',
      trigger: 'message-content-input',
    }, {
      id: 'message-content-input',
      component: (
        <TextArea
          trigger="confirmation-before-send-1"
          placeholder="Type your message..."
          callback={(value) => {
            localStorage.setItem('cf-message', value);
          }}
        />
      ),
    }, {
      id: 'confirmation-before-send-1',
      message: 'Here is your message: {previousValue}.',
      trigger: 'confirmation-before-send-2',
    }, {
      id: 'confirmation-before-send-2',
      message: 'Do you want to edit it or its fine to be sent?',
      trigger: 'confirmation-before-send-options',
    }, {
      id: 'confirmation-before-send-options',
      component: (
        <CustomOptions options={[
          {
            value: true,
            label: 'Edit',
            trigger: 'edit-message-content-input',
          },
          {
            value: false,
            label: 'Send it',
            trigger: 'message-sent',
            callback: () => {
              const sendEmail = firebase.functions().httpsCallable('sendEmail');
              sendEmail({
                email: localStorage.getItem('cf-email'),
                message: localStorage.getItem('cf-message'),
              }).then(() => {
                localStorage.removeItem('cf-email');
                localStorage.removeItem('cf-message');
              });
            },
          },
        ]}
        />
      ),
    }, {
      id: 'edit-message-content-input',
      component: (
        <TextArea
          trigger="confirmation-before-send-editted-1"
          initialValue
          placeholder="Type your message..."
          callback={(value) => {
            localStorage.setItem('cf-message', value);
          }}
        />
      ),
    }, {
      id: 'confirmation-before-send-editted-1',
      message: 'Here is your message: {previousValue}.',
      trigger: 'confirmation-before-send-editted-2',
    }, {
      id: 'confirmation-before-send-editted-2',
      message: 'Do you want to edit it or its fine to be sent?',
      trigger: 'confirmation-before-send-options',
    }, {
      id: 'message-sent',
      message: `Sending your message to: svs7oyanov@gmail.com. Its takes me 1 day to answer an email. ${localStorage.getItem('username')} I am going to grab a coffee, meanwhile you can continue to browse!`,
    }];

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
  // steps: PropTypes.array,
  projects: PropTypes.array,
  navigate: PropTypes.func,
};

const mapStateToProps = state => ({
  // steps: state.conversation.steps,
  projects: state.projects,
  routing: state.routing,
});

const mapDispatchToProps = () => ({});

export default compose(
  withStyles(style),
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
