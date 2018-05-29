import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
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
    const togglePreloader = (preloader) => this.setState({showPreloader: preloader});

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
    }, 10);
  }

  componentWillUnmount() {
    this.setState({
      showPreloader: false,
    });
  }

  render() {
    const {classes} = this.props;
    const {showPreloader} = this.state;
    return (
      <Grid container justify='center' alignItems='center'
        className={`${classes.preloader} ${(showPreloader ? classes.show : '')}`}>
        <Grid item xs={12}>
          <h1 className={classes.loading}>LOADING</h1>
          <div className={`preloader_inner ${classes.preloaderInner}`}>
            0<sup className={classes.percentage}>%</sup>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Preloader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Preloader);
