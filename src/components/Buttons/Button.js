import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import {colors, typography} from '../../styles';
const ButtonLeftBorder = require('../../assets/img/buttons/button-left-border.svg');
const ButtonRightBorder = require('../../assets/img/buttons/button-right-border.svg');

const styles = {
  button: {
    margin: '20px 0',
  },
  text: {
    ...typography.buttons,
    'margin': '0 16px',
    'fontWeight': 'bold',
    'color': colors.primary,
    'letterSpacing': '2px',
    'lineHeight': 1.5,
    '&:hover': {
      backgroundColor: colors.primary,
      color: colors.black,
      cursor: 'crosshair',
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
      <Grid container direction='row' alignItems='center'>
        {/* <Grid item className={classes.center}>

        </Grid> */}
        <img src={ButtonLeftBorder} alt='' />
        <div>
          <span className={classes.text}>{children}</span>
        </div>
        <img src={ButtonRightBorder} alt='' />
        {/* <Grid item className={classes.center}>

        </Grid> */}
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
