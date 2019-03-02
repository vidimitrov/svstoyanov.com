/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
import TimeCounter from '../TimeCounter/TimeCounter';
import SoundControl from '../SoundControl/SoundControl';
import styles from './styles';

function Footer(props) {
  const {
    classes,
    children,
    muted,
    togglePlayer,
  } = props;

  return (
    <Grid container className={classes.footer}>
      <Hidden only={['xs', 'sm']}>
        <Grid item xs sm={3}>
          <TimeCounter start={Date.now()} />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={6}>
        {children}
      </Grid>
      <Hidden only={['xs', 'sm']}>
        <Grid item xs sm={3} className={classes.musicPlayer}>
          <SoundControl
            muted={muted}
            onClick={togglePlayer}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.any,
  children: PropTypes.any,
  muted: PropTypes.bool,
  togglePlayer: PropTypes.func,
};

export default withStyles(styles)(Footer);
