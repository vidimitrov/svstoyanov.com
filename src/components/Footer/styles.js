import { colors } from '../../styles';

export default {
  footer: {
    borderTop: `1px solid ${colors.gray}`,
    alignItems: 'center',
    position: 'fixed',
    padding: '24px 72px 32px',
    bottom: 0,
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
