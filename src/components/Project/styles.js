import { colors, typography, breakpoints } from '../../styles';

export default {
  shadow: {
    position: 'absolute',
    top: 0,
    height: '150px',
    width: '100%',
    boxShadow: 'inset 0px 100px 46px -12px black',
    [breakpoints.md]: {
      height: '200px',
      boxShadow: 'inset 0px 100px 45px -6px black',
    },
  },
  container: {
    fontFamily: 'Space Mono',
    color: colors.white,
    flexGrow: 1,
    height: '100%',
  },
  mainSectionContainer: {
    height: 'calc(100% - 70px)',
    overflowY: 'scroll',

    [breakpoints.md]: {
      height: 'calc(100% - 119px)',
    },
  },
  sections: {
    paddingTop: '88px',

    [breakpoints.sm]: {
      paddingTop: '168px',
    },

    '& > :last-child': {
      marginBottom: 0,
    },
  },
  headline: {
    fontSize: '32px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 1.5,

    [breakpoints.sm]: {
      fontSize: '56px',
    },
  },
  subHeadline: {
    fontSize: '40px',
    marginBottom: '50px',
  },
  highlighted: {
    background: colors.white,
    color: colors.black,
    display: 'inline-block',
    padding: '16px 8px',
    fontSize: 24,
    lineHeight: 1.5,

    [breakpoints.md]: {
      padding: '16px 8px',
      fontSize: 40,
    },
  },
  projectLogo: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    maxWidth: '48px',

    [breakpoints.sm]: {
      top: '72px',
      left: '72px',
      maxWidth: '64px',
    },
  },
  closeIcon: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    maxWidth: '48px',
    cursor: 'pointer',

    [breakpoints.sm]: {
      top: '72px',
      right: '72px',
      maxWidth: '64px',
    },
  },


  sectionWrapper: {
    width: '86%',
    margin: '0 auto 56px',

    [breakpoints.sm]: {
      width: '80%',
      margin: '0 auto 64px',
    },
  },


  text: {
    ...typography.h4,

    [breakpoints.sm]: {
      ...typography.h3,
    },
  },

  sectionContent: {
    ...typography.h4,
    marginBottom: '32px',


    [breakpoints.sm]: {
      ...typography.h3,
    },
  },
  bullet: {
    color: colors.primary,
  },
  bulletPoint: {
    ...typography.h4,
    color: 'rgba(255,255,255,0.72)',
    margin: '0 0 24px 24px',

    [breakpoints.sm]: {
      ...typography.h3,
      margin: '0 0 24px 40px',
    },
  },


  imageWrapper: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    marginBottom: '8px',

    [breakpoints.sm]: {
      width: '90%',
    },
  },


  fullWidthImageContainer: {
    textAlign: 'center',
    margin: '0 auto 40px',

    [breakpoints.sm]: {
      margin: '180px auto 180px',
    },
  },
  fullWidthImage: {
    width: '100%',
    height: 'auto',
  },


  review: {
  },
  reviewAvatarContainer: {
    textAlign: 'center',

    [breakpoints.md]: {
      textAlign: 'left',
    },
  },
  reviewAvatar: {
    width: '96px',
    margin: '0 0 24px',

    [breakpoints.md]: {
      width: '58px',
      margin: 8,
    },
  },
  reviewHeadline: {
    fontSize: '40px',
    marginBottom: '40px',
    '& $highlighted': {
      textAlign: 'center',
      background: '#f8e71c',
    },
  },
  reviewerInfo: {
    margin: '0 0 32px',
    color: colors.primary,
  },
  reviewerNameContainer: {
    marginBottom: '10px',
  },
  reviewerName: {
    borderBottom: `2px solid  ${colors.primary}`,
  },
  reviewContainer: {
    marginBottom: '64px',
  },
  reviewContent: {
    ...typography.h4,

    [breakpoints.sm]: {
      ...typography.h3,
    },
  },


  projectName: {
    fontSize: '20px',
    lineHeight: 1.5,
    letterSpacing: '2px',
    color: 'rgba(255,255,255,0.9)',
  },

  youtubeContainer: {
    width: '100%',
    margin: '80px 0',
    textAlign: 'center',

    '& > iframe': {
      width: '80%',
      height: '400px',
    },
  },

  ctaButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
};
