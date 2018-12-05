/* eslint no-invalid-this: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const userId = uuid().split('-').shift();

class TimeCounter extends Component {
  constructor() {
    super();

    this.state = {
      elapsed: 0,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick () {
    const { start } = this.props;
    this.setState({
      elapsed: new Date() - start,
    });
  }

  render() {
    const { elapsed } = this.state;
    const elapsedTime = Math.round(elapsed / 100);
    const seconds = (elapsedTime / 10).toFixed(1);
    const { classes } = this.props;

    return (
      <div className={classes.timeCounter}>
        <p className={classes.key}>
          USER_ID:
          {' '}
          {userId}
        </p>
        <p className={classes.key}>
          DURATION:
          {' '}
          {seconds}
          s
        </p>
      </div>
    );
  }
}

TimeCounter.propTypes = {
  start: PropTypes.number.isRequired,
  classes: PropTypes.any,
};

export default withStyles(styles)(TimeCounter);
