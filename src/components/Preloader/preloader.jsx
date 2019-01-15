import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import arrowAvatar from '../../assets/img/bot-arrow.svg';
import styles from './styles';

class Preloader extends Component {
  constructor() {
    super();
    this.state = {
      showPreloader: true,
    };
  }

  componentDidMount() {
    const inner = document.querySelector('.preloader_inner');
    let currentLoadPercent = 0;
    const togglePreloader = preloader => this.setState({ showPreloader: preloader });

    const interval = setInterval(() => {
      currentLoadPercent += 1;
      const units = currentLoadPercent % 10;
      let tens;

      if (units !== currentLoadPercent) {
        tens = Math.floor(currentLoadPercent / 10);
      }

      inner.innerHTML = `${tens === undefined ? '' : tens}${units}<sup class="percentage">%</sup>`;
      if (currentLoadPercent === 100) {
        togglePreloader(false);
        clearInterval(interval);
        currentLoadPercent = 0;
        this.forceUpdate();
      }

      return null;
    }, 20);
  }

  componentWillUnmount() {
    this.setState({
      showPreloader: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { showPreloader } = this.state;

    const percentageClassName = [
      classes.text,
      classes.percentageWrapper,
    ].join(' ');
    return (
      <Grid
        container
        alignItems="center"
        className={`${classes.preloader} ${(showPreloader ? classes.show : '')}`}
      >
        <div className={classes.innerContainer}>
          <Grid item container xs={12} className={classes.wrapper}>
            <Grid item>
              <img src={arrowAvatar} className={classes.arrow} alt="" />
            </Grid>
            <Grid item>
              <h1 className={classes.text}>Loading your experience</h1>
            </Grid>
            <Grid item>
              <div className={`preloader_inner ${percentageClassName}`}>
                0
                <sup className={classes.percentage}>%</sup>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    );
  }
}

Preloader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Preloader);
