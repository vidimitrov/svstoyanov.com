import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';

import Grid from 'material-ui/Grid';
import Footer from '../Footer/Footer';
import Chat from '../../containers/Chat/Chat';

import style from './styles.jsx';
import bgImage from '../../assets/img/bg.png';

class Project extends React.Component {
  render() {
    const {classes, project} = this.props;
    const projectCodeName = `P${project.id}_${project.name.split(' ').join('_').toUpperCase()}`;
    const steps = [{
      id: '1',
      message: 'I hope you liked the project. Do not hesitate to drop me a line about it or for another reason',
      trigger: '2',
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
            <Chat steps={steps} />
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
