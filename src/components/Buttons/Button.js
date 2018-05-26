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
    maxWidth: '450px',
    textAlign: 'center',
    color: colors.primary,
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
        <Grid item className={classes.center} xs={1} sm={1} md={1} lg={1}>
          <img src={ButtonLeftBorder} alt='' />
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <span className={classes.highlight}>{children}</span>
        </Grid>
        <Grid item className={classes.center} xs={1} sm={1} md={1} lg={1}>
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
