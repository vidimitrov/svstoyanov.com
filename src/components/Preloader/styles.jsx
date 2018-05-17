import {colors} from '../../styles';

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
  show: {
    visibility: 'visible !important',
    opacity: '1 !important',
    transition: 'all 0.5s ease',
  },
  preloaderInner: {
    textAlign: 'center',
    fontSize: '3em',
    color: colors.white,
  },
};
