import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import {ThemeProvider} from 'styled-components';

import Grid from 'material-ui/Grid';
import Footer from '../Footer/Footer';
import ChatBot from '../../lib/ChatBot';

import style from './styles.jsx';
import chatTheme from '../../containers/Chat/styles/theme';
import bgImage from '../../assets/img/bg.png';
import avatar from '../../assets/img/sto-avatar.png';

class Project extends React.Component {
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
    return (
      <div className={classes.container}
        style={{backgroundImage: 'url(' + bgImage + ')'}}>
        <Grid container justify="space-between">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={3}>
                <div>Project Name: {project.name}</div>
                <div>Duration: {project.duration}</div>
                <div>Client: {project.client.name}</div>
              </Grid>
              <Grid item xs={9}>
                <h1 className={classes.headline}>{project.headline}</h1>
                <h3 className={classes.description}>{project.description}</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.contactMeSection}>

            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <h1 className={classes.headline}>{project.headline}</h1>
            <div className={classes.chatContainer}>
              <div className={classes.chatWrapper}>
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
            </div>
          </Grid>
          <Grid item xs={12}>
            <Footer
              content={
                <Grid container justify='center'
                  className={classes.navigation} >
                  <Grid item xs={3}>
                    <h1>{projectCodeName}</h1>
                  </Grid>
                </Grid>
              } />
          </Grid>
        </Grid>
      </div>
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
