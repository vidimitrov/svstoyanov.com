import { colors, breakpoints } from '../../styles';

export default {
  footer: {
    borderTop: `1px solid ${colors.gray}`,
    alignItems: 'center',
    position: 'fixed',
    padding: '16px 72px 24px',
    bottom: 0,
    minHeight: '53px',

    [breakpoints.sm]: {
      padding: '24px 24px 32px',
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
