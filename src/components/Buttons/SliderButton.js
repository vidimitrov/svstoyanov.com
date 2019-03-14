import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { colors, typography } from '../../styles';

const NextButton = require('../../assets/img/buttons/slider-next-button.svg');
const NextButtonHovered = require('../../assets/img/buttons/hover-slider-next-btn.svg');
const PrevButton = require('../../assets/img/buttons/slider-prev-button.svg');
const PrevButtonHovered = require('../../assets/img/buttons/hover-slider-prev-btn.svg');

const styles = {
  button: {
    ...typography.buttons,
    maxWidth: '200px',
    textAlign: 'center',
    color: colors.white,
    fontSize: '16px',
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
  prev: {
    background: `url("${PrevButton}") no-repeat`,
    transition: 'background 250ms ease-in-out',
    '&:hover': {
      background: `url("${PrevButtonHovered}") no-repeat`,
    }
  },
  next: {
    background: `url("${NextButton}") no-repeat`,
    transition: 'background 250ms ease-in-out',
    '&:hover': {
      background: `url("${NextButtonHovered}") no-repeat`,
    }
  },
};

class SliderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };

    this.onHover = this.onHover.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onHover () {
    this.setState({
      hovered: true,
    });
  }

  onBlur () {
    this.setState({
      hovered: false,
    });
  }

  render () {
    const {
      children,
      classes,
      prev,
      next,
      onClick,
    } = this.props;
    const {
      hovered,
    } = this.state;
  
    return (
      <Grid item 
        className={`${classes.button} ${prev ? classes.prevContainer : classes.nextContainer}`} 
        onClick={onClick}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onBlur}>
        <Grid container direction="row" justify="center" alignItems="center">
          {prev && <img className={classes.prev} src={PrevButton} alt="" />}
          <div>
            <span className={`${classes.highlight} ${prev ? classes.prevText : classes.nextText}`}>{children}</span>
          </div>
          {next && <img className={classes.next} src={NextButton} alt="" />}
        </Grid>
      </Grid>
    );
  }
}

SliderButton.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  prev: PropTypes.bool,
  next: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(styles)(SliderButton);
