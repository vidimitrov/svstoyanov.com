/* eslint max-len: 0 */
import {colors} from '../../styles';

export default {
  container: {
    fontFamily: 'Space Mono',
    background: 'rgba(0,0,0,0.1) url("../../../assets/bg.png") no-repeat center',
    backgroundBlendMode: 'multiply',
    color: colors.white,
    flexGrow: 1,
    height: '100%',
    paddingBottom: '15% !important',
  },
  videoBackground: {
    position: 'fixed',
    top: '50%',
    // right: 0,
    left: '50%',
    // bottom: 0,
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
  chatWrapper: {
    height: '100%',
  },
};
