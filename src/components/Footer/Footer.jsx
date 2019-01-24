/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
      <Grid item xs>
        <TimeCounter start={Date.now()} />
      </Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
      <Grid item xs className={classes.musicPlayer}>
        <SoundControl
          muted={muted}
          onClick={togglePlayer}
        />
      </Grid>
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
