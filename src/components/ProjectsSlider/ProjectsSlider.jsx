import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import SliderButton from '../Buttons/SliderButton';
import Button from '../Buttons/Button';
import style from './styles.jsx';

class ProjectsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const {classes, projects, trigger} = this.props;
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
      <Grid container className={classes.projectsSlider}>
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
                  <NavLink to={`/projects/${project.id}`}
                    className={classes.navLink}>
                    <Button onClick={() => {
                      triggerNextStep({
                        trigger,
                      });
                    }}>
                      LEARN_MORE_ABOUT_{projectCodeName}
                    </Button>
                  </NavLink>
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
  classes: PropTypes.object.isRequired,
  match: PropTypes.object,
  step: PropTypes.any,
  steps: PropTypes.object,
  projects: PropTypes.array,
  triggerNextStep: PropTypes.func,
  trigger: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default compose(
  withStyles(style),
  connect(mapStateToProps)
)(ProjectsSlider);
