import styled from 'styled-components';
import { scale } from '../../common/animations';

const Image = styled.img`
  animation: ${scale} .3s ease forwards;
  border-radius: ${props => (props.user ? '50% 50% 50% 0' : '50% 50% 0 50%')};
  height: 40px;
  width: 40px;
  min-width: 40px;
  padding: 3px;
  transform: scale(0);
  transform-origin: ${props => (props.user ? 'bottom left' : 'bottom right')};
`;

export default Image;
