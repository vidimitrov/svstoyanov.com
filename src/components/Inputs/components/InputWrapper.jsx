import styled, { css } from 'styled-components';
import Line from './Line';

const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  ${props => props.rendered && css`
    ${Line} {
      transform: scaleX(1);
    }
  `}
`;

export default InputWrapper;