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

    '@media (min-width: 960px)': {
      margin: '72px 0',
    },
  },
  projectId: {
    fontSize: '8px',
    lineHeight: '15px',
    letterSpacing: '1px',
    color: 'rgba(255, 255, 255, 0.54)',

    '@media (min-width: 960px)': {
      fontSize: '12px',
      lineHeight: 1.5,
      letterSpacing: '2px',
    },
  },
  duration: {
    display: 'none',

    '@media (min-width: 960px)': {
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

    '@media (min-width: 960px)': {
      fontSize: '72px',
      lineHeight: 1.5,
      letterSpacing: '4px',
    },
  },
  projectDescription: {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '1.2px',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: '32px 0 46px',

    '@media (min-width: 960px)': {
      fontSize: '20px',
      lineHeight: 1.5,
      letterSpacing: '2px',
    },
  },
  buttonsWrapper: {
    display: 'flex',

    '@media (min-width: 960px)': {

    },
  },
  navigationButtons: {
    display: 'flex',
  }
};
