import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import TimeCounter from '../TimeCounter/TimeCounter';
import styles from './styles';
// import equalizerImg from '../../assets/img/equalizer.gif';
import eqImg from '../../assets/img/eq.gif';
// import musicImg from '../../assets/img/music.svg';
import mutedImg from '../../assets/img/muted.svg';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: false,
    };
  }
  render() {
    const {classes, content, muted, togglePlayer} = this.props;
    return (
      <Grid container className={classes.footer} >
        <Grid item xs>
          <TimeCounter start={Date.now()} />
        </Grid>
        <Grid item xs={8}>
          {content}
        </Grid>
        <Grid item xs className={classes.musicPlayer}>
          <img
            src={muted ? mutedImg : eqImg}
            className={muted ? classes.muted : classes.equalizer}
            alt="music"
            onClick={() => {
              togglePlayer();
            }} />
        </Grid>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.any,
  content: PropTypes.any,
  muted: PropTypes.bool,
  togglePlayer: PropTypes.func,
};

export default withStyles(styles)(Footer);
