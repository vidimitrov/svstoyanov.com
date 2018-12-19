export default {
  avatarWrapper: {
    width: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  input: {
    fontFamily: 'Space Mono',
    fontSize: '24px',
    lineHeight: 1.5,
    letterSpacing: '2px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'rgba(255,255,255,0.54)',
    width: '100%',
    paddingBottom: '16px',
    '&:focus': {
      outline: 'none',
    },
  },
  textarea: {
    fontFamily: 'Space Mono',
    fontSize: '24px',
    lineHeight: 1.5,
    letterSpacing: '2px',
    maxWidth: '100%',
    height: '50px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'rgba(255,255,255,0.54)',
    width: '100%',
    '&:focus': {
      outline: 'none',
    },
  },
};
