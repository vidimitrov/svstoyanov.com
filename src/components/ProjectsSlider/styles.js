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
    fontSize: '10px',
    lineHeight: '15px',
    letterSpacing: '1px',
    margin: '24px 0 0',
    color: 'rgba(255, 255, 255, 0.54)',

    [breakpoints.md]: {
      margin: 0,
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
    letterSpacing: '1px',
    position: 'relative',
    marginBottom: '8px',

    [breakpoints.md]: {
      fontSize: '56px',
      lineHeight: 1.5,
      letterSpacing: '4px',
      marginBottom: 0,
    },
    '&:before': {
      content: 'no-close-quote',
      display: 'block',
      position: 'absolute',
      top: '0px',
      left: '56px',
      width: '48px',
      height: '48px',

      backgroundColor: '#ffffff',
      opacity: 0.07,

      [breakpoints.md]: {
        top: '0px',
        left: '48px',
        width: '80px',
        height: '80px',
      },
    },
  },
  avatar: {
    height: '48px',
    width: '48px',
    padding: '9px',

    // [breakpoints.md]: {
    //   height: '64px',
    //   width: '64px',
    // },
  },
  projectDescription: {
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '1.2px',
    color: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',

    [breakpoints.md]: {
      fontSize: '18px',
      lineHeight: 1.5,
      letterSpacing: '2px',
      margin: '32px 0 0',
    },

    '& > div': {
      padding: 8,
    },
  },
  buttonsWrapper: {
    flexWrap: 'wrap',
    display: 'flex',
    paddingTop: '8px',
    flex: 1,

    [breakpoints.md]: {
      paddingTop: '16px',
    },
  },
  navigationButtons: {
    display: 'flex',
    paddingLeft: '72px',
    margin: '16px 0 0',
  },
  sliderNavButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '24px',
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
    paddingBottom: '8px',
    paddingTop: '8px',

    [breakpoints.md]: {
      alignItems: 'center',
      paddingTop: 16,
      paddingBottom: 0,
    },
  },
};
