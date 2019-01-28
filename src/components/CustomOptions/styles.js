export default {
  customOptionsWrapper: {
    fontFamily: 'Space Mono',
  },
  avatarWrapper: {
    width: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 2,
    maxWidth: '70px',
    paddingBottom: '35px',
  },
  optionsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 10,
    alignItems: 'center',
    margin: '16px 0 8px -5px',

    '@media (min-width: 960px)': {
      margin: '32px 0 8px -24px',
    },
  },
};
