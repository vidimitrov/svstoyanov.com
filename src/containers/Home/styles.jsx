/* eslint max-len: 0 */
import {colors} from '../../styles';

export default {
  container: {
    fontFamily: 'Space Mono',
    color: colors.white,
    flexGrow: 1,
    height: 'calc(100% - 100px)',
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
    maxWidth: '450px',
    margin: '0 auto',
    zIndex: 999,
  },
  chatContainer: {
    height: '100%',
  },
};
