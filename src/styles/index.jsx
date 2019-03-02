const colors = {
  white: '#FFFFFF',
  black: '#171717',
  primary: '#02A0A7',
  cian: '#02A0A7',
  darkCian: 'rgba(73, 221, 186, 0.12)',
  gray: 'rgba(255, 255, 255, 0.12)',
  lighterGray: 'rgba(255, 255, 255, 0.48)',
  darkerGray: 'rgba(255, 255, 255, 0.72)',
};

const typography = {
  h1: {
    fontSize: '72px',
    lineHeight: '108px',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '48px',
    lineHeight: '72px',
  },
  h3: {
    fontSize: '24px',
    lineHeight: '36px',
  },
  h4: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  h5: {
    fontSize: '12px',
    lineHeight: '18px',
  },
  buttons: {
    fontSize: '16px',
    lineHeight: '21px',
  },
  text: {
    fontSize: '24px',
    lineHeight: '36px',
  },
};

const breakpoints = {
  xs: '@media (min-width: 0px)',
  sm: '@media (min-width: 600px)',
  md: '@media (min-width: 960px)',
  lg: '@media (min-width: 1280px)',
};

export {
  colors,
  typography,
  breakpoints,
};
