import styled, { keyframes } from 'styled-components';
import { scale } from '../../common/animations';

const fadeIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Image = styled.img`
  animation: ${scale} .3s ease forwards;
  border-radius: ${props => (props.user ? '50% 50% 50% 0' : '50% 50% 0 50%')};
  height: 48px;
  width: 48px;
  min-width: 40px;
  padding: 3px;
  animation: ${fadeIn} 250ms ease-out;
`;

export default Image;
