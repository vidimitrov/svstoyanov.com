import styled from 'styled-components';
import { scale } from '../../common/animations';
import defaultTheme from '../../theme';
import { breakpoints } from '../../../../styles';

const Bubble = styled.div`
  animation: ${scale} .3s ease forwards;
  background: ${props => (props.user ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
  border-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? '18px 0 0 18px' : '0 18px 18px 0px';
    } if (!isFirst && isLast) {
      return user ? '18px 0 18px 18px' : '0 18px 18px 18px';
    }
    return props.user ? '18px 18px 0 18px' : '18px 18px 18px 0';
  }};
  color: ${props => (props.user ? props.theme.userFontColor : props.theme.botFontColor)};
  display: inline-block;
  max-width: 50%;
  max-width: 100%;
  margin: ${(props) => {
    const { isFirst, showAvatar, user } = props;
    if (!isFirst && showAvatar) {
      return user ? '-8px 46px 0 0' : '-8px 0 0 54px';
    } if (!isFirst && !showAvatar) {
      return user ? '-8px 0px 0 0' : '-8px 0 0 0px';
    }

    return `0 0 0 ${user ? '20px' : '0'}`;
  }};
  overflow: hidden;
  position: relative;
  padding: 8px;
  transform: scale(0);
  transform-origin: ${(props) => {
    const { isFirst, user } = props;
    if (isFirst) {
      return user ? 'bottom right' : 'bottom left';
    }

    return user ? 'top right' : 'top left';
  }};


  font-family: 'Space Mono';
  font-size: 10px;
  line-height: 1.8;
  letter-spacing: 1px;

  ${breakpoints.sm} {
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 1.5px;
  }
`;

Bubble.defaultProps = {
  theme: defaultTheme,
};

export default Bubble;
