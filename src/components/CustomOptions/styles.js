import { breakpoints } from '../../styles';

export default {
  customOptionsWrapper: {
    fontFamily: 'Space Mono',
  },
  avatarWrapper: {
    width: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    maxWidth: '70px',
    minWidth: '76px',

    [breakpoints.md]: {
      minWidth: '70px',
    },

  },
  optionsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 10,
    alignItems: 'center',
    margin: '16px 0',
  },
};
