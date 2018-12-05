import { colors } from '../../../styles';
import chatMessageStyles from './chatMessageStyles';

const activeChatMessageStyles = {
  activeMessageWrapper: {
    paddingTop: '40px',
  },
  prevSlide: {},
  activeSlide: {},
  itemTitle: {},
  subTitle: {
    fontSize: '14px',
    color: colors.gray,
  },
  title: {
    fontSize: '50px',
    margin: '20px 0 40px',
  },
  activeMessageButtons: {},
  activeMessageButton: {},
  skipChatButton: {
    width: '230px',
    height: '50px',
    color: colors.white,
    background: 'url(../../../assets/skip-chat-button.svg) no-repeat center',
    backgroundSize: '220px 60px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  nextSlide: {},
};
export default {
  ...chatMessageStyles,
  ...activeChatMessageStyles,
};
