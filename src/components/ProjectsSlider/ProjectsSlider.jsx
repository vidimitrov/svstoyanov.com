import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Grid from 'material-ui/Grid';
import SliderButton from '../Buttons/SliderButton';
import Button from '../Buttons/Button';
import styles from './styles.jsx';

class ProjectsSlider extends React.Component {
  render() {
    const {push, projects} = this.props;
    const {triggerNextStep} = this.props;
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
      <Grid container style={styles.projectsSlider}>
        <Grid item xs={12}>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {projects.map((project, index) => {
              const projectCodeName = `P${project.id}_${project.name.split(' ').join('_').toUpperCase()}`;
              return (
                <div key={index}>
                  <div>Portfolio_Project: 0{project.id}_0{projects.length}</div>
                  <div>Duration: {project.duration}</div>
                  <div>{projectCodeName}</div>
                  <div>&gt; {project.shortDescription}</div>
                  <Button onClick={() => {
                    triggerNextStep({
                      stepId: 'contact-me-request',
                      externalTrigger: true,
                    }, true);
                    push(`/projects/${project.id}`);
                  }}>
                    LEARN_MORE_ABOUT_{projectCodeName}
                  </Button>
                </div>
              );
            })}
          </Slider>
        </Grid>
      </Grid >
    );
  }
}

ProjectsSlider.propTypes = {
  match: PropTypes.object,
  push: PropTypes.any,
  step: PropTypes.any,
  steps: PropTypes.object,
  projects: PropTypes.array,
  triggerNextStep: PropTypes.func,
  trigger: PropTypes.string,
};

export default ProjectsSlider;
