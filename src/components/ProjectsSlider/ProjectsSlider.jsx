/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import SliderButton from '../Buttons/SliderButton';
import Button from '../Buttons/Button';
import AnimatedText from '../Text/AnimatedText';
import { isDesktop } from '../../lib/viewport';
import avatar from '../../assets/img/sto-avatar.png';
import styles from './styles';

class ProjectsSlider extends React.Component {
  constructor(props) {
    super(props);

    const { startFrom, projects } = props;

    this.state = {
      selected: false,
      currentProject: startFrom !== undefined ? projects[startFrom] : projects[0],
    };

    this.nextProject = this.nextProject.bind(this);
    this.prevProject = this.prevProject.bind(this);
    this.renderProject = this.renderProject.bind(this);
  }

  nextProject() {
    const {currentProject} = this.state;
    const {projects} = this.props;
    const nextProjectId = currentProject.id + 1 < projects.length ? currentProject.id + 1 : 0;

    this.setState({
      currentProject: projects[nextProjectId],
    });
  }

  prevProject() {
    const {currentProject} = this.state;
    const {projects} = this.props;
    const prevProjectId = currentProject.id - 1 >= 0 ? currentProject.id - 1 : projects.length - 1;

    this.setState({
      currentProject: projects[prevProjectId],
    });
  }

  renderProject(project) {
    const { selected } = this.state;
    const {
      projects,
      classes,
      primaryButtonLabel,
      secondaryButtons,
      triggerNextStep,
    } = this.props;

    return (
      <div className={classes.projectSliderContainer}>
        <div className={classes.sliderBody}>
          { !selected && isDesktop() &&
            <div className={classNames(classes.sliderNavButton, classes.sliderLeftButton)}>
              <SliderButton prev onClick={() => {
                  this.prevProject();
                }}>
                <AnimatedText text="Previous"/>
              </SliderButton>
            </div>
          }
          { !selected && isDesktop() &&
            <div className={classNames(classes.sliderNavButton, classes.sliderRightButton)}>
              <SliderButton next onClick={() => {
                  this.nextProject();
                }}>
                <AnimatedText text="Next"/>
              </SliderButton>
            </div>
          }
          <Grid container className={classes.sliderOffset}>
            <Grid item xs={9}>
              <div className={classes.projectId}>
                <AnimatedText text={`Portfolio_Project: 0${project.id}_0${projects.length}`}/>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.duration}>
                <AnimatedText text={`${project.duration} DURATION`}/>
              </div>
            </Grid>
          </Grid>
          <div className={classNames(classes.projectName, classes.sliderOffset)}>
            <AnimatedText text={`P${project.id} ${project.name.split(' ').join(' ').toUpperCase()}`}/>
          </div>
          <div className={classes.projectDescription}>
            <img className={classes.avatar} src={avatar} alt="Stoyan avatar"/>
            <AnimatedText text={project.shortDescription}/>
          </div>
          {
            !selected && (
              <div className={classNames(classes.buttonsWrapper, classes.sliderOffset)}>
                <Button onClick={() => {
                  this.setState({
                    selected: true,
                  }, () => {
                    triggerNextStep({
                      stepId: `project-info-step-${project.id}`,
                      externalTrigger: true,
                    });
                  });
                }}
                >
                  <AnimatedText text={ !isDesktop() ? 'LEARN_MORE' : primaryButtonLabel.toUpperCase().split(' ').join('_')}/>
                </Button>
                {
                  secondaryButtons
                  && secondaryButtons.map((secondaryButton, idx) => (
                    <Button
                      key={idx}
                      onClick={() => {
                        triggerNextStep({
                          stepId: secondaryButton.trigger,
                          externalTrigger: true,
                        });
                      }}
                    >
                      <AnimatedText text={ !isDesktop() ? 'SKIP' : secondaryButton.label.toUpperCase().split(' ').join('_')}/>
                    </Button>
                  ))
                }
              </div>
            )
          }
          {
            !selected && !isDesktop() &&
            <div className={classes.navigationButtons}>
              <Button navigational onClick={() => {
                this.prevProject();
              }}>
                <AnimatedText text="PREV_PROJECT"/>
              </Button>
              <Button navigational onClick={() => {
                this.nextProject();
              }}>
                <AnimatedText text="NEXT_PROJECT"/>
              </Button>
            </div>
          }
        </div>
      </div>
    );
  }

  render() {
    const { currentProject } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.slider}>
        {this.renderProject(currentProject)}
      </div>
    );
  }
}

ProjectsSlider.propTypes = {
  activeSlideId: PropTypes.number,
  step: PropTypes.any,
  secondaryButtons: PropTypes.any,
  classes: PropTypes.any,
  steps: PropTypes.object,
  projects: PropTypes.array,
  triggerNextStep: PropTypes.func,
  trigger: PropTypes.string,
  navigate: PropTypes.func,
  selected: PropTypes.bool,
};

const mapStateToProps = state => ({
  projects: state.projects,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(ProjectsSlider);
