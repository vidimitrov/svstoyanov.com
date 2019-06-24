import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';

const styles = {
  container: {
    width: '100%',
    margin: '32px 0',
  },
  player: {},
};

const YoutubePlayer = ({ ...props }) => {
  const {
    classes,
    id,
  } = props;

  return (
    <YouTube
      videoId={id}
      className={classes.player}
      containerClassName={classes.container}
      opts={{
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      }}
    />
  );
};

YoutubePlayer.propTypes = {
  classes: PropTypes.any,
  id: PropTypes.string,
};

export default withStyles(styles)(YoutubePlayer);
