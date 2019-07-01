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
import {SelectedOption} from '../CustomOptions/CustomOptions';
import ArrowAvatar from '../Avatars/ArrowAvatar';
import arrowAvatar from '../../assets/img/bot-arrow.svg';
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
      selectedOptionName: null,
      loading: true,
      currentProject: startFrom !== undefined ? projects[startFrom] : projects[0],
    };

    this.nextProject = this.nextProject.bind(this);
    this.prevProject = this.prevProject.bind(this);
    this.renderProject = this.renderProject.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
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
    const { 
      selected, 
      selectedOptionName,
      loading,
    } = this.state;
    const {
      projects,
      classes,
      primaryButtonLabel,
      secondaryButtons,
      triggerNextStep,
    } = this.props;

    const isFirst = project.id === 0;
    const isLast = project.id === projects[projects.length - 1].id;

    return (
      <div className={classes.projectSliderContainer}>
        <div className={classes.sliderBody}>
          { !selected && !isFirst && isDesktop() &&
            <div className={classNames(classes.sliderNavButton, classes.sliderLeftButton)}>
              <SliderButton prev onClick={() => {
                  this.prevProject();
                }}>
                <AnimatedText text="Previous"/>
              </SliderButton>
            </div>
          }
          { !selected && !isLast && isDesktop() &&
            <div className={classNames(classes.sliderNavButton, classes.sliderRightButton)}>
              <SliderButton next onClick={() => {
                  this.nextProject();
                }}>
                <AnimatedText text="Next"/>
              </SliderButton>
            </div>
          }
          <Grid container className={classes.sliderOffset}>
            <Grid item xs={12} md={9}>
              <div className={classes.projectId}>
                <AnimatedText text={`Portfolio_Project: 0${project.id}_0${projects.length}`}/>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.duration}>
                <AnimatedText text={`${project.metadata && project.metadata.duration} DURATION`}/>
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
          <Grid container>
            <Grid item className={classes.arrowAvatar}>
              <ArrowAvatar src={arrowAvatar} />
            </Grid>
            {
              !selected && (
                <Grid item className={classes.buttonsWrapper}>
                  <Button onClick={() => {
                    this.setState({
                      selected: true,
                      selectedOptionName: !isDesktop() ? 'LEARN MORE' : primaryButtonLabel.toUpperCase()
                    }, () => {
                      triggerNextStep({
                        stepId: `project-info-step-${project.id}`,
                        externalTrigger: true,
                      });
                    });
                  }}
                  >
                    <AnimatedText text={ !isDesktop() ? 'LEARN_MORE' : primaryButtonLabel.toUpperCase().split(' ').join(' ')}/>
                  </Button>
                  {
                    secondaryButtons
                    && secondaryButtons.map((secondaryButton, idx) => (
                      <Button
                        key={idx}
                        onClick={() => {
                          this.setState({
                            selected: true,
                            selectedOptionName: !isDesktop() ? 'SKIP' : secondaryButton.label.toUpperCase()
                          }, () => {
                          triggerNextStep({
                            stepId: secondaryButton.trigger,
                            externalTrigger: true,
                          });
                        })}}>
                        <AnimatedText text={ !isDesktop() ? 'SKIP' : secondaryButton.label.toUpperCase().split(' ').join(' ')}/>
                      </Button>
                    ))
                  }
                </Grid>
              )
            }
            {
              selected && selectedOptionName &&
              <Grid item className={classes.selectedOptionOffset}>
                <SelectedOption className={classes.selectedOption}>{selectedOptionName}</SelectedOption>
              </Grid>
            }
            {
              !selected && !isDesktop() && (
                <Grid item className={classes.navigationButtons}>
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
                </Grid>
              )
            }
          </Grid>
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
