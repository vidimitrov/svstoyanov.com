/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SliderButton from '../Buttons/SliderButton';
import Button from '../Buttons/Button';
import styles from './styles';

function showProjectMessage() {
  const variations = ['Show me this project', 'Want to understand more about it'];
  return variations[Math.floor(Math.random() * variations.length)];
}

class ProjectsSlider extends React.Component {
  componentDidMount() {
    const { activeSlideId } = this.props;
    if (activeSlideId !== undefined) {
      this.slider.slickGoTo(activeSlideId, true);
    }
  }

  render() {
    const { projects, classes, secondaryButtons } = this.props;
    const { triggerNextStep } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SliderButton next>Next</SliderButton>,
      prevArrow: <SliderButton prev>Previous</SliderButton>,
    };
    return (
      <Slider ref={c => (this.slider = c)} {...settings} className={classes.slider}>
        {projects.map((project, index) => {
          const projectCodeName = `P${project.id}_${project.name.split(' ').join('_').toUpperCase()}`;
          return (
            <div key={index}>
              <Grid container>
                <Grid item xs={9}>
                  <div className={classes.projectId}>
                    Portfolio_Project: 0
                    {project.id}
                    _0
                    {projects.length}
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={classes.duration}>
                    {project.duration}
                    {' '}
                    DURATION
                  </div>
                </Grid>
              </Grid>
              <div className={classes.projectName}>{projectCodeName}</div>
              <div className={classes.projectDescription}>
                &gt;
                {' '}
                {project.shortDescription}
              </div>
              <div>
                <Button onClick={() => {
                  triggerNextStep({
                    stepId: `project-info-step-${project.id}`,
                    externalTrigger: true,
                  }, true);
                }}
                >
                  {showProjectMessage()}
                </Button>
                {
                  secondaryButtons &&
                  secondaryButtons.map((secondaryButton, idx) =>
                    <Button key={idx} onClick={() => {
                      triggerNextStep({
                        stepId: secondaryButton.trigger,
                        externalTrigger: true,
                      });
                    }}
                    >
                      {secondaryButton.label}
                    </Button>
                  )
                }
              </div>
            </div>
          );
        })}
      </Slider>
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
};

const mapStateToProps = state => ({
  projects: state.projects,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(ProjectsSlider);
