/* eslint-disable react/forbid-prop-types */
/* eslint no-restricted-globals:0 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeProvider } from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/functions';

import Grid from '@material-ui/core/Grid';
import Footer from '../Footer/Footer';
import ChatBot from '../../lib/ChatBot';
import Input from '../Inputs/Input';
import CustomOptions from '../CustomOptions/CustomOptions';
import TextArea from '../Inputs/TextArea';

import style from './styles';
import chatTheme from '../../containers/Chat/styles/theme';
import avatar from '../../assets/img/sto-avatar.png';
import defaultImage from '../../assets/img/default-thumb.png';
import avatarImage from '../../assets/img/avatar-wrapper.png';
import mp4Video from '../../assets/video/bg-spin.mp4';
import webmVideo from '../../assets/video/bg-spin.webm';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: true,
    };
    this.togglePlayer = this.togglePlayer.bind(this);
    this.onNodeInserted = this.onNodeInserted.bind(this);
  }

  componentDidMount() {
    this.mainSection.addEventListener('DOMNodeInserted', this.onNodeInserted);
  }

  componentWillUnmount() {
    this.mainSection.removeEventListener('DOMNodeInserted', this.onNodeInserted);
  }

  // eslint-disable-next-line class-methods-use-this
  onNodeInserted(event) {
    // eslint-disable-next-line no-param-reassign
    event.currentTarget.scrollTop = event.currentTarget.scrollHeight;
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
    const {
      classes,
      project,
      projects,
      navigate,
    } = this.props;
    const {
      muted,
    } = this.state;
    const projectCodeName = `P${project.id}_${project.name.split(' ').join('_').toUpperCase()}`;
    const steps = [{
      id: '1',
      message: 'I hope you liked the project. Do not hesitate to drop me a line about it or for another reason',
      trigger: '2',
      delay: 2000,
    }, {
      id: '2',
      component: (
        <CustomOptions options={[
          {
            value: 'contact-me',
            label: 'Contact me',
            trigger: 'email-address',
          },
          {
            value: 'next-project',
            label: 'Show me your next project',
            callback: () => {
              let nextId = project.id + 1;
              if (nextId > projects.length) {
                nextId %= projects.length;
              }

              // FIXME: Temporary workaround to redirect with forced "refresh" of the page
              location.replace(`http://${location.host}/projects/${nextId}`);

              // TODO: Continue the proper solution with react-router
              // history.push(`/projects/${nextId}`);
            },
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
      message: 'Here is your message: {previousValue}',
      trigger: 'confirmation-before-send-editted-2',
    }, {
      id: 'confirmation-before-send-editted-2',
      message: 'Do you want to edit it or its fine to be sent?',
      trigger: 'confirmation-before-send-options',
    }, {
      id: 'message-sent',
      message: 'Your message was sent successfully. I will reach you out soon :)',
    }];
    const problem = project && project.problem;

    return (
      <Grid container justify="space-between" className={classes.container}>
        <video autoPlay muted loop className={classes.videoBackground}>
          <source src={mp4Video} type="video/mp4" />
          <source src={webmVideo} type="video/webm" />
        </video>
        <div
          ref={(el) => {
            this.mainSection = el;
          }}
          className={classes.mainSection}
        >
          <Grid container className={classes.mainSectionContainer}>
            <Grid item xs={3} className={classes.sidebar}>
              <Grid container direction="column">
                <Grid item className={classes.closeIconWrapper}>
                  <CloseIcon
                    className={classes.closeIcon}
                    onClick={() => {
                      navigate('/');
                    }}
                  />
                </Grid>
                <Grid item>
                  <div>
                    <span className={classes.bold}>PROJECT_NAME:</span>
                    {' '}
                    {project.name}
                  </div>
                  <div>
                    <span className={classes.bold}>DURATION:</span>
                    {' '}
                    {project.duration}
                  </div>
                  <div>
                    <span className={classes.bold}>CLIENT:</span>
                    {' '}
                    {project.review.companyName}
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <h1 className={classes.headline}>{project.headline}</h1>
              <img src={defaultImage} className={classes.landingImage} alt="" />
              <h4 className={classes.description}>{project.description}</h4>
              {problem
                && (
                  <h2 className={classes.subHeadline}>
                    &gt;
                    {' '}
                    <span className={classes.highlighted}>Problem</span>
                  </h2>
                )}
              {problem
                && <h4 className={classes.description}>{problem && problem.description}</h4>}
              {problem && problem.bulletPoints.map(bp => (
                <h4 className={classes.bulletPoint} key={uuid()}>
                  <span className={classes.bullet}>*</span>
                  {' '}
                  {bp}
                </h4>
              ))}
            </Grid>
          </Grid>
          <Grid container className={classes.review}>
            <Grid item xs={4} className={classes.avatarContainer}>
              <img src={avatarImage} className={classes.reviewAvatar} alt="" />
            </Grid>
            <Grid item xs={8}>
              <div className={classes.reviewerInfo}>
                <div className={classes.reviewerNameContainer}>
                  <span className={classes.reviewerName}>{project.review.representative}</span>
                </div>
                <div>{project.review.representativeRole}</div>
              </div>
              <div className={classes.reviewContainer}>
                <div className={classes.reviewContent}>
                  {project.review.content}
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.imageSection}>
            <img className={classes.imageSectionImage} src={defaultImage} alt="" />
          </div>
          <div className={classes.contactMeSection}>
            <ThemeProvider theme={chatTheme}>
              <ChatBot
                steps={steps}
                cache={false}
                botAvatar={avatar}
                hideHeader
                hideUserAvatar
                hideBotAvatar={false}
                hideSubmitButton
                renderWhenVisible
                className="chat-bot"
                contentStyle={{
                  height: '100%',
                  overflowX: 'hidden',
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
              />
            </ThemeProvider>
          </div>
        </div>
        <Footer
          muted={muted}
          togglePlayer={this.togglePlayer}
          content={(
            <Grid
              container
              justify="center"
              className={classes.navigation}
            >
              <Grid item xs={3}>
                <h1 className={classes.projectName}>{projectCodeName}</h1>
              </Grid>
            </Grid>
          )}
        />
      </Grid>
    );
  }
}

const ProjectType = {
  id: PropTypes.number,
  name: PropTypes.string,
  headline: PropTypes.string,
};

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.shape(ProjectType).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape(ProjectType)).isRequired,
  navigate: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  projects: state.projects,
  project: state.projects.find(project => (`${project.id}`) === ownProps.projectId),
});

const mapDispatchToProps = () => ({});


export default compose(
  withStyles(style),
  connect(mapStateToProps, mapDispatchToProps),
)(Project);