/* eslint no-invalid-this: 0*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import withStyles from 'material-ui/styles/withStyles';
import styles from './styles';

const userId = uuid().split('-').shift();

class TimeCounter extends Component {
  constructor() {
    super();

    this.state = {
      elapsed: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({
      elapsed: new Date() - this.props.start,
    });
  }

  render() {
    const elapsed = Math.round(this.state.elapsed / 100);
    const seconds = (elapsed / 10).toFixed(1);
    const {classes} = this.props;

    return (
      <div className={classes.timeCounter}>
        <p className={classes.key}>USER_ID: <span className={classes.value}>{userId}</span></p>
        <p className={classes.key}>DURATION: <span className={classes.value}>{seconds}s</span></p>
      </div>
    );
  }
}

TimeCounter.propTypes = {
  start: PropTypes.number.isRequired,
  classes: PropTypes.any,
};

export default withStyles(styles)(TimeCounter);
