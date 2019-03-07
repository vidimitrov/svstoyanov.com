import { breakpoints } from '../../styles';

export default {
  navLink: {
    textDecoration: 'none',
  },
  slider: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    margin: '16px 0',
    fontFamily: 'Space Mono',

    [breakpoints.md]: {
      margin: '72px 0',
    },
  },
  sliderBody: {
    maxWidth: '100%',
    position: 'relative',
    margin: '0 auto',
    padding: '0 16px',

    [breakpoints.md]: {
      maxWidth: '60%',
    },
  },
  projectSliderContainer: {
    display: 'flex !important',
  },
  projectId: {
    fontSize: '8px',
    lineHeight: '15px',
    letterSpacing: '1px',
    color: 'rgba(255, 255, 255, 0.54)',

    [breakpoints.md]: {
      fontSize: '12px',
      lineHeight: 1.5,
      letterSpacing: '2px',
    },
  },
  duration: {
    display: 'none',

    [breakpoints.md]: {
      display: 'block',
      borderBottom: '1px solid',
      paddingBottom: '6px',
      textAlign: 'center',
      fontSize: '12px',
      letterSpacing: '2px',
      color: '#02A0A7',
    },
  },
  projectName: {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '48px',
    letterSpacing: '1.78px',

    [breakpoints.md]: {
      fontSize: '56px',
      lineHeight: 1.5,
      letterSpacing: '4px',
    },
  },
  avatar: {
    height: '48px',
    width: '48px',
    padding: '9px',
  },
  projectDescription: {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '1.2px',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: '32px 0 46px',
    display: 'flex',

    [breakpoints.md]: {
      fontSize: '20px',
      lineHeight: 1.5,
      letterSpacing: '2px',
    },

    '& > div': {
      padding: 8,
    }
  },
  buttonsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',

    [breakpoints.md]: {},
  },
  navigationButtons: {
    display: 'flex',
  },
  sliderNavButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '180px',
  },
  sliderRightButton: {
    right: '-170px',
  },
  sliderLeftButton: {
    left: '-200px',
  },
};
