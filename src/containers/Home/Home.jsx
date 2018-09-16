import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import withStyles from 'material-ui/styles/withStyles';
import {ThemeProvider} from 'styled-components';
import ChatBot from '../../lib/ChatBot';
import ReactAudioPlayer from 'react-audio-player';
import Grid from 'material-ui/Grid';

import Preloader from '../../components/Preloader/Preloader';
import Footer from '../../components/Footer/Footer';
import NavigationButton from '../../components/Buttons/NavigationButton';
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider';

import style from './styles.jsx';
import chatTheme from '../Chat/styles/theme';
import bgImage from '../../assets/img/bg.png';
import avatar from '../../assets/img/sto-avatar.png';

const APP_URL = 'http://localhost:3000';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: true, // FIXME: Set to false before releasing
    };
    this.togglePlayer = this.togglePlayer.bind(this);
    this.getChatComponent = this.getChatComponent.bind(this);
  }

  getChatComponent() {
    return this.chat;
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
    const {classes, projects} = this.props;
    // const {steps} = this.props;
    const steps = [{
      id: 'intro',
      message: 'Hello. My name is Stoyan. What\'s your name?',
      trigger: 'name-input',
    }, {
      id: 'name-input',
      user: true,
      trigger: 'has-name-what-to-do',
    }, {
      id: 'has-name-what-to-do',
      message: 'Nice to meet you {previousValue}. What can I do for you?',
      trigger: 'what-to-do-options',
    }, {
      id: 'what-to-do-options',
      options: [
        {value: 'tell-me-about-you', label: 'Tell me about yourself', trigger: 'about-me'},
        {value: 'show-me-your-work', label: 'Show me your work', trigger: 'my-work'},
      ],
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
      options: [
        {
          value: 'http://infinitecrave.com',
          label: 'infinitecrave.com',
          trigger: 'my-work-after-about-me',
          redirect: 'http://infinitecrave.com',
        },
        {
          value: 'https://linkedin.com/in/svstoyanov',
          label: 'LinkedIn',
          trigger: 'my-work-after-about-me',
          redirect: 'https://linkedin.com/in/svstoyanov',
        },
        {
          value: 'https://drive.google.com/svstoyanov.cv.pdf',
          label: 'Download CV',
          trigger: 'my-work-after-about-me',
          redirect: 'https://drive.google.com/svstoyanov.cv.pdf',
        },
      ],
    }, {
      id: 'my-work-after-about-me',
      message: 'Now as you know who am I, would you like me to show you my work?',
      trigger: 'my-work-options',
    }, {
      id: 'my-work-options',
      options: [
        {value: true, label: 'Yes', trigger: 'projects-slider'},
        {value: false, label: 'No', trigger: 'here-if-needed'},
      ],
    }, {
      id: 'my-work',
      message: 'This is my portfolio. Some projects that i have created in the past years.',
      trigger: 'projects-slider',
    }, {
      id: 'projects-slider',
      component: (<ProjectsSlider push={this.props.history.push} projects={projects} />),
    }, {
      id: 'here-if-needed',
      message: 'Okay, if you need me I am here',
    }];

    return (
      <Grid container justify='flex-end'
        className={classes.container}
        style={{
          backgroundImage: 'url(' + bgImage + ')',
          backgroundSize: 'cover',
        }}>
        <ReactAudioPlayer
          autoPlay
          src={`${APP_URL}/background-sound.mp3`}
          muted={this.state.muted}
        />
        <Preloader />
        <Grid item xs={12}>
          <div className={classes.chatContainer}>
            <div className={classes.chatWrapper}>
              <ThemeProvider theme={chatTheme}>
                <ChatBot
                  ref={(element) => {
                    window.chat = element;
                    this.chat = element;
                  }}
                  steps={steps}
                  botAvatar={avatar}
                  hideHeader={true}
                  hideUserAvatar={true}
                  hideBotAvatar={false}
                  hideSubmitButton={true}
                  className='chat-bot'
                  cache={true}
                  contentStyle={{
                    height: 'calc(100% - 75px)',
                  }}
                  customStyle={{
                    backgroundColor: 'transparent',
                  }}
                  avatarStyle={{
                    borderRadius: 0,
                    minWidth: '38px',
                  }}
                  bubbleStyle={{
                    fontFamily: 'Space Mono',
                    fontSize: '16px',
                    maxWidth: '100%',
                  }}
                  bubbleOptionStyle={{
                    fontFamily: 'Space Mono',
                    border: '1px solid #02A0A7',
                    borderRadius: '0px',
                  }}
                  footerStyle={{
                    // position: 'absolute',
                    // bottom: 0,
                    // width: '100%',
                  }}
                  inputStyle={{
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid #fff',
                    borderRadius: 0,
                    borderTop: 0,
                    color: '#fff',
                  }}
                  placeholder='Enter your message here...'
                  width='500px'
                  handleEnd={({renderedSteps, steps, values}) => {
                    // TODO: Handle the end of the flow
                  }} />
              </ThemeProvider>
            </div>
          </div>
        </Grid>
        <Footer
          muted={this.state.muted}
          togglePlayer={this.togglePlayer}
          content={
            <Grid container justify='space-between'
              className={classes.navigation} >
              <Grid item xs={3} sm={3} md={3}>
                <NavigationButton onClick={() => {
                  const chat = this.getChatComponent();
                  chat.triggerNextStep({stepId: 'about-me', externalTrigger: true});
                }}>
                  ABOUT_ME
                </NavigationButton>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <NavigationButton onClick={() => {
                  const chat = this.getChatComponent();
                  chat.triggerNextStep({stepId: 'my-work', externalTrigger: true});
                }}>
                  MY_WORK
                </NavigationButton>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <NavigationButton onClick={() => {
                  const chat = this.getChatComponent();
                  // FIXME: Change when all the final steps are updated
                  chat.triggerNextStep({stepId: 'about-me', externalTrigger: true});
                  window.open('https://linkedin.com', '_blank');
                }}>
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
  history: PropTypes.any,
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
