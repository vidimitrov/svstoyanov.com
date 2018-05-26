import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import {colors, typography} from '../../styles';
// const ButtonLeftBorder = require('../../assets/img/buttons/navigation-button-left-border.svg');
// const ButtonRightBorder = require('../../assets/img/buttons/navigation-button-right-border.svg');

const styles = {
  button: {
    ...typography.buttons,
    maxWidth: '200px',
    textAlign: 'center',
    color: colors.primary,
    border: '1px dotted ' + colors.white,
    padding: 7,
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

const NavigationButton = ({...props}) => {
  const {
    children,
    classes,
    onClick,
  } = props;

  return (
    <div className={classes.button} onClick={onClick}>
      <Grid container justify='center' alignItems='center'>
        {/* <ItemGrid className={classes.center} xs={1} sm={1} md={1} lg={1}>
          <img src={ButtonLeftBorder} alt='' />
        </ItemGrid> */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <span className={classes.highlight}>{children}</span>
        </Grid>
        {/* <ItemGrid className={classes.center} xs={1} sm={1} md={1} lg={1}>
          <img src={ButtonRightBorder} alt='' />
        </ItemGrid> */}
      </Grid>
    </div>
  );
};

NavigationButton.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  onClick: PropTypes.func,
};

export default withStyles(styles)(NavigationButton);
