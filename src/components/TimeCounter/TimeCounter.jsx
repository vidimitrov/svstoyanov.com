/* eslint no-invalid-this: 0*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

    return (
      <div className="time-counter">
        <p>USER_ID: <span>Gf782s1aF</span></p>
        <p>DURATION: <span>{seconds}s</span></p>
      </div>
    );
  }
}

TimeCounter.propTypes = {
  start: PropTypes.number.isRequired,
};

export default TimeCounter;
