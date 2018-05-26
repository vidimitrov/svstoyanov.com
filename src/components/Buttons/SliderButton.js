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
  },
  highlight: {
    '&:hover': {

    },
  },
  center: {
    textAlign: 'center',
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
    <div className={classes.button} onClick={onClick}>
      <Grid container direction='row' justify='center' alignItems='center'>
        {prev && <Grid item className={classes.center} xs={2} sm={2} md={2} lg={2}>
          <img src={PrevButton} alt='' />
        </Grid>}
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <span className={classes.highlight}>{children}</span>
        </Grid>
        {next && <Grid item className={classes.center} xs={2} sm={2} md={2} lg={2}>
          <img src={NextButton} alt='' />
        </Grid>}
      </Grid>
    </div>
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
