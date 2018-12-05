/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SliderButton from '../Buttons/SliderButton';
import Button from '../Buttons/Button';
import styles from './styles';

class ProjectsSlider extends React.Component {
  render() {
    const { projects, classes, navigate } = this.props;
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
              <Button onClick={() => {
                triggerNextStep({
                  stepId: 'contact-me-request',
                  externalTrigger: true,
                }, true);
                navigate(`/projects/${project.id}`);
              }}
              >
                LEARN_MORE_ABOUT_
                {projectCodeName}
              </Button>
            </div>
          );
        })}
      </Slider>
    );
  }
}

ProjectsSlider.propTypes = {
  step: PropTypes.any,
  classes: PropTypes.any,
  steps: PropTypes.object,
  projects: PropTypes.array,
  triggerNextStep: PropTypes.func,
  trigger: PropTypes.string,
  navigate: PropTypes.func,
};

export default withStyles(styles)(ProjectsSlider);
