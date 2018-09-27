import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import {ThemeProvider} from 'styled-components';

import Grid from 'material-ui/Grid';
import Footer from '../Footer/Footer';
import ChatBot from '../../lib/ChatBot';

import style from './styles.jsx';
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
    const {classes, project} = this.props;
    const projectCodeName = `P${project.id}_${project.name.split(' ').join('_').toUpperCase()}`;
    const steps = [{
      id: '1',
      message: 'I hope you liked the project. Do not hesitate to drop me a line about it or for another reason',
      trigger: '2',
      delay: 2000,
    }, {
      id: '2',
      options: [
        {value: 'contact-me', label: 'Contact me', trigger: '3'},
        {value: 'next-project', label: 'Show me next project'},
      ],
    }, {
      id: '3',
      message: 'What message you want to send me?',
    }];
    const problem = project && project.problem;

    return (
      <Grid container justify="space-between" className={classes.container}>
        <video autoPlay muted loop className={classes.videoBackground}>
          <source src={mp4Video} type="video/mp4" />
          <source src={webmVideo} type="video/webm" />
        </video>
        <Grid item xs={12} className={classes.mainSection}>
          <Grid container className={classes.mainSectionContainer}>
            <Grid item xs={3} className={classes.sidebar}>
              <Grid container direction={'column'}>
                <Grid item className={classes.closeIconWrapper}>
                  <CloseIcon className={classes.closeIcon} />
                </Grid>
                <Grid item>
                  <div><span className={classes.bold}>PROJECT_NAME:</span> {project.name}</div>
                  <div><span className={classes.bold}>DURATION:</span> {project.duration}</div>
                  <div><span className={classes.bold}>CLIENT:</span> {project.review.companyName}</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <h1 className={classes.headline}>{project.headline}</h1>
              <img src={defaultImage} className={classes.landingImage} alt="" />
              <h4 className={classes.description}>{project.description}</h4>
              {problem &&
                <h2 className={classes.subHeadline}>&gt; <span className={classes.highlighted}>Problem</span></h2>}
              {problem &&
                <h4 className={classes.description}>{problem && problem.description}</h4>}
              {problem && problem.bulletPoints.map((bp, index) => {
                return (
                  <h4 className={classes.bulletPoint} key={index}><span className={classes.bullet}>*</span> {bp}</h4>
                );
              })}
            </Grid>
          </Grid>
          <Grid container className={classes.review}>
            <Grid item xs={4} className={classes.avatarContainer}>
              <img src={avatarImage} className={classes.reviewAvatar} alt="" />
            </Grid>
            <Grid item xs={8}>
              <div className={classes.reviewerInfo}>
                <div className={classes.reviewerNameContainer}><span className={classes.reviewerName}>{project.review.representative}</span></div>
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
                hideHeader={true}
                hideUserAvatar={true}
                hideBotAvatar={false}
                hideSubmitButton={true}
                renderWhenVisible={true}
                className='chat-bot'
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
              />
            </ThemeProvider>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Footer
            muted={this.state.muted}
            togglePlayer={this.togglePlayer}
            content={
              <Grid container justify='center'
                className={classes.navigation}>
                <Grid item xs={3}>
                  <h1>{projectCodeName}</h1>
                </Grid>
              </Grid>
            } />
        </Grid>
      </Grid>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object,
  project: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects.find((project, index) => {
      return project.id === ownProps.match.params.projectId;
    }),
  };
};

const mapDispatchToProps = () => {
  return {};
};


export default compose(
  withStyles(style),
  connect(mapStateToProps, mapDispatchToProps)
)(Project);
