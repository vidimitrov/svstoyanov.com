import { breakpoints } from '../../styles';

const formControl = {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  lineHeight: 1.5,
  letterSpacing: '1px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'rgba(255,255,255,1)',
  width: '100%',

  [breakpoints.md]: {
    fontSize: '18px',
  },
};

export default {
  avatarWrapper: {
    width: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '8px',
    marginBottom: '16px',

    [breakpoints.md]: {
      marginBottom: 0,
      paddingBottom: '16px',
    },
  },
  input: {
    ...formControl,
    paddingBottom: '8px',
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: 'rgba(255,255,255,0.54)',
    },
    '&:disabled': {
      color: 'rgba(255,255,255,0.54)',
    },
    [breakpoints.md]: {
      paddingBottom: '16px',
      ...formControl[breakpoints.md],
    },
  },
  textarea: {
    ...formControl,
    maxWidth: '100%',
    resize: 'none',
    height: '32px !important',
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: 'rgba(255,255,255,0.54)',
    },
    '&:disabled': {
      color: 'rgba(255,255,255,0.54)',
    },
    [breakpoints.md]: {
      height: '50px !important',
      ...formControl[breakpoints.md],
    },
  },
};
