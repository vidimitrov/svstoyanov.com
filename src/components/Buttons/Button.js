import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import {colors, typography} from '../../styles';
const ButtonLeftBorder = require('../../assets/img/buttons/button-left-border.svg');
const ButtonRightBorder = require('../../assets/img/buttons/button-right-border.svg');

const styles = {
  button: {
    ...typography.buttons,
    maxWidth: '400px',
    textAlign: 'center',
    color: colors.primary,
    margin: '20px 0',
  },
  highlight: {
    '&:hover': {
      backgroundColor: colors.primary,
      color: colors.white,
      cursor: 'pointer',
    },
  },
  center: {
    textAlign: 'center',
  },
};

const Button = ({...props}) => {
  const {
    children,
    classes,
    onClick,
  } = props;

  return (
    <div className={classes.button} onClick={onClick}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item className={classes.center}>
          <img src={ButtonLeftBorder} alt='' />
        </Grid>
        <Grid item xs>
          <span className={classes.highlight}>{children}</span>
        </Grid>
        <Grid item className={classes.center}>
          <img src={ButtonRightBorder} alt='' />
        </Grid>
      </Grid>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  onClick: PropTypes.func,
};

export default withStyles(styles)(Button);
