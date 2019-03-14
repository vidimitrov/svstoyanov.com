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
      margin: '72px 0 0',
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
  sliderOffset: {
    padding: '0 72px',
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
    '&:before': {
      content: 'no-close-quote',
      display: 'block',
      position: 'absolute',
      top: '22px',
      left: '64px',
      width: '80px',
      height: '80px',
      backgroundColor: '#ffffff',
      opacity: 0.07,
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
    margin: '32px 0 0',
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
    flexWrap: 'wrap',
    display: 'flex',
    flex: 1,

    [breakpoints.md]: {
      paddingTop: '16px',
    },
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
  selectedOption: {
    margin: 0,
  },
  selectedOptionOffset: {
    padding: '32px 0',
  },
  arrowAvatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    minWidth: '72px',
    paddingBottom: '32px',
  }
};
