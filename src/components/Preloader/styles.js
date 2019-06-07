import { colors, breakpoints } from '../../styles';

const font = {
  fontSize: '16px',
  lineHeight: '32px',
  textAlign: 'center',
};

export default {
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100 %',
    backgroundColor: colors.black,
    visibility: 'hidden',
    opacity: 0,
    transition: 'all 0.5s ease',
    zIndex: 99999999999999,
  },
  innerContainer: {
    width: '500px',
    margin: '0 auto',
  },
  wrapper: {
    alignItems: 'center',
    maxWidth: '350px',
    margin: '0 auto',

    [breakpoints.md]: {
      margin: 0,
    },
  },
  show: {
    visibility: 'visible !important',
    opacity: '1 !important',
    transition: 'all 0.5s ease',
  },
  text: {
    ...font,
  },
  arrow: {
    height: '16px',
    marginRight: '17px',
  },
  percentageWrapper: {
    marginLeft: '16px',
  },
};
