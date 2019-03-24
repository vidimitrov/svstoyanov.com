import styled from 'styled-components';
import { animations } from '../../styles';

const ArrowAvatar = styled.img`
  width: 10px;
  height: 15px;
  animation: ${animations.fadeIn} 250ms ease-out;
`;

export default ArrowAvatar;
