/* eslint max-len: 0 */
import { colors, breakpoints } from '../../styles';

export default {
  container: {
    fontFamily: 'Space Mono',
    color: colors.white,
    flexGrow: 1,
    height: 'calc(100% - 57px)',

    [breakpoints.sm]: {
      height: 'calc(100% - 125px)',
    },
    [breakpoints.md]: {
      height: 'calc(100% - 135px)',
    },
  },
  videoBackground: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    overflow: 'hidden',
    zIndex: -100,
    width: 'auto',
    height: 'auto',
    minWidth: '100%',
    minHeight: '100%',
    transform: 'translate(-50%, -50%)',
  },
  navigation: {
    textAlign: 'center',
    maxWidth: '550px',
    margin: '0 auto',
    zIndex: 999,
  },
  mainSection: {
  },
  chatContainer: {
    height: '100%',
  },
  logo: {
    position: 'absolute',
    width: '35px',
    [breakpoints.sm]: {
      width: '80px',
    },
    [breakpoints.md]: {
      width: '90px',
    },
  },
};
