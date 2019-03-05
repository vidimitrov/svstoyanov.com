import { colors, breakpoints } from '../../styles';

export default {
  footer: {
    borderTop: `1px solid ${colors.gray}`,
    backgroundColor: '#000000',
    alignItems: 'center',
    position: 'fixed',
    padding: '16px 72px 24px',
    bottom: 0,
    minHeight: '56px',

    [breakpoints.sm]: {
      padding: '16px 24px',
      minHeight: '72px',
    },
    [breakpoints.md]: {
      padding: '24px 72px 32px',
    }
  },
  musicPlayer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  muted: {
    width: '24px',
    marginRight: '15px',
  },
  equalizer: {
    width: '50px',
    transform: 'rotate(180deg)',
  },
};
