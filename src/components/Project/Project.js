/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint no-restricted-globals:0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import uuid from 'uuid/v4';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Footer from '../Footer/Footer';
import { TYPES } from '../../constants/projects';
import style from './styles';
import CloseIcon from '../../assets/img/close-icon.svg';

const SectionWrapper = ({ classes, children }) => (
  <div className={classes.sectionWrapper}>
    {children}
  </div>
);

SectionWrapper.propTypes = {
  classes: PropTypes.any,
  children: PropTypes.any,
};

const Image = ({ src, classes }) => (
  <SectionWrapper classes={classes}>
    <div className={classes.imageWrapper}>
      <img src={src} className={classes.image} alt="" />
    </div>
  </SectionWrapper>
);

Image.propTypes = {
  src: PropTypes.any,
  classes: PropTypes.any,
};

const FullWidthImage = ({ src, classes }) => (
  <div className={classes.fullWidthImageContainer}>
    <img className={classes.fullWidthImage} src={src} alt="" />
  </div>
);

FullWidthImage.propTypes = {
  src: PropTypes.any,
  classes: PropTypes.any,
};

const Text = ({ content, classes }) => (
  <SectionWrapper classes={classes}>
    <h4 className={classes.text}>{content}</h4>
  </SectionWrapper>
);

Text.propTypes = {
  content: PropTypes.string,
  classes: PropTypes.any,
};

const Review = ({
  headline,
  content,
  avatar,
  classes,
}) => (
  <SectionWrapper classes={classes}>
    <Grid container className={classes.review}>
      <Grid item xs={12} md={1} className={classes.reviewAvatarContainer}>
        <img src={avatar} className={classes.reviewAvatar} alt="" />
      </Grid>
      <Grid item xs={12} md={11}>
        <h2 className={classes.reviewHeadline}>
          <span className={classes.highlighted}>{headline}</span>
        </h2>
        <div className={classes.reviewContainer}>
          <div className={classes.reviewContent}>
            {content}
          </div>
        </div>
      </Grid>
    </Grid>
  </SectionWrapper>
);

Review.propTypes = {
  headline: PropTypes.string,
  content: PropTypes.string,
  avatar: PropTypes.any,
  classes: PropTypes.any,
};

const Section = ({
  heading,
  content,
  bulletPoints,
  classes,
}) => (
  <SectionWrapper classes={classes}>
    <h2 className={classes.subHeadline}>
      <span className={classes.highlighted}>{heading}</span>
    </h2>

    <h4 className={classes.sectionContent}>{content}</h4>

    {bulletPoints && bulletPoints.map(bp => (
      <h4 className={classes.bulletPoint} key={uuid()}>
        <span className={classes.bullet}>*</span>
        {' '}
        {bp}
      </h4>
    ))}
  </SectionWrapper>
);

Section.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  bulletPoints: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.any,
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const AnimationWrapper = styled.div`
  display: block;
  height: 100%;
  width: 100%;

  ${props => props.startAnimation && css`
    animation: ${fadeIn} 1s;
  `}

  ${props => props.endAnimation && css`
    animation: ${fadeOut} 1s;
  `}
`;

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      muted: true,
      startAnimation: true,
      endAnimation: false,
    };

    this.togglePlayer = this.togglePlayer.bind(this);
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
      muted,
      endAnimation,
      startAnimation,
    } = this.state;
    const {
      classes,
      project,
      onClose,
    } = this.props;
    const projectCodeName = `P${project.id}_${project.name.split(' ').join('_').toUpperCase()}`;

    return (
      <AnimationWrapper startAnimation={startAnimation} endAnimation={endAnimation}>
        <Grid container justify="space-between" className={classes.container}>
          <div className={classes.shadow} />
          <Grid container className={classes.mainSectionContainer}>
            <img
              alt=""
              src={project.logo}
              className={classes.projectLogo}
            />
            <img
              alt=""
              src={CloseIcon}
              className={classes.closeIcon}
              onClick={() => {
                this.setState({
                  startAnimation: false,
                  endAnimation: true,
                }, () => {
                  setTimeout(() => {
                    onClose();
                  }, 500);
                });
              }}
            />
            <Grid item xs={12} className={classes.sections}>
              <SectionWrapper classes={classes}>
                <h4 className={classes.headline}>{project.headline}</h4>
              </SectionWrapper>
              {
                project && project.sections && project.sections.map((section, idx) => {
                  switch (section.type) {
                    case TYPES.Image:
                      return <Image key={idx} src={section.src} classes={classes} />;
                    case TYPES.FullWidthImage:
                      return <FullWidthImage key={idx} src={section.src} classes={classes} />;
                    case TYPES.Section:
                      return (
                        <Section
                          key={idx}
                          classes={classes}
                          heading={section.heading}
                          content={section.content}
                          bulletPoints={section.bulletPoints}
                        />
                      );
                    case TYPES.Review:
                      return (
                        <Review
                          key={idx}
                          classes={classes}
                          headline={section.headline}
                          content={section.content}
                          avatar={section.avatar}
                        />
                      );
                    case TYPES.Text:
                      return <Text key={idx} content={section.content} classes={classes} />;
                    default:
                      return null;
                  }
                })
              }
            </Grid>
          </Grid>
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
      </AnimationWrapper>
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
