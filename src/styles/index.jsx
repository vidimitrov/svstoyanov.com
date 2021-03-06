import { keyframes } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  black: '#000',
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
    fontSize: '18px',
    lineHeight: 1.5,
  },
  h4: {
    fontSize: '16px',
    lineHeight: 1.5,
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

const animations = {
  fadeIn: keyframes`
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,
  scaleIn: keyframes`
    from {
      transform: scaleX(0);
      opacity: 0;
    }

    to {
      transform: scaleX(1);
      opacity: 1;
    }
  `,
};

export {
  colors,
  typography,
  breakpoints,
  animations,
};
