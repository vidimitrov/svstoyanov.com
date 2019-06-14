import styled from 'styled-components';
import { animations, breakpoints } from '../../styles';

const ArrowAvatar = styled.img`
  width: 7px;
  height: 15px;
  animation: ${animations.fadeIn} 250ms ease-out;

  ${breakpoints.md} {
    width: 10px;
    height: 15px;
  }
`;

export default ArrowAvatar;
