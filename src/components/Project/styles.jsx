import {colors, typography} from '../../styles';

export default {
  container: {
    fontFamily: 'Space Mono',
    background: 'rgba(0,0,0,0.1) url("../../../assets/bg.png") no-repeat center',
    backgroundBlendMode: 'multiply',
    color: colors.white,
    flexGrow: 1,
    height: '100%',
  },
  headline: {
    ...typography.h2,
  },
  description: {
    ...typography.h3,
  },
  contactMeSection: {
    borderTop: '1px solid ' + colors.white,
    overflow: 'auto',
    height: '400px',
  },
};
