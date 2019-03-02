import { colors } from '../../styles';

export default {
  footer: {
    borderTop: `1px solid ${colors.gray}`,
    alignItems: 'center',
    position: 'fixed',
    padding: '16px 72px 24px',
    bottom: 0,
    minHeight: '53px',
  },
  musicPlayer: {
    textAlign: 'right',
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
