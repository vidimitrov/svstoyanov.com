import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/chatMessageStyles';

const ChatMessage = ({ classes, message }) => (
  <div className={classes.chatMessage}>
    <span>&gt;</span>
    {' '}
    {message}
  </div>
);

ChatMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(ChatMessage);
