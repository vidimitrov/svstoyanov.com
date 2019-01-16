const formControl = {
  fontFamily: 'Space Mono',
  fontSize: '18px',
  lineHeight: 1.5,
  letterSpacing: '2px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'rgba(255,255,255,1)',
  width: '100%',
};

export default {
  avatarWrapper: {
    width: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    ...formControl,
    paddingBottom: '16px',
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: 'rgba(255,255,255,0.54)',
    },
  },
  textarea: {
    ...formControl,
    maxWidth: '100%',
    height: '50px',
    resize: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: 'rgba(255,255,255,0.54)',
    },
  },
};
