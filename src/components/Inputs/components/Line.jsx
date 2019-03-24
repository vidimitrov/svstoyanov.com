import styled from 'styled-components';

const Line = styled.div`
  display:block;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #fff;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
  transform-origin:  0% 50%;
`;

export default Line;