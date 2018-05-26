import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import TimeCounter from '../TimeCounter/TimeCounter';
import styles from './styles';
import musicImg from '../../assets/img/music.svg';

const Footer = ({classes, content}) => (
  <Grid container className={classes.footer}>
    <Grid item xs>
      <TimeCounter start={Date.now()} />
    </Grid>
    <Grid item xs={8}>
      {content}
    </Grid>
    <Grid item xs>
      <img src={musicImg} alt="music" />
    </Grid>
  </Grid>
);

Footer.propTypes = {
  classes: PropTypes.any,
  content: PropTypes.any,
};

export default withStyles(styles)(Footer);
