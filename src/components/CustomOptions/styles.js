import { breakpoints } from '../../styles';

export default {
  customOptionsWrapper: {
    fontFamily: 'Space Mono',
    margin: '24px 0',
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
  lineOfOptions: {
    display: 'flex',
    alignItems: 'center',
    '&:nth-child(2)': {
      margin: '16px 0 0',
    },
  },
  optionsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 10,
  },
};
