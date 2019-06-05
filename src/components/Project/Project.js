/* eslint-disable react/forbid-prop-types */
/* eslint no-restricted-globals:0 */
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import Grid from '@material-ui/core/Grid';

import style from './styles';
import defaultImage from '../../assets/img/default-thumb.png';
import avatarImage from '../../assets/img/avatar-wrapper.png';

class Project extends React.Component {
  constructor(props) {
    super(props);
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
      onClose,
    } = this.props;
    // const projectCodeName = `P${project.id}_${project.name.split(' ').join('_').toUpperCase()}`;
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
            <Grid item xs={3} className={classes.sidebar}>
              <Grid container direction="column">
                <Grid item className={classes.closeIconWrapper}>
                  <CloseIcon
                    className={classes.closeIcon}
                    onClick={() => {
                      onClose();
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
        </div>
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
