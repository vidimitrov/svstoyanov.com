import { colors, typography } from '../../styles';

export default {
  container: {
    fontFamily: 'Space Mono',
    color: colors.white,
    flexGrow: 1,
    height: '100%',
  },
  mainSection: {
    height: '100%',
    overflowY: 'scroll',
  },
  mainSectionContainer: {

  },
  headline: {
    fontSize: '70px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '50px 30% 50px 0',
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
  contactMeSection: {
    overflow: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30px',
  },
  videoBackground: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    overflow: 'hidden',
    zIndex: -100,
    width: 'auto',
    height: 'auto',
    minWidth: '100%',
    minHeight: '100%',
    transform: 'translate(-50%, -50%)',
  },
  landingImage: {
    width: '90%',
  },
  sidebar: {

  },
  closeIcon: {
    fontSize: '60px !important',
    color: 'rgba(255,255,255, 0.24)',
    margin: '20px 0 150px 20px',
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
    padding: '20px 72px 50px',
  },
  avatarContainer: {
    paddingLeft: '72px',
  },
  reviewAvatar: {
    width: '100%',
  },
  reviewerInfo: {
    margin: '10px 40px 30px',
    color: colors.primary,
  },
  reviewerNameContainer: {
    marginBottom: '10px',
  },
  reviewerName: {
    borderBottom: `2px solid  ${colors.primary}`,
  },
  reviewContainer: {
    paddingLeft: '40px',
  },
  reviewContent: {},
  projectName: {
    fontSize: '24px',
    lineHeight: 1.5,
    letterSpacing: '2px',
    color: 'rgba(255,255,255,0.9)',
  },
};
