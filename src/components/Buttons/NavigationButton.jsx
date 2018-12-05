/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { colors, typography } from '../../styles';
// import ButtonLeftBorder from '../../assets/img/buttons/navigation-button-left-border.svg';
// import ButtonRightBorder from '../../assets/img/buttons/navigation-button-right-border.svg';

const styles = {
  activeButton: {
    ...typography.buttons,
    maxWidth: '200px',
    textAlign: 'center',
    height: '36px',
    padding: '4px 16px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1.5,
    letterSpacing: '2px',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    borderRadius: '1px',
    border: `1px solid ${colors.white}`,
    '&:hover': {
      cursor: 'crosshair',
    },
  },
  button: {
    ...typography.buttons,
    maxWidth: '200px',
    textAlign: 'center',
    height: '36px',
    color: colors.white,
    padding: '8px 16px 8px 24px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1.5,
    letterSpacing: '2px',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    borderRadius: '1px',
    borderTop: '1px dotted rgba(255,255,255,0.48)',
    borderBottom: '1px dotted rgba(255,255,255,0.48)',
    borderLeft: `1px solid ${colors.white}`,
    borderRight: `1px solid ${colors.white}`,
    '&:before': {
      content: 'no-close-quote',
      display: 'block',
      position: 'absolute',
      top: '6px',
      left: '16px',
      width: '24px',
      height: '24px',
      backgroundColor: 'rgba(73, 221, 186, 0.12)',
    },
    '&:hover': {
      ...typography.buttons,
      cursor: 'crosshair',
      maxWidth: '200px',
      textAlign: 'center',
      height: '36px',
      padding: '8px 16px 8px 24px',
      position: 'relative',
      display: 'flex',
      lineHeight: 1.5,
      letterSpacing: '2px',
      fontWeight: 'bold',
      alignItems: 'center',
      boxSizing: 'border-box',
      borderRadius: '1px',
      border: `1px solid ${colors.white}`,
      '&:before': {
        display: 'none',
      },
      '& $textWrapper': {
        backgroundColor: '#49ddba',
        color: colors.black,
      },
    },
  },
  active: {
    backgroundColor: colors.primary,
    color: colors.black,
  },
  activeTextWrapper: {
    padding: '0 4px',
    backgroundColor: '#49ddba',
  },
  textWrapper: {
  },
  center: {
    textAlign: 'center',
  },
};

const NavigationButton = ({ ...props }) => {
  const {
    children,
    classes,
    active,
    onClick,
  } = props;

  return (
    <div className={active ? classes.activeButton : classes.button} onClick={onClick}>
      {/* <img className={classes.leftBorder} src={ButtonLeftBorder} alt='' />
        <img className={classes.rightBorder} src={ButtonRightBorder} alt='' /> */}
      <div className={active ? classes.activeTextWrapper : classes.textWrapper}>
        <span className={`${classes.text} ${active ? classes.active : ''}`}>{children}</span>
      </div>
    </div>
  );
};

NavigationButton.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default withStyles(styles)(NavigationButton);
