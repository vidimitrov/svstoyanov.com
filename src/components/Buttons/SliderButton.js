import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import {colors, typography} from '../../styles';
const NextButton = require('../../assets/img/buttons/slider-next-button.svg');
// const NextButtonHighlighted = require('../../assets/img/buttons/slider-next-highlighted-button.svg');
const PrevButton = require('../../assets/img/buttons/slider-prev-button.svg');
// const PrevButtonHighlighted = require('../../assets/img/buttons/slider-prev-highlighted-button.svg');

const styles = {
  button: {
    ...typography.buttons,
    maxWidth: '200px',
    textAlign: 'center',
    color: colors.white,
    fontSize: '24px',
    lineHeight: 1.5,
    letterSpacing: '2px',
  },
  highlight: {
    '&:hover': {

    },
  },
  center: {
    textAlign: 'center',
  },
  prevText: {
    marginLeft: '16px',
  },
  nextText: {
    marginRight: '16px',
  },
  prevContainer: {
    marginRight: '80px',
  },
  nextContainer: {
    marginLeft: '80px',
  },
};

const SliderButton = ({...props}) => {
  const {
    children,
    classes,
    prev,
    next,
    onClick,
  } = props;

  return (
    <Grid item className={`${classes.button} ${prev ? classes.prevContainer : classes.nextContainer}`} onClick={onClick}>
      <Grid container direction='row' justify='center' alignItems='center'>
        {prev && <img src={PrevButton} alt='' />}
        <div>
          <span className={`${classes.highlight} ${prev ? classes.prevText : classes.nextText}`}>{children}</span>
        </div>
        {next && <img src={NextButton} alt='' />}
      </Grid>
    </Grid>
  );
};

SliderButton.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  prev: PropTypes.bool,
  next: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(styles)(SliderButton);
