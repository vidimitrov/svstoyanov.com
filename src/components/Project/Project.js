/* eslint-disable react/forbid-prop-types */
/* eslint no-restricted-globals:0 */
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

import Footer from '../Footer/Footer';
import style from './styles';

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
    const { muted } = this.state;
    const {
      classes,
      project,
      onClose,
    } = this.props;
    const projectCodeName = `P${project.id}_${project.name.split(' ').join('_').toUpperCase()}`;
    const problem = project && project.problem;

    return (
      <Grid container justify="space-between" className={classes.container}>
        <div
          ref={(el) => {
            this.mainSection = el;
          }}
          className={classes.mainSection}
        >
          <Grid container className={classes.mainSectionContainer}>
            <CloseIcon
              className={classes.closeIcon}
              onClick={() => {
                onClose();
              }}
            />
            {/* <Grid item>
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
            </Grid> */}
            <Grid item xs={12}>
              <img src={project.landingImage} className={classes.landingImage} alt="" />
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
            <Grid item xs={1} className={classes.avatarContainer}>
              <img src={project.review.avatar} className={classes.reviewAvatar} alt="" />
            </Grid>
            <Grid item xs={11}>
              <h2 className={classes.reviewHeadline}>
                &gt;
                {' '}
                <span className={classes.highlighted}>{project.review.headline}</span>
              </h2>
              <div className={classes.reviewContainer}>
                <div className={classes.reviewContent}>
                  {project.review.content}
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.imageSection}>
            <img className={classes.imageSectionImage} src={project.fullWidthImage} alt="" />
          </div>
        </div>
        <Footer
          muted={muted}
          togglePlayer={this.togglePlayer}
        >
          <Grid
            container
            justify="center"
            className={classes.navigation}
          >
            <h1 className={classes.projectName}>{projectCodeName}</h1>
          </Grid>
        </Footer>
      </Grid>
    );
  }
}

const ProjectType = {
  id: PropTypes.string,
  name: PropTypes.string,
  headline: PropTypes.string,
};

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.shape(ProjectType),
  onClose: PropTypes.func,
};

export default withStyles(style)(Project);
