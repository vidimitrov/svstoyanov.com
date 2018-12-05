/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { colors, typography } from '../../styles';

const styles = {
  button: {
    ...typography.buttons,
    maxWidth: '400px',
    textAlign: 'center',
    color: colors.white,
    border: '1px solid #02A0A7',
    padding: '12px',
    margin: '2px',
    float: 'left',
    cursor: 'pointer',
  },
};

const SimpleButton = ({ ...props }) => {
  const {
    children,
    classes,
    onClick,
  } = props;

  return (
    <div className={classes.button} onClick={onClick}>
      {children}
    </div>
  );
};

SimpleButton.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  onClick: PropTypes.func,
};

export default withStyles(styles)(SimpleButton);
