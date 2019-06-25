import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';

import { wakeUp } from '../../api';
import styles from './styles';
import chatTheme from '../Chat/styles/theme';
import ChatBot from '../../lib/ChatBot';
import Preloader from '../../components/Preloader/Preloader';
import Project from '../../components/Project/Project';
import Footer from '../../components/Footer/Footer';
import avatar from '../../assets/img/sto-avatar.png';
import logo from '../../assets/img/logo.png';
import backgroundMusic from '../../assets/audio/background-sound.mp3';
import Hud from '../../components/Hud/Hud';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: true,
      projectDetails: null,
    };
    this.togglePlayer = this.togglePlayer.bind(this);
    this.getChatComponent = this.getChatComponent.bind(this);
    this.showProjectInfo = this.showProjectInfo.bind(this);
    this.continueTheFlow = this.continueTheFlow.bind(this);
  }

  componentDidMount() {
    const chat = this.getChatComponent();
    const { renderedSteps } = chat.state;
    if (renderedSteps && renderedSteps.length > 1) {
      const lastVisitDateString = JSON.parse(localStorage.getItem('last-visit'));
      const lastVisitDate = moment(lastVisitDateString);
      const now = moment();
      const difference = now.diff(lastVisitDate, 'hours');

      if (difference >= 0 && difference < 24) {
        // Start the convo for less than 24 hours since last visit
        chat.triggerNextStep({
          stepId: '676a522c-fd7b-4923-a40e-1fef304c3611',
          externalTrigger: true,
        });
      } else if (difference >= 24) {
        // Start the convo for more than 24 hours since last visit
        chat.triggerNextStep({
          stepId: 'a2bf3b98-78a9-4a76-ad02-4a3f4982baf4',
          externalTrigger: true,
        });
      }
    }

    localStorage.setItem('last-visit', JSON.stringify(new Date()));

    // Send just a simple ping request to the API
    // so the free dyno of Heroku gets awaken for the current session
    wakeUp();
  }

  getChatComponent() {
    return this.chat;
  }

  showProjectInfo(option) {
    this.setState({
      projectDetails: option.projectDetails,
    });
  }

  continueTheFlow(stepId) {
    const chat = this.getChatComponent();
    chat.triggerNextStep({
      stepId,
      externalTrigger: true,
    });
  }

  togglePlayer() {
    const { muted } = this.state;
    if (muted) {
      this.player.play();
    }
    this.setState({
      muted: !muted,
    });
  }

  render() {
    const { classes, steps } = this.props;
    const { muted, projectDetails } = this.state;

    return (
      <Grid
        container
        justify="flex-end"
        className={classes.container}
      >
        <Hud />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio
          ref={(element) => {
            this.player = element;
          }}
          src={backgroundMusic}
          muted={muted}
          loop
          preload="auto"
        />
        <Preloader />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={!!projectDetails}
          onClose={() => {
            const { trigger } = projectDetails;
            this.setState({
              projectDetails: null,
            }, () => {
              this.continueTheFlow(trigger);
            });
          }}
        >
          <div className={classes.paper}>
            <Project
              project={projectDetails}
              onClose={() => {
                const { trigger } = projectDetails;
                this.setState({
                  projectDetails: null,
                }, () => {
                  this.continueTheFlow(trigger);
                });
              }}
            />
          </div>
        </Modal>
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
                avatarStyle={{
                  borderRadius: 0,
                  minWidth: '38px',
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
                handleShowProjectModal={
                  (step) => {
                    this.showProjectInfo(step);
                  }
                }
              />
            </ThemeProvider>
          </div>
        </Grid>
        <Footer
          muted={muted}
          togglePlayer={this.togglePlayer}
        >
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.navigation}
          >
            <img src={logo} className={classes.logo} alt="" />
          </Grid>
        </Footer>
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
