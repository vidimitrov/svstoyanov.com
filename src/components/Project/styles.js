import { colors, typography } from '../../styles';

export default {
  container: {
    fontFamily: 'Space Mono',
    color: colors.white,
    flexGrow: 1,
    height: '100%',
  },
  mainSection: {
    height: 'calc(100% - 119px)',
    overflowY: 'scroll',
  },
  mainSectionContainer: {
    width: '70%',
    margin: '96px auto',
  },
  headline: {
    fontSize: '70px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subHeadline: {
    fontSize: '40px',
    marginBottom: '50px',
  },
  highlighted: {
    background: colors.primary,
    color: colors.black,
  },
  description: {
    ...typography.h3,
    margin: '50px 10% 50px 0',
  },
  bullet: {
    color: colors.primary,
  },
  bulletPoint: {
    ...typography.h3,
    color: 'rgba(255,255,255,0.72)',
    margin: '0 10% 20px 50px',
  },
  landingImage: {
    width: '90%',
  },
  sidebar: {

  },
  closeIcon: {
    fontSize: '60px !important',
    color: 'rgba(255,255,255, 0.24)',
    position: 'absolute',
    right: '80px',
    top: '80px',
  },
  imageSection: {
    textAlign: 'center',
  },
  imageSectionImage: {
    width: '100%',
    height: 'auto',
    margin: '0 auto',
  },
  review: {
    width: '70%',
    margin: '96px auto',
  },
  avatarContainer: {
  },
  reviewHeadline: {
    fontSize: '40px',
    marginBottom: '40px',
    '& $highlighted': {
      background: '#f8e71c',
    },
  },
  reviewAvatar: {
    width: '58px',
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
  },
  reviewContent: {
    ...typography.h3,
  },
  projectName: {
    fontSize: '20px',
    lineHeight: 1.5,
    letterSpacing: '2px',
    color: 'rgba(255,255,255,0.9)',
  },
};
