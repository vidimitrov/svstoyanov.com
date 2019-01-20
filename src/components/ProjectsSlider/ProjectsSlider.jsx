/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SliderButton from '../Buttons/SliderButton';
import Button from '../Buttons/Button';
import styles from './styles';

class ProjectsSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  componentDidMount() {
    const { activeSlideId } = this.props;
    if (activeSlideId !== undefined) {
      this.slider.slickGoTo(activeSlideId, true);
    }
  }

  render() {
    const {
      projects,
      classes,
      primaryButtonLabel,
      secondaryButtons,
      triggerNextStep,
    } = this.props;
    const { selected } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: !selected ? <SliderButton next>Next</SliderButton> : null,
      prevArrow: !selected ? <SliderButton prev>Previous</SliderButton> : null,
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
                {project.shortDescription}
              </div>
              {
                !selected && (
                <div>
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
                    {primaryButtonLabel.toUpperCase().split(' ').join('_')}
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
                      {secondaryButton.label.toUpperCase().split(' ').join('_')}
                    </Button>
                  ))
                }
                </div>
                )
            }
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
  selected: PropTypes.bool,
};

const mapStateToProps = state => ({
  projects: state.projects,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(ProjectsSlider);
