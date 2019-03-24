import styled, { keyframes } from 'styled-components';
import { scale } from '../../common/animations';
import { animations } from '../../../../styles';

const Image = styled.img`
  animation: ${scale} .3s ease forwards;
  border-radius: ${props => (props.user ? '50% 50% 50% 0' : '50% 50% 0 50%')};
  height: 48px;
  width: 48px;
  min-width: 40px;
  padding: 3px;
  animation: ${animations.fadeIn} 250ms ease-out;
`;

export default Image;
